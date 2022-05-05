
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

/*function obtenerdatos()
	{
		var nombre = document.getElementById('encrip').value;
        alert(nombre);
	}*/
const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".result-encript");

function buttonencriptar{
    const textEncriptado = encriptar(inputText.value);
    mensaje.value = textEncriptado;
}

function encriptar(stringEncriptar){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    for(let i=0; i<matrizCodigo.length;i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar=stringEncriptar.replaceAll(matrizCodigo[i],[0],matrizCodigo[i],[1])
        }
    }
    return stringEncriptar;
}

