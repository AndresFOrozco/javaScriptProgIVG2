let letra = prompt("Ingrese una letra : ");
const vocales = ["a"||"A", "e"||"E", "i"||"I", "o"||"O", "u"||"U"];

if(letra.length == 1){
    if(vocales.indexOf(letra) ===-1){  
    
    conslole.log("Letra: " + letra);
    conslole.log("No es vocal"); 
}else{
    conslole.log("Letra: " + letra);
    conslole.log("Es vocal"); 
    }

}