CC=g++
CFLAGS=-Wall

all: hello

hello: hello.o
	$(CC) $(CFLAGS) hello.o -o hello

hello.o: hello.cpp
	$(CC) $(CFLAGS) -c hello.cpp

clean: 
	rm hello hello.o
