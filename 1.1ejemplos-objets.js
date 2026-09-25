// let nameu = "John";
// let age = 25;
// let isEnrolled = true;
// let subjects = ["Programacion","Base de datos","IA"];
// //ACCEDER LA INFORMACION
// console.log(typeof(nameu)); 
// console.log(typeof(age)); 
// console.log(typeof(isEnrolled));
// console.log(typeof(subjects)); 

// console.log(Array.isArray(subjects));

// console.log(subjects.map(function (s){return typeof(s); }));

// subjects.forEach(function (element){
//     console.log(element);
//})


let estudiante = {
    "name":"Jhon M",
    "age": 25,
    "esActivo": true,
    "materias": ["Programacion", "BD", "IA"]
}


console.log(typeof(estudiante));
//accedemos a los datos especificos del objeto
console.log("El nombre del estudiante es:", estudiante.name);
console.log("Su edad es:", estudiante.age);
console.log("Esta inscrito:", estudiante.isEnrolled);
console.log("La primera materia es:", estudiante.materias[0]);
console.log("La cantidad de materias es:", estudiante.length);

//mostramos el objeto completo 
console.log("El estudiante completo es:", estudiante);
console.table(estudiante);// mostramos tabla

