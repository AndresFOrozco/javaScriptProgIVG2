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

## Ejercicio 7

```javascript
let numero = parseFloat(prompt("Ingrese el un número: "));
console.log("El número ingresado es: "+ numero);
let por100 = (numero-(numero*0.15))
console.log("descontando el 15% queda : "+ por100);
```
## Ejercicio 8

```javascript
let palabra_1 = (prompt("Ingrese la primera palabra: "));
let palabra_2 = (prompt("Ingrese la segunda palabra: "));
console.log("La primera palabra es: "+ palabra_1);
console.log("la segunda palabra es: "+ palabra_2);
let union = palabra_1+ " " + palabra_2
console.log(union);
```

## Ejercicio 9

```javascript
let texto = (prompt("Ingrese un texto: "));
console.log("El texto es: "+ texto);
console.log("La primera letra del texto es :" + texto.charAt(0));
let indice = (prompt("Ingrese un numero positivo nenor a " + texto.length));
console.log("El numero menor que " + texto.length + " es: " +indice)
console.log("El caracter en la posición " + indice +" es: " + texto.charAt(indice));
```

## Ejercicio 10

```javascript
let show = (prompt("Cuantos Shows musicales a visto en el último año?: "));
console.log(" Shows vistos en el ultimo año: " +show);

if (show <=3){
  console.log(false);   
}else{
  console.log(true); 
}
```

## Ejercicio 11

```javascript
let fecha = (prompt("Ingrese un numeroformato fecha DDMMAAA: "));
console.log(" Fecha en formato DDMMAAAA: " +fecha);

console.log(fecha.charAt(0)+fecha.charAt(1)+"/"+fecha.charAt(2)+fecha.charAt(3)+"/"+fecha.charAt(4)+fecha.charAt(5)+fecha.charAt(6)+fecha.charAt(7));
```

## Ejercicio 12

```javascript
let num = (prompt("Ingrese un número entero: "));
console.log(" El número entero es: " + num);

if (num%2==0){
  console.log(true); 
}else{
  console.log(false);
}
```
## Ejercicio 13

```javascript
let edad = (prompt("Ingresa tu edad: "));
console.log(" Tu edad: " + edad);
let articulo = (prompt("Ingrese la cantidad de artículos comprados: "));
console.log("Artículos comprados: "+ articulo);

if (edad>=18 && articulo >=2){
  console.log(true);   
}else{
  console.log(false); 
}
```

## Ejercicio 14

```javascript
let texto = (prompt("Ingrese una Frase: "));
console.log("La Frase es: "+ texto);

if (texto.length%2 ==0){
  console.log(true);  
}else{
  console.log(false);  
} 
```



