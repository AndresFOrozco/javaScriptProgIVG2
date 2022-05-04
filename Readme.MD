# Ejercicios JavaScript

## Ejercicio 1

```javascript
let usuario = prompt("Ingresen su nombre : ");
console.log("Ahora estas en la matrix, " + usuario);
```
## Ejercicio 2

```javascript
let decimal = parseFloat(prompt("Ingrese un numero decimal: "));
let entero = parseInt(prompt("Ingrese un numero entero: "));
let suma = decimal+entero
console.log("El primer numero es: " +decimal);
console.log("El segundo numero es: " +entero);
console.log("El resultado de la suma es: " +suma);
```

## Ejercicio 3

```javascript
let pri_num = parseFloat(prompt("Ingrese el primer número: "));
let seg_num = parseFloat(prompt("Ingrese el segundo número: "));
let suma =pri_num+seg_num
console.log("El primer numero es: " +pri_num);
console.log("El segundo numero es: " +seg_num);
console.log("El resultado de la suma es: " +suma);
let ter_num =  parseFloat(prompt("Ingrese el tercer número: "));
let mult = suma*ter_num
console.log("El tercer numero es: " +ter_num);
console.log("El resultado de la multiplicación es: " +mult);
```

## Ejercicio 4

```javascript
let kilometros = parseFloat(prompt("Ingrese los kilometros recorridos: "));
let consumo = parseFloat(prompt("Ingrese los litros de combustible consumidos: "));
console.log("los kilometros recorridos son : " +kilometros + " Km");
console.log("El consumo de combustible es : " +consumo + " litros");
let litrosxKm =kilometros/consumo;
console.log("El consumo por kilometro es : " +litrosxKm + " litros");
```
## Ejercicio 5

```javascript
let tem_far = parseFloat(prompt("Ingrese la tempreatura en Fahrenheit: "));
let temp_celsius = parseFloat((5/9)*(tem_far-32));
console.log("La temperatura en grados Fahrenheit es: "+tem_far);
console.log("la temperatura en grados Celsius es: "+temp_celsius);
```

## Ejercicio 6

```javascript
let num_1 = parseFloat(prompt("Ingrese el primer número: "));
let num_2 = parseFloat(prompt("Ingrese el segundo número: "));
let num_3 = parseFloat(prompt("Ingrese el tercer número: "));
let prom = (num_1+num_2+num_3)/3
console.log("El primer número es: "+ num_1);
console.log("El segundo número es: "+ num_2);
console.log("El tercer número es: "+ num_3);
console.log("El promedio de los números es: "+ prom);
```
