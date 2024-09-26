function inverte(nome){
    i=nome.length-1;
    inv= '';
    while (i>=0){
        inv=inv+nome[i];
        i=i-1;
    };
    return inv;
}
r=inverte("Pedro");
console.log("invertido é:", r);

r=inverte("Mariana");
console.log("invertido é:", r);

/* -- Exercicio 5 pelo professor --

 function inverte(palavra) {
  i = 0;
  saida = "";
  while (i < palavra.length) {
    saida = palavra[i] + saida;
    i = i + 1;
  }
  return saida;
}

r = inverte("Pedro");
console.log("Invertido:", r);

r = inverte("Mariana");
console.log("Invertido:", r); */