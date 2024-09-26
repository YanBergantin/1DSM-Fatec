function inverter(arr){
    j=arr.length-1;
    while(j>=0){
        console.log(j,':',arr[j]);
        j=j-1;
    };
};
console.log('Lista:');
numeros = [8,3,4,7,5];
inverter(numeros);

console.log('\nLista:');
numeros = [5,4,3];
inverter(numeros);