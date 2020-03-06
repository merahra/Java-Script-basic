function sayloveyou(){
    console.log('jaan o baby');
    console.log("billy baby...koi tumi");
}

sayloveyou();
var date = 14;
var place="restaurent";
sayloveyou();
var hangoutplace="TSC";
sayloveyou();

function duoubleit(num){
    num=num*2;
    console.log(num);
}
duoubleit(5);

function duoubleit(num){
    result=num*2;
  return result;
}

var first=duoubleit(5);
var second=duoubleit(10);
var total=first+second;
console.log(first, second);
console.log(total);


function add(num1, num2){
    result=num1+num2;
    return result;  /* result ta ke pass kore dibe onno kono variable er majhe  */
}
var sum=add(4,5);
console.log(sum);