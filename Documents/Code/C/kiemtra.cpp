#include <stdio.h>
#include <math.h>
#define MAX 1000

int a[MAX], n;
int b[MAX], n1 = 0;
int c[MAX], n2 = 0;
int x;

void NhapKichThuocMang(int &n){
    do{
    printf("Nhap kich thuoc mang: ");
    scanf("%d", &n);
    }while(n < 1 || n > 1000);
}

void NhapMang(int a[], int n){
    for(int i = 0; i < n; i++){
        printf("a[%d] = ", i);
        scanf("%d", &a[i]);
    }
}

int KiemTraSNT(int a){
    int count = 0;
    for(int i = 1; i <= sqrt(a); i++){
        if(a % i == 0)
            count++;
    }
    if(count == 1)
        return 1;
    return 0;
}

void NhapX(int &x){
    printf("Nhap x: ");
    scanf("%d", &x);
}

int DemSNTNhoHonX(int a[], int n, int x){
    int count = 0;
    for(int i = 2; i < x; i++){
        if(KiemTraSNT(a[i]))
            count++;
    }
    return count;
}

int DemSoLanXuatHien(int a[], int b[], int k, int n, int n1){
    int count = 0;
    for(int i= 0; i < n; i++){
        if(k == a[i])
            count++;
    }
    if(count >= 2){
        for(int i = 0; i < n1; i++){
            if(k == b[i])
                return 0;
        }
        
        return 1;
    }
    return 0;
    
}

void ChenPhanTuVaoMang(int a[], int &n, int k){
    a[n] = k;
    n++;
}

void InGiaTriXuatHienItNhat2Lan(int a[], int n, int b[], int &n1){
    for(int i = 0; i < n; i++) {
        if(DemSoLanXuatHien(a, b, a[i], n, n1))
            ChenPhanTuVaoMang(b, n1, a[i]);            
        }
    for(int i = 0; i < n1; i++)
        printf("%d\t", b[i]);
}

void InPhanTuLe(int a[], int b[], int n, int n1){
    for(int i = 0; i < n; i++){
        if(a[i] % 2 != 0)
            ChenPhanTuVaoMang(b, n1, a[i]);
    }
    for(int i = 0; i < n1; i ++)
        printf("%d\t", b[i]);
}


int main(){

    NhapKichThuocMang(n);
    NhapMang(a, n);
    InGiaTriXuatHienItNhat2Lan(a, n, b, n1);
    printf("\n");
    InPhanTuLe(a, c, n, n2);


    return 0;
}