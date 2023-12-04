/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 04/12/2023 - 02:51:37
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 04/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
"use strict";
const crypto  = require('crypto');
//!node js is sys  bloc de code SIngle thread  .use the Promise , try cath 

// const fs = require("fs").promises;

// async function readFileAsync() {
//   try {
//     const data = await fs.readFile('../../info3/p2/TP_ReactNative/TP1.pdf');
//     const content = data.toString();
//     console.log(content);
//   } catch (error) {

//     console.error(error);

//   }
// }

// readFileAsync();
console.log(crypto.randomInt(100));
