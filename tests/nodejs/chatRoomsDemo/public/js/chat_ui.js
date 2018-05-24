function divEscapedContentElement(msg) {
    return $('<div></div>').text(msg);
}

function divSystemContentElement(msg) {
    return $('<div></div>').html('<i>' + msg + '</i>');
}

function processUserInput(chatApp, socket) {
    let msg = $('#send-message').val();
    let systemMsg;

    if (msg.charAt(0) == '/') {
        systemMsg = chatApp.processCommands(msg);
        if (systemMsg) {
            $('#messages').append(divSystemContentElement(systemMsg));
        }
    } else {
        chatApp.sendMessage($('#room').text(), msg);
        $('#messages').append(divEscapedContentElement(msg));
        $('#messages').scrollTop($('#messages').prop('scrollHeight'));
    }

    $('#send-messages').val('');
}

const socket = io.connect();

(function($) {
    $(function() {
        const chatApp = new Chat(socket);

        socket.on('nameResult', (result) => {
            let msg;
                        
            if (result.success) {
                msg = `You are now known as ${result.name}.`;
            } else {
                msg = result.message;
            }
            $('#messages').append(divSystemContentElement(msg));
            $('#messages').scrollTop($('#messages').prop('scrollHeight'));
        });

        socket.on('joinResult', (result) => {
            $('#room').text(result.room);
            $('#messages').append(divSystemContentElement('Room changed.'));
            $('#messages').scrollTop($('#messages').prop('scrollHeight'));
        });

        socket.on('message', (msg) => {
            $('#messages').append(divSystemContentElement(msg.text));
            $('#messages').scrollTop($('#messages').prop('scrollHeight'));
        });

        socket.on('rooms', (rooms) => {
            $('#room-list').empty();
            
            for (let room in rooms) {
                room = room.substring(1, room.length);
                if (room != '') {
                    $('#room-list').append(divEscapedContentElement(room));
                }
            }

            $('#room-list div').click( () => {
                chatApp.processCommands('/join ' + $(this).text());
                $('#send-messages').focus();
            });
        });

        setInterval(() => {
            socket.emit('rooms');
        }, 1000);

        $('#send-messages').focus();

        $('#send-form').submit(() => {            
            processUserInput(chatApp, socket);
            return false;
        });
            
    });
})(jQuery);