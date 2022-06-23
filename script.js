const numbers = Array.from(document.getElementsByClassName("number"));
const submit = document.getElementById("sumbit");
const card = document.querySelector(".card");
const card2 = document.querySelector(".card-2");
const ranking = document.getElementById("ranking");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    console.log(e.target.textContent);
    ranking.textContent = e.target.textContent;
  });
}

submit.addEventListener("click", function () {
  console.log(ranking.value);
  if (ranking.textContent) {
    card.classList.add("hide");
    card2.classList.remove("hide");
  }
});

//  button.addEventListener("click", (e) => {
//     console.log(e);
