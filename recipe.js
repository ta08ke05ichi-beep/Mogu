let currentPeople = 2;

let params = new URLSearchParams(location.search);

let name = params.get("name");

let key = Object.keys(recipes).find(k => k.includes(name));

let info = recipes[key];

if(info){

    currentPeople = info.servings;

document.getElementById("recipe-detail").innerHTML = `

<div class="recipe-detail">

<div class="image-area">

<img src="${info.image}" class="recipe-image">

<button class="favorite-btn"
data-recipe="${key}"
onclick="addFavorite('${key}')">
❤️
</button>

</div>

<div class="recipe-title">
${key}
</div>

<div class="info-row">

<div class="info-box">
🔥<br>${info.kcal}<br><small>kcal</small>
</div>

<div class="info-box">
⏰<br>${info.time}<br><small>分</small>
</div>

<div class="info-box">
💪<br>${info.protein}<br><small>g</small>
</div>

<div class="info-box">
👥<br>${info.servings}<br><small>人前</small>
</div>

</div>

<div class="ingredients">

<div class="servings-card">

<label>👥 人数</label>

<div class="person-control">

<button onclick="changePeople('${key}', -1)">
−
</button>

<span id="personCount">
${info.servings}
</span>

<span>人前</span>

<button onclick="changePeople('${key}', 1)">
＋
</button>

</div>

</div>

<h3>🥕 材料</h3>

<ul>

${info.ingredients.map(item => `

<li>

${typeof item === "string"
? item
: item.name + " " + formatAmount(item.amount, item.unit)}

</li>

`).join("")}

</ul>

</div>

<div class="steps">

<h3>👩‍🍳 作り方</h3>

<div class="step-list">

${(info.howto || []).map((step,index)=>`

<div class="step-item">

<div class="step-number">

${index+1}

</div>

<div class="step-text">

${step}

</div>

</div>

`).join("")}

</div>

</div>

</div>

`;

}else{

document.getElementById("recipe-detail").innerHTML =
"レシピが見つかりませんでした";

}

function changeServings(name){

    let info = recipes[name];

    let people = Number(
    document.getElementById("personCount").innerHTML
);

    let ratio = people / info.servings;


    let ingredientHTML = info.ingredients.map(item => {

        if(typeof item === "string"){
            return `<li>${item}</li>`;
        }


        return `
        <li>
        ${item.name}
        ${formatAmount(item.amount * ratio, item.unit)}
        </li>
        `;

    }).join("");


    document.querySelector(".ingredients ul").innerHTML =
    ingredientHTML;


    document.querySelector(".info-row").innerHTML = `

    <div class="info-box">
    🔥<br>${Math.round(info.kcal * ratio)}<br>
    <small>kcal</small>
    </div>

    <div class="info-box">
    ⏰<br>${info.time}<br>
    <small>分</small>
    </div>

    <div class="info-box">
    💪<br>${Math.round(info.protein * ratio)}<br>
    <small>g</small>
    </div>

    <div class="info-box">
    👥<br>${people}<br>
    <small>人前</small>
    </div>

    `;

}

currentPeople = info.servings;

function changePeople(name, num){

    currentPeople += num;


    if(currentPeople < 1){
        currentPeople = 1;
    }


    if(currentPeople > 10){
        currentPeople = 10;
    }


    document.getElementById("personCount").innerHTML =
    currentPeople;


    changeServings(name);

}