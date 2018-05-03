CFLAGS=-Wall

all: cpuidtest

cpuidtest: cpuidtest.o
	gcc cpuidtest.o -o cpuidtest

cpuidtest.o: cpuidtest.c
	gcc $(CFLAGS) -c cpuidtest.c

clean:
	rm cpuidtest cpuidtest.o
