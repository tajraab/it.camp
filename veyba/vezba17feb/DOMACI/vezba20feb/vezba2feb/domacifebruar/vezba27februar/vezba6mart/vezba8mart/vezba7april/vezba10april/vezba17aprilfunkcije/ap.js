// funkcije;
// on = () const prvaArrowfuncti=> console.log("nesto");
// const istiNiz = [1, 3, 5, 7, 9];
// const sumNumbers = (nekiNiz) => {
//   let start = 0;
//   for (let i = 0; i < nekiNiz.length; i++) {
//     console.log(nekiNiz[i]);
//     start += nekiNiz[i];
//   }

//   return start;
// };
// console.log(sumNumbers(istiNiz));
// istraziti falsy vrednosti;
//FALSY
// let mylastName;
// for (let i = 0; i < 5; i++) {
//   console.log(mylastName, i);
//   if (i === 3) {
//     mylastName = "Tajra";
//   }
//   if (mylastName) {
//     console.log("imam ime", i);
//   } else {
//     console.log("Sacekaj nesto,i");
//   }
//VARIJABLE VAR , LET ,CONST
// let b = 3;
// {
//   var a = 10;
//   let b = 10;
//   const c = 15;

//   {
//     // let b = 10;
//     // const c = 20;
//     console.log(b, "blok koda");
//     console.log(c, "blok koda");
//   }
// }
// console.log(b, "global scope");
// console.log(c, "global scope");
// FUNKCIJE
// function anotherFunction(a, b) {
//   return a + b;
// }
// function nekafunkcija(numbers) {
//   let a = 10;
//   let b = 5;
//   return numbers(a, b);
// }
// console.log(nekafunkcija(anotherFunction));
// zadaaataaakkk
// let someArray = [3, 5, 123, 54, 213, 54, 23, 123];
// let helperFunction = (a) => a + 10;
// function customFunction(niz, callbackfunkciju) {
//   let pomocniniz = [];
//   for (let i = 0; i < niz.length; i++) {
//     // console.log(niz[i]);
//     pomocniniz.push(callbackfunkciju(niz[i]));
//   }
//   return pomocniniz;
// }
// console.log(someArray);
// console.log(customFunction(someArray, helperFunction));
// let someArray = [2, 5, 8, 15, 20, 14, 15];
// let helperFunction = (a) => a + 10;
// function first(niz, callbackfunkciju) {
//   let pomocniniz = [];
//   for (let i = 0; i < niz.length; i++) {
//     // console.log(niz[i]);
//     pomocniniz.push(callbackfunkciju(niz[i]));
//   }
//   return pomocniniz;
// }
// console.log(someArray);
// console.log(first(someArray, helperFunction));

// MAPP

// const nekiNiz = [5, 6, 2, 17, 11, 115, 69];
// const prvaMap = nekiNiz.map((el) => el + 10);
// console.log(nekiNiz);
// console.log(prvaMap);

// const someAges = [2, 8, 7, 5, 1, 15, 10, 9, 13];
// const prvaMap = someAges.map((el) => el * 7);
// console.log(someAges);
// console.log(prvaMap);

// const someKms = [20, 12, 22, 25, 33, 33, 99, 50, 70];
// const prvaMap = someKms.map((el) => el * 1.6);
// console.log(someKms);
// console.log(prvaMap);

// const nekeBrojeve = [36, 17, 22, 6, 1, 10, 19, 33, 52];
// const prvaMap = nekeBrojeve.map((el) => {
//   if (el % 2 === 0) {
//     return el * 2;
//   } else {
//     return el * 3;
//   }
// });
// console.log(nekeBrojeve);
// console.log(prvaMap);

// const matrica = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let mapMatrice = matrica.map((manjiNiz) =>
//   manjiNiz.map((el) => {
//     if (el % 2 === 0) {
//       return el * 2;
//     } else {
//       return el * 3;
//     }
//   })
// );
// console.log(mapMatrice);

// const matrica = [
//   [2, 8, 10],
//   [4, 5, 6],
//   [10, 4, 7],
// ];
// let mapMatrice = matrica.map((manjiNiz) =>
//   manjiNiz.map((el) => {
//     if (el % 3 === 0) {
//       return el * 3;
//     } else {
//       return el * 2;
//     }
//   })
// );
// console.log(mapMatrice);
////////////////////////////////////

