let res;
let base = 10; //parâmetro que indica base decimal
let numero = "33"; //variável string
let num_float = "7.89" //variável string
let bool_var = "true"; //variável string

res = parseInt(numero, base) * 2;
console.log("resultado: ", res)
console.log("tipo de varável: ", typeof res);

res = parseFloat(num_float, base) * 2;
console.log("resultado: ", res);
console.log("tipo de varável: ", typeof res);


//transforma em number e depois em boolean
res = parseInt(bool_var) === parseInt (bool_var);
console.log("resultado: ",res);
console.log("tipo de variável: ",typeof res);
