// Vamos ORDENAR CRESCENTEMENTE os VALORES de  array  e EXIBIR no CONSOLE os VALORES ORDENADOS e seus respectivos CÓDIGOS UNICODE.
let array = ['b', 'p', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}
// Os códigos foram ORDENADOS de maneira CRESCENTE. Mas os CARACTERES TAMBÉM ficaram em ORDEM ALFABÉTICA, por quê? Se você observar a tabela que mencionei anteriormente, verá que os CÓDIGOS dos CARACTERES que compõem o ALFABETO em MINÚSCULO estão DISPOSTOS de maneira CRESCENTE, começando no  "a" = 97  e terminando no  "z" = 123. Devido a ESTA DISPOSIÇÃO, os CARACTERES ficaram TAMBÉM em ORDEM ALFABÉTICA.

console.log('----------')

// Vamos ALTERAR o "p" MINÚSCULO para "P" MAIÚSCULO e REPETIR o PROCESSO.
array = ['b', 'P', 'c', 'a']
array.sort()
console.log("ORDENADO:", array)
for (let x in array) {
    console.log(`LETRA: ${array[x]} CÓDIGO: ${array[x].charCodeAt(0)}`)
}
// O "P" MAIÚSCULO foi exibido ANTES de TODOS os outros CARACTERES MINÚSCULOS, por quê? Pelo mesmo motivo. O ALFABETO em MAIÚSCULO começa no  "A" = 66  e  termina no  "Z" = 90  . Ou seja, TODOS os CARACTERES MAIÚSCULOS aparecerão ANTES dos MINÚSCULOS.

console.log('----------')

// E com os NÚMEROS é a QUASE a MESMA COISA. Eles são CONVERTIDOS em STRING e considera-se apenas o CÓDIGO do 1° CARACTERE. Os códigos começam no  "0" = 48  e  terminam no  "9" = 57  .
const numeros = [99, 25, 100]
numeros.sort()
console.log("ORDENADO:", numeros)
for (let x in numeros) {
    console.log(`NÚMERO: ${numeros[x]} CÓDIGO: ${String(numeros[x]).charCodeAt(0)}`)
}
// ↑ Faça o teste: ACRESCENTE os valores  9, 2, 1  dentro do array  numeros  e rode. Você verá que os códigos são IGUAIS, porque o  sort()  só considera o 1° caractere.

console.log('----------')

// Como então ORDENAR os números CORRETAMENTE, tanto CRESCENTEMENTE quanto DECRESCENTEMENTE? A sintaxe do método  sort()  permite que se use uma FUNÇÃO de COMPARAÇÃO como PARÂMETRO. Syntax:  array.sort(compareFunction)  . Esta função DEVE RETORNAR um valor POSITIVO, NEGATIVO ou ZERO. Ex:
const numbers = [40, 100, 1, 5, 25, 10]
numbers.sort((a, b) => a - b)
console.log("ORDENADO:", numbers)
/* O que aconteceu:
 a  - b   = returned value
100 - 1   = 99 [40, 1, 100, 5, 25, 10]
100 - 5   = 95 [40, 1, 5, 100, 25, 10]
100 - 25  = 75 [40, 1, 5, 25, 100, 10]
100 - 10  = 90 [40, 1, 5, 25, 10, 100]
40 - 1    = 39 [1, 40, 5, 25, 10, 100]
40 - 5    = 35 [1, 5, 40, 25, 10, 100]
40 - 25   = 15 [1, 5, 25, 40, 10, 100]
40 - 10   = 30 [1, 5, 25, 10, 40, 100]
25 - 10   = 15 [1, 5, 10, 25, 40, 100] ←  numbers  ORDENADOS CRESCENTEMENTE.

Quando o VALOR RETORNADO é NEGATIVO, então ORDENA-SE:  a  ANTES  de  b  
Quando o VALOR RETORNADO é POSITIVO, então ORDENA-SE:  a  DEPOIS de  b

Ou seja, os NÚMEROS RETORNADOS só tem UM PROPÓSITO, saber se é: POSITIVO, NEGATIVO ou ZERO. O valor em si não importa. O nome disso é: Lei da Tricotomia ou Three Way Comparison.

*Eu OMITI TODOS os resultados NEGATIVOS porquê, além do fato de que iria ficar GIGANTESCO, quando isto acontece, NADA ACONTECE. Ilustração:  a(1) - b(5)  RETORNARÁ  -4 (negativo)  . POSICIONAR o  a  ANTES  do  b  não vai mudar nada, porque ele já está antes do  b  .

*Para ORDENAR DECRESCENTEMENTE, basta mudar o código da função de  a - b  para  b - a  . Ilustração:  b(1) - a(5)  RETORNARÁ  -4 (negativo)  . Então o  a  será POSICIONADO ANTES de  b  .*/