// FILTER
// const brojevi = [6, 5, 27, 28, 29, 31, 33, 15];
// const parniBrojevi = brojevi.filter((el) => el % 2 === 0);
// console.log(brojevi);
// console.log(parniBrojevi);
// //////////////////////////
// const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 89, 88];

// const ourCustomFilter = (niz, callbackFn) => {
//   const noviFilterNiz = [];
//   for (let i = 0; i < niz.length; i++) {
//     if (callbackFn(niz[i]) === true) {
//       noviFilterNiz.push(niz[i]);
//     }
//   }
//   return noviFilterNiz;
// };
// function customCallback(el) {
//   return el > 10;
// }
// console.log(ourCustomFilter(brojevi, customCallback));
/////////////////////////////////////////////////
// const nekiBrojevi = [7, 12, 1, 8, 19, 20, 15, 22, 25, 30, 2, 10, 63];
// const noviFilterNiz = [];
// const nekiNiz = nekiBrojevi.map((el) => el * 3);
// const parniBrojevi = nekiNiz.filter((el) => el % 2 == 0);
// console.log(nekiNiz);
// console.log(nekiBrojevi);
// console.log(parniBrojevi);
////////////////////////////////////////////
//////REDUCE////////
// const nizZaReduce = [2, 8, 14, 17, 10, 50, 60, 30, 43, 3, 9, 68];
// const zbirElemenata = nizZaReduce.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(zbirElemenata);
/////////////////////////////////////

// const nizZaReduce = [6, 8, 12, 10, 14, 4, 9, 54, 11];
// const prosecnavrednost = nizZaReduce.reduce(
//   (previousValue, currentValue) => previousValue + currentValue
// );
// console.log(prosecnavrednost / nizZaReduce.length);
// console.log(averageNum);
// // console.log(prosecnavrednost);

///////////////OBJEKTI/////////
// const ourFirstObject = {
//   car: "Alfa Romeo",
//   vozac: "Dzenis Bronja",
//   suvozac: "Redzi(pod kaznom)",
//   godina: 23,
//   prijatelji: ["Mitar iz Dubica", "petrojka", "bilo sta"],
//   skills: {
//     html: "good",
//     css: "average",
//     lying: "bad",
//     josJedanObjekat: {
//       ja: "Tajra",
//     },
//   },
// };
// console.log(ourFirstObject.skills.josJedanObjekat.ja);
// console.log(ourFirstObject);
// console.log(ourFirstObject.vozac);
// console.log(ourFirstObject["suvozac"]);

// const ourFirstObject = {
//   car: "BMW",
//   vozac: "Tajra Bacevac",
//   suvozac: "Iman Licina",
//   godina: 17,
//   prijatelji: ["Anastasija", "Emina", "Sara"],
//   skills: {
//     html: "good",
//     css: "average",
//     lying: "bad",
//     josjedan: {
//       ja: "tajra",
//     },
//   },
// };
// console.log(ourFirstObject);
// console.log(ourFirstObject.vozac);
// console.log(ourFirstObject.skills.josjedan);

////////////////////////////////////////////////

// const nekiBrojevi = [12, 32, 45, 6, 9, 12];
// for (let i = 0; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else console.log(i);
// }

// const nekiNiz = [10, 12, 6, 8, 20, 22, 7, 13];

// nekiNiz.push(2, 4, 5);
// nekiNiz.unshift(3, 7, 8);
// console.log(nekiNiz);

// const mnozenje = nekiNiz.map((el) => el * 7).filter((el) => el % 3 === 0);

// console.log(mnozenje);
////////////////////////////////////
// const classroom = {
//   brojCasova: 5,
// //   ucenik: "Tajra",
// //   profesor: "aldin",
// //   ucenici: [
// //     {
//       name: "iman",
//       proffesion: "player",
//     },
//     { name: "licina", proffesion: "teacher" },
//   ],
//   sayHello() {
//     console.log("hello" + classroom.ucenici[0].name);
//   },
// };
// classroom.sayHello();
// const imanNiz = classroom.map((el) => {
//   return {
//     name: el.name,
//   };
// });
// console.log(imanNiz);

