#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <string.h>


int main()
{
    int check_num;
    repeat_from_here:
    int i = 0;
    char pwd[50];
    int check_capital;
    do{
        pwd[0] = '\0';
        check_num = 0;
        check_capital = 0;
        i = 0;
        printf("\nEnter your password (5 - 20 characters): ");
        do
        {
            pwd[i] = getch();
            printf("*");
            if(pwd[i] == 13)
                break;
            i++;
        }while(i < 20);
        if(i < 5) 
        {
            printf("Weak password\n");
            continue;
        }
        for(int a = 0; a < i; a++)
        {
            if(pwd[a] <= 90 && pwd[a] >= 65)
            {
                check_capital = 1;
                break;
            }
        }
        for(int b = 0; b < i; b++)
        {
            if(pwd[b] >= 48 && pwd[b] <= 57)
            {
                check_num = 1;
                break;
            }
        }        
        if(check_num != 1 && check_capital != 1) 
        {
            printf("\nMust contain number and capital letter");
        }
        if(check_num == 1 && check_capital != 1) 
        {
            printf("\nMust contain capital letter");
        }
        if(check_num != 1 && check_capital == 1) 
        {
            printf("\nMust contain number");
        }
    }while(check_capital != 1 || check_num != 1);
    printf("\nPassword: %s", pwd);
    getch();

    return 0;
}