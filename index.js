function reverse(str) {
    var s1 = "";
    var s=String(document.getElementById("string").value);
    for (var i = s.length - 1; i >= 0; i--) {
        s1 = s1 + s[i];
    }
    document.getElementById("result1").innerHTML="The Reversed String is : " + s1;
}

function palindrome() {    
    var a=0;
    var n=Number(document.getElementById("pal").value);
    var n1=n;
    while(n>0){
        var r=n%10;
        a=a*10 + r;
        n=Math.floor(n/10);
    }
    // a=n%10;
    // n=Math.floor(n/100);
    if(a==n1){
        document.getElementById("result2").innerHTML="YES, the number is Palindrome";
    }
    else{
        document.getElementById("result2").innerHTML="NO, the number is not Palindrome";
    }
}

function total() {
    var n=Number(document.getElementById("bill").value);
    var n1=Number(document.getElementById("tip").value);
    if(n<0 || n1<0){
        document.getElementById("result3").innerHTML="Please Enter a valid Number.";
    }
    else{
        var a= n + (n * n1 / 100);
        document.getElementById("result3").innerHTML="The Total amount to pay is " + a;
    }
}