/////////////////////////////
// const ourClassroom = [
//   { name: "Tajra", id: 1, age: 17 },
//   { name: "Iman", id: 2, age: 17 },
//   { name: "Dzenis", id: 3, age: 23 },
//   { name: "Tarik", id: 4, age: 25 },
//   { name: "Imad", id: 5, age: 17 },
//   { name: "Haris", id: 6, age: 18 },
//   { name: "Mehmed", id: 7, age: 16 },
//   { name: "Redzep", id: 8, age: 18 },
// ];
// const filteredClassroom = ourClassroom.filter((el) => el.id % 2 == 0);
// console.log(ourClassroom);
// console.log(filteredClassroom);

// const onlyIds = ourClassroom.map((el) => {
//   return {
//     id: el.id,
//   };
// });
// const numberIds = ourClassroom.map((el) => el.id);
// console.log(numberIds);

//////////////////////////

// const prvoime = "aldin";
// const drugoime = "redzi";
// console.log(prvoime + " i " + drugoime);

// ///////////////////
// ariable;
// const watchList = [
//   {
//     Title: "Inception",
//     Year: "2010",
//     Rated: "PG-13",
//     Released: "16 Jul 2010",
//     Runtime: "148 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer: "Christopher Nolan",
//     Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     Language: "English, Japanese, French",
//     Country: "USA, UK",
//     Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.8",
//     imdbVotes: "1,446,708",
//     imdbID: "tt1375666",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Interstellar",
//     Year: "2014",
//     Rated: "PG-13",
//     Released: "07 Nov 2014",
//     Runtime: "169 min",
//     Genre: "Adventure, Drama, Sci-Fi",
//     Director: "Christopher Nolan",
//     Writer: "Jonathan Nolan, Christopher Nolan",
//     Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     Language: "English",
//     Country: "USA, UK",
//     Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "8.6",
//     imdbVotes: "910,366",
//     imdbID: "tt0816692",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "The Dark Knight",
//     Year: "2008",
//     Rated: "PG-13",
//     Released: "18 Jul 2008",
//     Runtime: "152 min",
//     Genre: "Action, Adventure, Crime",
//     Director: "Christopher Nolan",
//     Writer:
//       "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     Language: "English, Mandarin",
//     Country: "USA, UK",
//     Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     Metascore: "82",
//     imdbRating: "9.0",
//     imdbVotes: "1,652,832",
//     imdbID: "tt0468569",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Batman Begins",
//     Year: "2005",
//     Rated: "PG-13",
//     Released: "15 Jun 2005",
//     Runtime: "140 min",
//     Genre: "Action, Adventure",
//     Director: "Christopher Nolan",
//     Writer:
//       "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     Language: "English, Urdu, Mandarin",
//     Country: "USA, UK",
//     Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     Metascore: "70",
//     imdbRating: "8.3",
//     imdbVotes: "972,584",
//     imdbID: "tt0372784",
//     Type: "movie",
//     Response: "True",
//   },
//   {
//     Title: "Avatar",
//     Year: "2009",
//     Rated: "PG-13",
//     Released: "18 Dec 2009",
//     Runtime: "162 min",
//     Genre: "Action, Adventure, Fantasy",
//     Director: "James Cameron",
//     Writer: "James Cameron",
//     Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     Language: "English, Spanish",
//     Country: "USA, UK",
//     Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     Poster:
//       "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     Metascore: "83",
//     imdbRating: "7.9",
//     imdbVotes: "876,575",
//     imdbID: "tt0499549",
//     Type: "movie",
//     Response: "True",
//   },
// ];

// // Only change code below this line

// const filteredList = "";

// // Only change code above this line

// console.log(filteredList);
// const mapArray = watchList.map((el) => {
//   return {
//     //title: el.Title,
//     raiting: el.imdbRating,
//   };
// });
// console.log(mapArray);
// const filteredArray = mapArray.filter((el) => el.raiting >= 0);
// console.log(filteredArray);
///////////////////////////////////

