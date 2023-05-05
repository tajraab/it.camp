let someArray = [3, 10, 6, 18, 23, 40, 31];
// let anotherArray = [23, 214, 2345, 3543, 65456, 7890];
// let anotherOne = [23, 24, 56, 987, 31, 566, 945];
// function getMaxNumber(niz) {
//   const duzinaNiza = niz.length;
//   let number = 0;
//   for (let i = 0; i < duzinaNiza; i++) {
//     if (number < niz[i]) {
//       number = niz[i];
//     }
//   }
//   return number;
// }
// console.log(getMaxNumber(anotherOne));
//////////NIZ NIZOVA////////MATRICA
let matrica = [[1, 2, 3], [(4, 5, 6)], [(7, 8, 9)]];
// for(let i=0;i<matrica.length;i++){
//     console.log(matrica[i]);

// }
// console.log(matrica[o][1]);
// console.log(matrica[2][2]);
for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    console.log(matrica[i][j]);
  }
}
