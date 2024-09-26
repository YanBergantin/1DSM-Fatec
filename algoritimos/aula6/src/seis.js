function somatoria(arr){
    i=0;
    som=0;
    while(i<arr.length){
        som= som+arr[i];
        i=i+1;
    }
    return som;
};
numeros = [8,3,4,7,5];
s= somatoria(numeros);
console.log("Somatória:", s);

numeros = [5,4,3];
s= somatoria(numeros);
console.log("Somatória:", s);

