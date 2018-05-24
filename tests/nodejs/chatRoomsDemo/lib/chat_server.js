'use strict';

const socketio = require('socket.io');
let io;
let guestNumber = 1;
let nickNames= {};
let namesUsed = [];
let currentRoom = {};

exports.listen = function(server) {
    io = socketio.listen(server);
    io.set('log level', 1);
    
    io.sockets.on('connection', (socket) => {
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
        joinRoom(socket, 'Lobby');

        handleMessageBroadcasting(socket, nickNames);
        handleNameChangeAttempts(socket, nickNames, namesUsed);
        handleRoomJoining(socket);

        socket.on('rooms', () => {
            socket.emit('rooms', io.of('/').rooms);
        });

        handleClientDisconnection(socket, nickNames, namesUsed);
    });
};

function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
    let name = 'Guest' + guestNumber;
    nickNames[socket.id] = name;
    socket.emit('nameResult', {
        success: true,
        name: name,
    });
    namesUsed.push(name);
    return guestNumber + 1;
}

function joinRoom(socket, room) {
    socket.join(room);    
    currentRoom[socket.id] = room;
    socket.emit('joinResult', {room: room});

    socket.broadcast.to(room).emit('message', {
        text: `${nickNames[socket.id]} has joined ${room}.`
    });

    let usersInRoom = io.of('.').in(room).clients;
    if (usersInRoom.length > 1) {
        let usersInRoomSummary = 'Users currently in ' + room + ': ';
        for (let index in usersInRoom) {
            let userSocketId = usersInRoom[index].id;
            if (userSocketId != socket.id) {
                if (index > 0) {
                    usersInRoomSummary += ', ';
                }
                usersInRoomSummary += nickNames[userSocketId];
            }
        }
        usersInRoomSummary += '.';
        socket.emit('message', {text: usersInRoomSummary});
    }
}

function handleNameChangeAttempts(socket, nickNames, namesUsed) {
    socket.on('nameAttempt', (name) => {
        if (name.indexOf('Guest') == 0) {
            socket.emit('nameResult', {
                success: false,
                message: 'Names cannot begin with "Guest".',
            });
        } else {
            if (namesUsed.indexOf(name) == -1) {
                let previousName = nickNames[socket.id];
                let previousNameIndex = namesUsed.indexOf(previousName);
                namesUsed.push(name);
                nickNames[socket.id] = name;
                delete namesUsed[previousNameIndex];

                socket.emit('nameResult', {
                    success: true,
                    name: name
                });                

                socket.broadcast.to(currentRoom[socket.id]).emit('message', {
                    text: `${previousName} is now known as ${name}.`
                });
            } else {
                socket.emit('nameResult', {
                    success: false,
                    message: 'That name is already in use.',
                })
            };
        }
    });
}

function handleMessageBroadcasting(socket) {
    socket.on('message', (msg) => {
        socket.broadcast.to(msg.room).emit('message', {
            text: nickNames[socket.id] + ': ' + msg.text
        });
    });
}

function handleRoomJoining(socket) {
    socket.on('join', (room) => {
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRoom);
    })
}

function handleClientDisconnection(socket) {
    socket.on('disconnect', () => {
        let nameIndex = namesUsed.indexOf(nickNames[socket.id]);
        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    });
}