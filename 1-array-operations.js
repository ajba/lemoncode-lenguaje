//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (input) => {
    const [first] = input;
    return first;
};

console.log(head([1,2,3,4]))

//Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = (input) => {
    
    const [, ...res] = input;
    return res;
}

console.log(tail([1,2,3,4]))


//Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (input) => {
    return input.slice(0,-1);
};

console.log(init([1,2,3,4]))


//Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (input) => {
    return input[input.length-1];
}; 

console.log(last([1,2,3,4]))
