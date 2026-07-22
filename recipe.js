let params = new URLSearchParams(location.search);

let name = params.get("name");

let key = Object.keys(recipes).find(k => k.includes(name));

let info = recipes[key];

if(info){

document.getElementById("recipe-detail").innerHTML = `

<div class="detail-card">

<img src="${info.image}" class="recipe-image">

<h2>${key}</h2>

<p>🔥 ${info.kcal} kcal</p>

<p>⏰ ${info.time} 分</p>

<p>💪 ${info.protein} g</p>

<h3>🥕 材料</h3>

<ul>

${info.ingredients.map(item => `

<li>
${typeof item === "string"
? item
: item.name + " " + formatAmount(item.amount, item.unit)
}
</li>

`).join("")}

</ul>

<h3>👩‍🍳 作り方</h3>

<ol>

${(info.howto || []).map(step => `<li>${step}</li>`).join("")}

</ol>

</div>

`;

}else{

document.getElementById("recipe-detail").innerHTML =
"レシピが見つかりませんでした";

}