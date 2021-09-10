let valores = [8,5,7,1,6,3,9]
valores.sort()
/* 
console.log(valores[0])
console.log(valores[1]) //maneira tradicional
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])


for (let pos=0;pos < valores.length; pos++) {                       //maneira mais simplificaada
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posição  ${pos} tem o valor ${valores[pos]} `) //maneira bem simplificada.
}