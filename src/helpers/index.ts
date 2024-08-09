import { Data } from "../types";

export const listaLetras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
export const listaNumeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
export const listaSimbolos = ['!', '#', '$', '%', '&', '(', ')', '*', '+','¡','=','/','?','¿']

export function generarPassword(data: Data): string {
    let arregloLetras = []
    for (let i = 0; i < data.letras; i++) {
        const indiceAleatorio = Math.floor(Math.random() * listaLetras.length);
        arregloLetras.push(listaLetras[indiceAleatorio])
    }
    let arregloNumeros = []
    for (let i = 0; i < data.numeros; i++) {
        const indiceAleatorio = Math.floor(Math.random() * listaNumeros.length);
        arregloNumeros.push(listaNumeros[indiceAleatorio])
    }
    let arregloSimbolos = []
    for (let i = 0; i < data.simbolos; i++) {
        const indiceAleatorio = Math.floor(Math.random() * listaSimbolos.length);
        arregloSimbolos.push(listaSimbolos[indiceAleatorio])
    }
    let password = [...arregloLetras, ...arregloNumeros, ...arregloSimbolos]

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }
    return password.join('');
}