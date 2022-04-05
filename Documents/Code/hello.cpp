#include <stdio.h>
#include <math.h>
#include <stdbool.h>
#include <conio.h>


#define MAX 100
int a[MAX], n;

void NhapKichThuoc(int &n){
    do{
        printf("Nhap kich thuoc (1 <= n <= 100): ");
        scanf("%d", &n);
    }while(n < 1 || n > 100);
}

void NhapMang(int a[], int n){
    printf("Nhap cac phan tu cua mang: ");
    for(int i = 0; i < n; i++){
        scanf("%d", &a[i]);
    }
}

void XuatMang(int a[], int n){
    printf("Cac phan tu cua mang: ");
    for(int i = 0; i < n; i++)
        printf("%d\t", a[i]);
}

int TongSoLeViTriChan(int a[], int n){
    int sum = 0;
    for(int i = 1; i < n; i += 2){
        if(a[i] % 2 != 0)
            sum += a[i];
    }
    return sum;
}

float TinhTBCSoLeViTriChan(int a[], int n){
    return TongSoLeViTriChan(a, n) * 1.0 / (n / 2);
}

int PhanTuLonNhat(int a[], int n){
    int max = a[0];
    for(int i = 0; i < n; i++)
        if(a[i] > max)
            max = a[i];
    return max;
}

int PhanTuNhoNhat(int a[], int n){
    int min = a[0];
    for(int i = 0; i < n; i++)
        if(a[i] < min)
            min = a[i];
    return min;
}

void InViTriNhoNhat(int a[], int n){
    printf("Vi tri co phan tu nho nhat: ");
    for(int i = 0; i < n; i++)
        if(a[i] == PhanTuNhoNhat(a, n))
            printf("%d\t", i);
}

int KiemTraSCP(int a){
    if(sqrt(a) == (int)sqrt(a))
        return 1;
    return 0;
}

int DemSCP(int a[], int n){
    int count = 0;
    for(int i = 0; i < n; i++)
        if(KiemTraSCP(a[i]))
            count++;
    return count;
}

bool LaSNT(int a){
    if(a < 2)
        return false;
    for(int i = 2; i <= sqrt(a); i++)
        if(a % i == 0)
            return false;
    return true;
}

void InSNT(int a[], int n){
    int count = 0;
    for(int i = 0; i < n; i++)
        if(LaSNT(a[i]))
            count++;
    if(count){
    for(int i = 0; i < n; i++)
        if(LaSNT(a[i]))
            printf("%d\t", a[i]);
    }
    else printf("Mang khong co so nguyen to");
}

void ThayAmBang0(int a[], int n){
    for(int i = 0; i < n; i++)
        if(a[i] < 0)
            a[i] = 0;
}

void XoaPhanTuTrongMang(int a[], int &n, int vtri){
    for(int i = vtri; i < n; i++)
        a[i] = a[i + 1];
    n--;
}

void XoaPhanTuAmTrongMang(int a[], int &n){
    for(int i = 0; i < n; i++)
        if(a[i] < 0){
            XoaPhanTuTrongMang(a, n, i);
            i--;
        }
}

void Swap(int &a, int &b){
    int temp = a;
    a = b;
    b = temp;
}

void SapXepMangTangDan(int a[], int n){
    for(int i = 0; i < n - 1; i++){
        for(int j = i + 1; j < n; j++)
            if(a[i] > a[j])
                Swap(a[i], a[j]);
    }
}

bool KiemTraAmDuongXenKe(int a[], int n){
    for(int i = 0; i < n - 1; i++){
        if(a[i] * a[i + 1] >= 0){
            return false;
        }
    }
    return true;
}



int main(){
    NhapKichThuoc(n);
    NhapMang(a, n);
    XuatMang(a, n);
    // printf("TBC cua so le o vi tri chan: %f", TinhTBCSoLeViTriChan(a, n));
    // printf("Phan tu lon nhat trong mang: %d\n", PhanTuLonNhat(a, n));
    // InViTriNhoNhat(a, n);
    // printf("\nSo luong so chinh phuong co trong mang: %d", DemSCP(a, n));
    // InSNT(a, n);
    // ThayAmBang0(a, n);
    // printf("\n");
    // XuatMang(a, n);
    // XoaPhanTuAmTrongMang(a, n);
    // printf("\n");
    // XuatMang(a, n);
    // SapXepMangTangDan(a, n);
    // printf("\n");
    // XuatMang(a, n);
    if(KiemTraAmDuongXenKe(a, n))
        printf("Mang co am duong xen ke");
    else printf("Mang khong co am duong xen ke");

    getch();


    return 0;
}