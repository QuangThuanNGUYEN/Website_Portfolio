#include <stdio.h>
#include <math.h>
int SoDao(int a, int count){
    int d = 0;
    while(a != 0){
        d = d * 10 + (a % 10);
        a /= 10;
    }

    d *= pow(10, count);
    return d;
}

int DecimalToBinary(int n){
    int a, b, count = 0;
    while(n % 2 == 0){
            count++;
            n /= 2;
        }
    while(n != 0){
        a = a * 10 + (n % 2);
        n /= 2;
    }
    return SoDao(a,count);
}


int main(){
    int n;
    printf("Nhap n: ");
    scanf("%d", &n);
    printf("\nSo dao: %d", DecimalToBinary(n));
    return 0;
}