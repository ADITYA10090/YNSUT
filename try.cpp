#include<iostream>
#include<string>
using namespace std;


void print (string &input){
    if (input=="hello"){
        input="Heyo";
    }
}
int main(){
    string s="hello";
    print(s);
    cout<<s;

    return 0;
}