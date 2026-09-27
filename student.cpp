#include <iostream>
#include <unordered_map>
using namespace std; struct Student{string regNo,name;int ds,cpp,dbms,os;}; int main(){unordered_map<string,Student> s; s["23CS101"]={"23CS101","Vignesh K",90,88,92,85}; cout<<"Data Structure Demo Using unordered_map"; return 0;}