// const ourClassroom = [
//   { name: "Tajra", age: 17, proffesion: "student" },
//   { name: "Sajma", age: 24, proffesion: "pharmaceut" },
//   { name: "Nerma", age: 26, proffesion: "chemical" },
//   { name: "Íman", age: 17, proffesion: "manager" },
//   { name: "Anastasija", age: 17, proffesion: " teacher" },
// ];
// const filteredClassroom = ourClassroom.filter((el) => el.age % 2 == 0);
// console.log(ourClassroom);
// console.log(filteredClassroom);

// const onlyNames = ourClassroom.map((el) => {
//   return {
//     name: el.name,
//   };
// });
// console.log(onlyNames);
// const onlyAges = ourClassroom.map((el) => el.age);
// console.log(onlyAges);

/////////////////////////////////

// const nasCustomObjekat = {
//   odeljenje: "3-10",
//   dukserica: "zelena",
//   ja: "ne znam",
//   godine: 30,
//   brojLaptopova: 9,
// };
// function ourFirstCallFunction(argumentFirst, argumentSecond) {
//   // console.log(this.godine, "ovo je call funkcija");
//   console.log(
//     `${argumentFirst} ima ${this.godine} godina i ${argumentSecond} mu je ${this.dukserica}`
//   );
// }
// ourFirstCallFunction.call(nasCustomObjekat, "Aldin", "kapa");
// ourFirstCallFunction.apply(nasCustomObjekat, ["Aldin", "kapa"]);

// ///bind-vraca drugu funkciju

// const bindFunkcija = ourFirstCallFunction.bind(nasCustomObjekat);

// ////////////////////

// const nasCustomObjekat = {
//   grupa: "prva",
//   odeljenje: "2-10",
//   godine: 20,
//   brojOdeljenja: 10,
// };
// function ourFirstCallFunction(argumentFirst) {
//   console.log(`${argumentFirst} ${this.brojOdeljenja}${this.grupa}`);
// }
// ourFirstCallFunction.call(nasCustomObjekat, "Iman je moja drugarica");

//////////////////////////////////////
// const allUsers = [
//   {
//     id: 1,
//     godine: 25,
//     ime: "prvo ime",
//     profesija: "html",
//     vozila: ["golf", "audi"],
//   },
//   {
//     id: 2,
//     godine: 22,
//     ime: "drugo ime",
//     profesija: "javascript",
//     vozila: ["bmw", "toyota"],
//   },
//   {
//     id: 3,
//     godine: 32,
//     ime: "trece ime",
//     profesija: "javascriptihtml",
//     vozila: ["punto", "volswagen"],
//   },
//   {
//     id: 4,
//     godine: 42,
//     ime: "cetvrto ime",
//     profesija: "reject",
//     vozila: ["golf7", "audia6"],
//   },
// ];
// function checkinUserAge() {
//   if (this.godine >= 18) {
//     console.log("svaka cast");
//   } else {
//     console.log(`dodji za ${18 - this.godine}godina`);
//   }
// }
// allUsers.map((user) => checkinUserAge.call(user));

// ////////////////////////////////////////////////////////////////////

// //apply vraca samo ono sto je u nizu
// //call funkcija vraca sve osim niza
// //freeze -zaledi objekat
// //seal-ne moze dodavati ili brisati,ali moze menjati
//closures

// const obnovaObjekata = {
//   name: "Aldin",
//   course: "js",
// };
// const noviObjekat = {
//   name: "Medina",
//   course: "Medicinska",
// };
// obnovaObjekata.name;
// obnovaObjekata["course"];
// obnovaObjekata.prezime = "halilovic";
// function callFunkcija(argumentNeki) {
//   console.log(this.name, argumentNeki, "ovo je call funkcija");
// }
// callFunkcija.call(obnovaObjekata, ["isto neki argument"]);
// callFunkcija.call(noviObjekat, "drugi argument");

// callFunkcija.apply(obnovaObjekata[("tajraaaa", "halimaaa")]);

// const bindFunkcijaObnavljanje = callFunkcija.bind(obnovaObjekata, "nesto");
// bindFunkcijaObnavljanje();

