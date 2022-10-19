let str="naman";
let sr="";
let n=str.length-1;
for(n;n>=0;n--){
  sr+=str[n];
}if(str==sr){
  console.log("palindrome");
}else{
  console.log("not a palindrome");
}
  