// const criarObjeto = (objeto, key, value) => {
//   const objeto = {
//     key: value,
//   };
// };
// console.log(criarObjeto(player, nick, "Data"));


// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// //Como eu fiz
// const exibir = (student) => {
//   const html = Object.keys(student)[0];
//   const css = Object.keys(student1)[1];
//   const js =  Object.keys(student1)[2];
//   const sf = Object.keys(student1)[3];
//   const git = Object.keys(student1)[4];
//   //valores
//   const htmlValue = Object.values(student)[0];
//   const cssValue = Object.values(student1)[1];
//   const jsValue =  Object.values(student1)[2];
//   const sfValue = Object.values(student1)[3];
//   const gitValue = Object.values(student1)[4];
//   if(Object.keys.length >= 4) {
//     return console.log(`${html}, Nível:${htmlValue}, ${css}, Nível:${cssValue}, ${js}, Nível:${jsValue}, ${sf}, Nível:${sfValue}, ${git}, Nível:${gitValue}`);
//   }
//   if(Object.keys.length <= 3) {
//     return console.log(`${html}, Nível:${htmlValue}, ${css}, Nível:${cssValue}, ${js}, Nível:${jsValue}, ${sf}, Nível:${sfValue}`);
//   }
// }

// //como era para fazer
// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(index in arrayOfSkills){
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// //depois de ver
// const exibir = (student) => {
//   const studentSkills = Object.keys(student);
//   const studentLevel = Object.values(student);

//   for(i in studentSkills){
//     if(Object.keys.length >= 4) {
//       console.log(`${studentSkills}[i], Nível:${htmlValue}[i]`);
//     }
//   }
//   for(i in studentLevel){
//     if(Object.keys.length >= 4) {
//       console.log(`${studentLevel}[i], Nível:${htmlValue}[i]`);
//     }
//   }
// }
