var quotes = [
  `<p>“Be yourself; everyone else is already taken.”</p>
        <p class="text-danger">-- Oscar Wilde</p>`,
  `<p>“So many books, so little time.”</p>
        <p class="text-danger">-- Frank Zappa</p>`,
  `<p>“Be the change that you wish to see in the world.”</p>
        <p class="text-danger">-- Mahatma Gandhi</p>`,
  `<p>“A room without books is like a body without a soul.”</p>
        <p class="text-danger">-- Marcus Tullius Cicero</p>`,
  `<p>"The best revenge is massive success."</p>
        <p class="text-danger">-- Frank Sinatra</p>`,
  `<p>"Do not take life too seriously. You will not get out alive."</p>
        <p class="text-danger">-- Elbert Hubbard</p>`,
  `<p>"You miss 100% of the shots you don't take."</p>
        <p class="text-danger">-- Wayne Gretzy</p>`,
  `<p>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”</p>
        <p class="text-danger">-- J.K. Rowling, Harry Potter and the Goblet of Fire</p>`,
  `<p>“Don’ot walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”</p>
        <p class="text-danger">-- Albert Camus</p>`,
  `<p>“If you tell the truth, you don't have to remember anything.”</p>
        <p class="text-danger">-- Mark Twain</p>`,
];

function popularQuotes() {
  var x = Math.floor(Math.random() * 10);

    quotes[x];


  document.getElementById("kay").innerHTML = quotes[x];
  console.log(x);
}

// var hy = [
//   `ahmed`,
//   "ibrahim",
//   "pola",
//   "mina",
//   "byman",
//   "medo",
//   `ali`,
//   "maha",
//   `adel`,
//   "karim",
// ];
// console.log(hy);

// function namemn() {
//         var x = Math.floor(Math.random()*10);
//         hy[x];

// document.getElementById("kay").innerHTML = hy[x];
// }




