function matriz(arr){
    i=0;
    som=0;
    while(i<arr.length){
        j = 0;
        while(j<arr[i].length){
            som= som+arr[i][j]; 
            j=j+1             
        };
        i=i+1        
    }
    return som;
};
numeros=[
    [9,2,4],
    [6,5,7],
    [2,1,3]
];
numeros2=[
    [5,8,3,4],
    [9,7,2]
]
s=matriz(numeros);
console.log('somatorio dos elementos é:',s);
s=matriz(numeros2);
console.log('\nsomatorio dos elementos é:',s);