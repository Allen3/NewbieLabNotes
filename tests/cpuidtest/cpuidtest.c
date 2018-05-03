#include<stdio.h>
#include<string.h>

#define gcc_inline	__inline __attribute__((always_inline))

typedef unsigned int 	uint32_t;

typedef struct cpuinfo {
	uint32_t	eax;
	uint32_t	ebx;
	uint32_t	ecx;
	uint32_t	edx;
} cpuinfo;

static gcc_inline void
cpuid(uint32_t idx, cpuinfo *info) {
	asm volatile("cpuid"
		: "=a" (info->eax), "=b" (info->ebx),
		  "=c" (info->ecx), "=d" (info->edx)
		: "a" (idx)
	);
}

int main() {

	cpuinfo inf;
	cpuid(0, &inf);
	
	printf("inf.ebx = 0x%32x\n", inf.eax);
	printf("inf.ebx = 0x%32x\n", inf.ebx);
	printf("inf.ebx pointer = 0x%32x\n", &inf.ebx);

	char* str1, *str2;
	str1 = "GenuineIntel";
	str2 = "AuthenticAMD";
	
	//printf("%s\n", str1);

	printf("String = 0x%08x\n", *str1);
	printf("String = 0x%08x\n", *str2);

	int i;
	for (i = 0;i < 12;i ++) {
		printf("%02x ", *str1);
		str1 ++;
	}

	printf("result:\n");
	printf("%d\n", memcmp(&inf.ebx, "GenuineIntel", 12));
	printf("%d\n", memcmp(&inf.ebx, "AuthenticAMD", 12));

	return 0;
}
