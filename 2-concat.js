//2. Concat
//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (a, b) => {
    return [...a,...b];
};

console.log(concat([1,2],[3,4]));