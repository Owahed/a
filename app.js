var str = 'aBcDeFgHiJkLmN';
var sL = str.length;
var i = 0;
for (; i < sL; i++) {
    if (str.charAt(i) === str.charAt(i).toLowerCase()) {
        console.log('uppercase:',str.charAt(i));
    }if (str.charAt(i) === str.charAt(i).toUpperCase()){
        console.log('uppercase:',str.charAt(i));
    }
}
