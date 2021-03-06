//3. Clone Merge
//Clone
//Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
    return {...source};
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const aClone = clone(a);
console.log(a)
console.log(aClone)
console.log(a === aClone)



//Merge
//Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, 
//y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge(source, target) {
    return {...target,...source};
}

const b = { name: "Luisa", age: 31, married: true };
console.log(merge(a,b))