let num_1 = parseInt(prompt("Ingrese el primer número: "));
let num_2 = parseInt(prompt("Ingrese el segundo número: "));
let num_3 = parseInt(prompt("Ingrese el tercer número: "));

if (num_1<= num_2 && num_1<=num_3){
    menor= num_1;
}    
else if(num_2 < num_1 && num_2 <=num_3){
    menor = num_2;
}
else{
    menor=num_3;
}

console.log("El menor de los tres números es: "+ menor)
