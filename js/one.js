/**
 * @description      :
 * @author           : belgacem
 * @group            :
 * @created          : 30/11/2023 - 00:22:59
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 30/11/2023
 * - Author          : belgacem
 * - Modification    :
 **/
'use strict';
console.log('hello');
const x = new Object();
Object.defineProperty(x, 'foo', {
  value: 10,
  writable: false,
});
console.log(x.foo);
// x.foo=20;
// !erreur read only
//console.log(x.foo)
//  ----------------------------------------------------------------
v = 106;
console.log(v);
var v; // if use strict mode  define the variable
let l = 66;
console.log(l);
l++;
console.log('l = ', l);
/*
    ? let vs var =>Scope (visibilty  {function{})
    ? Hosting  var hosted clg(v) var v=...
    ?  var : Les déclarations de variables avec var sont soumises au phénomène de hoisting. Cela signifie que la déclaration de la variable est "élevée" (hoisted) en haut de la fonction ou du contexte global, ce qui signifie que vous pouvez utiliser la variable avant même de l'avoir déclarée. Cependant, l'initialisation (assignation de valeur) ne sera pas hoisted.
    ? let : Les variables déclarées avec let sont également hoisted, mais contrairement à var, elles ne sont pas initialisées avant l'étape de l'exécution. Cela signifie que si vous essayez d'accéder à une variable let avant de l'avoir déclarée, vous obtiendrez une erreu


*/
const c=10;
console.log(c)
//! non mutable /
// c+=1;
// console.log(c)
function functionName () {
    console.log("hello I m functionName ")
}
const arrow_fct =() => {
    console.log("hello I m  arrow_fct")
}
functionName();
arrow_fct();
/**** inject  */
const f= new Function ('a ','b ','return a+b')
console.log(f(3,7))
/***basique type js  */
console.log('data type js ')
console.log(typeof(1))
console.log(typeof(''))
console.log(typeof(1.2))
console.log(typeof(null))
console.log(typeof(undefined))
console.log(typeof({}))
/**************equality in js  */
console.log(7=="7"); //!value
console.log(7==="7");//! value and type ;



