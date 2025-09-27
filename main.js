let country = "";
let container = document.querySelector(".container");
let input = document.querySelector(".input");
let button = document.querySelector(".btn");

async function food() {
    let response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    let data = await response.json();
    let foods = data.meals;
        
    container.innerHTML = "";

    if (!foods) {
    container.innerHTML = `<p>No meals found for "${country}".</p>`;
    return;
    }
    
    for (let item of foods) {
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        
        div.className = "card bg-pink-300 shadow-sm ";
        img.className = "image";
        h2.className = "title";
        
        img.src = item.strMealThumb;
        h2.textContent = item.strMeal;
        
        div.appendChild(img);
        div.appendChild(h2);
        container.appendChild(div);
    }
}


button.addEventListener("click", () => {
  country = input.value.trim();
  if (country) {
    food();
  }
});

document.addEventListener("keypress", (e) => {
  country = input.value.trim();
  if (e.key === "Enter" && country) {
    food();
  }
});