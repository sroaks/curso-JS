// error comun es: 

const autenticado = true;

if(autenticado === true){
    console.log('Sí puedes ver netflix')
}else{
    console.log('No no puedes')
}

// es evidente que autenticado es true, está así definido. por tanto, lo correcto es:

if(autenticado){ //se da por implicito
    console.log('Sí puedes ver netflix')
}else{
    console.log('No no puedes')
}

// operador terniario

console.log(autenticado ? 'Si esta autenti...' : 'No lo está');