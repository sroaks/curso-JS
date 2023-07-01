const aprendiendo = function(tecno,tecno2){
    console.log(`Aprendiendo ${tecno} y ${tecno2}`);
}
aprendiendo("JavaScript")


// Si una sola variable no hace falta parentesis. si son más si.
const aprendiendo2 = (tecno,tecno2) => `Aprendiendo ${tecno} ARROW FUNCTION y ${tecno2}`;
console.log(aprendiendo2("JS","python"));