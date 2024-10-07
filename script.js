const cardContainer = document.querySelector(".card-container");
const btn = document.querySelector("#btn")
const card = document.createElement("div");
card.classList.add("card");

if(card.innerText === ""){
    card.innerText = "Please press the Button below to get a random advice"
    card.style.fontSize = "23px"
    card.style.fontWeight = "800"
    cardContainer.append(card)
}

btn.addEventListener("click", (e)=>{ 
    fetch("https://api.adviceslip.com/advice")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    card.innerHTML = `<p class="adviceID">Advice # ${data.slip.id}</p>
      <p class="advice">${data.slip.advice}</p>
      <img src="images/pattern-divider-desktop.svg" alt="divider">`
      cardContainer.append(card)
  });

})