// const objectPractice = {
//   voda: "Maxi",
//   laptop: "Acer",
//   telefon: "iphone",
// };
// const kljucevi = Object.keys(objectPractice);
// console.log(kljucevi);

// const vrednosti = Object.values(objectPractice);
// console.log(vrednosti);

// Object.freeze(objectPractice);
// Object.seal(objectPractice);
// console.log(objectPractice);

// const functionObject = {
//   voda: "Maxi",
//   laptop: "Acer",
//   telefon: "iphone",
//   sayHello() {
//     console.log("Hello world");
//   },
// };
// functionObject.sayHello();

// //////////////CLOSURE//////////////

// let a = 10;
// function firstA() {
//   let b = 5;
//   console.log(b);
// }
// function secondA() {
//   let b = 3;
//   console.log(b);
// }
// function lastA() {
//   console.log(a);
// }
// ;
// firstA();
// secondA();
// lastA();

////////////////////////////////////////////////////////////////////////////////////////
// function createUser(userName, userLastName) {
//   return {
//     name: userName,
//     lastName: userLastName,
//   };
// }
// const userAldin = createUser("aldin", "halilovic");
// //console.log(userAldin);

////////////////////CLASSES///////////////
// class User {
//   ime;
//   prezime;
//   posao;
//   prebivaliste = "Novi Pazar";
//   kredit;
//   constructor(name, lastname, job, credit) {
//     this.ime = name;
//     this.prezime = lastname;
//     this.posao = job;
//     this.kredit = credit;
//   }
// }
// const jaTajra = new User("tajra", "bacevac", "student");
// console.log(jaTajra);

// //////////////////////////////////////////

// class Phone {
//   marka;
//   model;
//   brojgb;
//   constructor(name, model, telefon) {
//     this.marka = name;
//     this.model = model;
//     this.brojgb = telefon;
//   }
// }
// const phone = new Phone("iphone", "11", "64gb");
// console.log(phone);

/////vezbanje(classes)////

// class Odeljenje {
//   razredni;
//   ucenici;
//   brojodeljenja;
//   constructor(name, numbers, number) {
//     this.razredni=name;
//     this.ucenici=numbers;
//     this.brojodeljenja=number;
//   }
// }
// const odeljenje = new Odeljenje("Sasa Petrovic", "400", "12");
// console.log(odeljenje);

///////////////////////////////////////////////////////////////////////////////////////////////////////

// class Bus {
//   seats;
//   color;
//   constructor(sedista, boja) {
//     this.seats = sedista;
//     this.color = boja;
//   }
//   helloBus() {
//     console.log("caooo");
//   }
//   changeColor(newColor) {
//     this.color = newColor;
//   }
//   getColor() {
//     return this.color;
//   }
// }
// const lasta = new Bus(55, "zelena");
// console.log(lasta);
// lasta.helloBus();
// lasta.changeColor("zuta");
// console.log(lasta);
// const bojaAutobusa = lasta.getColor();
// console.log(bojaAutobusa);

// //////////nasledjivanje///////
// class Pet {
//   legNum;
//   tail;

//   constructor(noge, rep) {
//     this.legNum = noge;
//     this.tail = rep;
//   }
// }
// class Cat extends Pet {
//   name;
//   color;

//   constructor(noge, rep, ime, boja) {
//     super(noge, rep);
//     this.name = ime;
//     this.color = boja;
//   }
// }
// const ourCat = new Cat(4, "yes", "Sladjan", "Bela");
// console.log(ourCat);

// class Likovi {
//   //ability;
//   age;

//   constructor(zanimanje, godine) {
//     // this.ability = zanimanje;
//     this.age = godine;
//   }
// }
// class Player1 extends Likovi {
//   name;
//   ability;

//   constructor(zanimanje, godine, ime) {
//     super(zanimanje, godine);
//     this.name = ime;
//     this.ability = zanimanje;
//   }
// }
// class Player2 extends Likovi {
//   name;
//   ability;
//   constructor(zanimanje, godine, ime) {
//     super(zanimanje, godine);
//     this.name = ime;
//     this.ability = zanimanje;
//   }
// }
// class Player3 extends Likovi {
//   name;
//   ability;
//   constructor(zanimanje, godine, ime) {
//     super(zanimanje, godine);
//     this.name = ime;
//     this.ability = zanimanje;
//   }
// }
// const ourPlayer1 = new Player1("Penzionisani pljackas banke", 45, "Michael");
// console.log(ourPlayer1);
// const ourPlayer2 = new Player2("Agent za oduzimanje imovine", 25, "Franklin");
// console.log(ourPlayer2);
// const ourPlayer3 = new Player2("Diler droge", 40, "Trevor");
// console.log(ourPlayer3);

