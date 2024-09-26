function maior(x, y){
    if( x < y ){
        return y;
    }
    else{
        return x;
    }
}

m = maior(2,3);
console.log("Maior:", m);

m = maior(5,2);
console.log("Maior:", m);