//////////////////////////ENKAPSULATION//////////////////////////////////////

// class Shop {
//   #ime;
//   lokacija;
//   logo;
//   static brojKasa = 10;

//   constructor(name, location, logo) {
//     this.#ime = name;
//     this.lokacija = location;
//     this.logo = logo;
//   }
//   get ourName() {
//     return this.#ime;
//   }
//   setOurName(nekoIme) {
//     this.#ime = nekoIme;
//   }
// }
// const brojKasauMaxiju = Shop.brojKasa;
// const maxi = new Shop("maxi", "1.maj", "maXi");
// console.log(maxi);

// ///////////////

// class Mi {
//   ime;
//   prezime;
//   #godine;

//   constructor(name, lastName, age) {
//     this.ime = name;
//     this.prezime = lastName;
//     this.#godine = age;
//   }
//   get ourAge() {
//     return this.#godine;
//   }
//   setOurAge(nekeGodine) {
//     this.#godine = nekeGodine;
//   }
// }
// const ja = new Mi("Tajra", "Bacevac", 17);
// console.log(ja);
// ja.setOurAge(23);

//////////////////////////////ABSTRACTION////////////////////////////////////////////////////

// class User {
//   name;
//   height;
//   width;
//   age;

//   constructor(ime, visina, sirina, godine) {
//     this.name = ime;
//     this.height = visina;
//     this.width = sirina;
//     this.age = godine;
//   }

//   checkUserAge() {
//     if (this.age < 16) {
//       console.log("You can pass!");
//     } else {
//       console.log("Sorry you are too old");
//     }
//   }
//   checkUserHeight() {
//     if (this.height < 160) {
//       console.log("You can pass!");
//     } else {
//       console.log("Sorry,you can not pass");
//     }
//   }
// }
// const aldin = new User("Aldin", 170, 100, 20);
// const redzi = new User("Redzi", 182, 2, 18);
// aldin.checkUserAge();
// aldin.checkUserHeight();

// //////polimorfizam/////

///////////////OBNAVLJANJE//////////////////////////////////////
/////////petlje////

///////Poredjati brojeve od pozadi/////

// const randomNumbers = [2, 5, 30, 32, 45, 50];
// let reversedArray = [];
// for (let i = randomNumbers.length - 1; i >= 0; i--) {
//   console.log(randomNumbers[i]);
// }
// console.log(randomNumbers);
// console.log(reversedArray);
// // for (let i = 0; i < 100; i += 2) {
// //   console.log(i);
// // }

// ///Izvuci najveci broj niza////

// const randomBrojevi = [528, 23, 229, 99, 22, 100];
// let maxNum = 0;
// for (let i = 0; i < randomBrojevi.length; i++) {
//   if (randomBrojevi[i] > maxNum) {
//     maxNum = randomBrojevi[i];
//   }
// }
// console.log(maxNum);

const products = [
  {
    id: 1,
    name: "T-shirt",
    qty: 1,
    price_per_unit: 100,
  },
  {
    id: 2,
    name: "Sneakers",
    qty: 2,
    price_per_unit: 300,
  },
  {
    id: 3,
    name: "Necklace",
    qty: 5,
    price_per_unit: 125,
  },
];
const calcTotal = (arr) => {
  const productsWithTotal = arr.map((el) => {
    return {
      id: el.id,
      name: el.name,
      qty: el.qty,
      price_per_unit: el.price_per_unit,
      total: el.qty * el.price_per_unit,
    };
  });
  const total = productsWithTotal.reduce((prevValue, currValue) => {
    return prevValue + currValue.total;
  }, 0);
  console.log(productsWithTotal);
  console.log(total);
};
console.log(calcTotal(products));
