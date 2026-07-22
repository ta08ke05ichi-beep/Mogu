function formatAmount(num, unit){

if(unit === "少々" || unit === "適量"){
return unit;
}

if(num === 0.5){
return "1/2" + unit;
}

if(num === 0.25){
return "1/4" + unit;
}

if(num === 0.75){
return "3/4" + unit;
}

if(Number.isInteger(num)){
return num + unit;
}

return num + unit;

}


let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

let dietMode = "normal";

const recipes = {


"🍛カレー":{
kcal:700,
time:30,
protein:25,
servings:2,
image:"images/curry.jpg",
category:"主食",

ingredients:[
{name:"ご飯", amount:400, unit:"g"},
{name:"豚こま切れ肉", amount:250, unit:"g", note:"（一口大に切る）"},
{name:"玉ねぎ", amount:2, unit:"個", note:"（薄切り）"},
{name:"にんじん", amount:1, unit:"本", note:"（乱切り）"},
{name:"じゃがいも", amount:2, unit:"個", note:"（一口大の乱切り）"},
{name:"カレールー", amount:0.5, unit:"箱"},
{name:"水", amount:700, unit:"ml"},
{name:"サラダ油", amount:1, unit:"大さじ"}
],

howto:[
"玉ねぎは薄切り、にんじんとじゃがいもは一口大の乱切りにする",
"鍋に油を入れ、豚肉を炒めて色が変わるまで火を通す",
"玉ねぎ、にんじん、じゃがいもを加えて炒める",
"水を加えて沸騰させ、アクを取りながら20分ほど煮込む",
"具材が柔らかくなったら火を止め、カレールーを溶かす",
"弱火で10分ほど煮込み、とろみが出たら完成",
"ご飯にカレーをかけて盛り付ける"
],

},

"🥔肉じゃが":{
kcal:450,
time:35,
protein:20,
servings:2,
image:"images/nikujaga.jpg",
category:"主菜",

ingredients:[

{
name:"牛こま切れ肉",
amount:200,
unit:"g"
},

{
name:"じゃがいも",
amount:3,
unit:"個",
note:"（皮をむいて一口大の乱切り）"
},

{
name:"玉ねぎ",
amount:1,
unit:"個",
note:"（くし切り）"
},

{
name:"にんじん",
amount:1,
unit:"本",
note:"（乱切り）"
},

{
name:"しらたき",
amount:1,
unit:"袋",
note:"（食べやすい長さに切る）"
},

{
name:"だし汁",
amount:300,
unit:"ml"
},

{
name:"醤油",
amount:3,
unit:"大さじ"
},

{
name:"砂糖",
amount:2,
unit:"大さじ"
},

{
name:"みりん",
amount:2,
unit:"大さじ"
},

{
name:"酒",
amount:2,
unit:"大さじ"
}

],

howto:[
"じゃがいもは一口大の乱切り、玉ねぎはくし切り、にんじんは乱切りにする",
"しらたきは下茹でして食べやすい長さに切る",
"鍋に油を入れ、牛肉を炒める",
"玉ねぎ、にんじん、じゃがいもを加えて軽く炒める",
"だし汁、酒、砂糖、みりんを入れて10分ほど煮込む",
"醤油を加えて、じゃがいもが柔らかくなるまで煮る",
"味が染み込んだら完成"
]
},


"🍳オムライス":{
kcal:650,
time:30,
protein:25,
servings:2,
image:"images/omurice.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"卵",amount:4,unit:"個"},
{name:"鶏もも肉",amount:200,unit:"g",note:"（1cm角に切る）"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（みじん切り）"},
{name:"ケチャップ",amount:6,unit:"大さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"鶏もも肉は1cm角、玉ねぎはみじん切りにする",
"フライパンにバターを入れ、鶏肉と玉ねぎを炒める",
"鶏肉に火が通ったらご飯を加える",
"ケチャップ、塩こしょうで味付けしてチキンライスを作る",
"卵を1人分ずつ溶いて薄焼き卵を作る",
"チキンライスを卵で包み、ケチャップをかけて完成"
]

},

"🍗チキン南蛮":{
kcal:720,
time:25,
protein:35,
servings:2,
image:"images/chickennanban.jpg",
category:"主菜",

ingredients:[
{name:"鶏もも肉",amount:400,unit:"g"},
{name:"卵",amount:1,unit:"個"},
{name:"小麦粉",amount:3,unit:"大さじ"},
{name:"片栗粉",amount:2,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"サラダ油（揚げ用）",amount:1,unit:"適量"},

{name:"【甘酢だれ】",amount:0,unit:""},
{name:"醤油",amount:3,unit:"大さじ"},
{name:"酢",amount:3,unit:"大さじ"},
{name:"砂糖",amount:3,unit:"大さじ"},

{name:"【タルタルソース】",amount:0,unit:""},
{name:"卵（ゆで卵用）",amount:2,unit:"個"},
{name:"玉ねぎ",amount:1,unit:"/4個"},
{name:"マヨネーズ",amount:4,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"鶏もも肉を食べやすい大きさに切り、塩こしょうで下味をつける",
"鶏肉に小麦粉をまぶし、溶き卵をつけて片栗粉をまぶす",
"170℃の油で鶏肉を揚げ、中まで火を通す",
"醤油、酢、砂糖を混ぜて甘酢だれを作る",
"揚げた鶏肉を甘酢だれにくぐらせる",
"ゆで卵と玉ねぎを細かく切り、マヨネーズで和えてタルタルソースを作る",
"鶏肉にタルタルソースをかけて完成"
]

},

"🥗サラダチキン":{
kcal:180,
time:10,
protein:30,
servings:2,
image:"images/saladchicken.jpg",
category:"副菜",

ingredients:[
{name:"鶏むね肉",amount:1,unit:"枚（約300g）"},
{name:"砂糖",amount:1,unit:"小さじ"},
{name:"塩",amount:0.5,unit:"小さじ"},
{name:"酒",amount:1,unit:"大さじ"},
{name:"オリーブオイル",amount:1,unit:"大さじ"},
{name:"こしょう",amount:1,unit:"少々"},
{name:"にんにく",amount:1,unit:"少々（お好み）"}
],

howto:[
"鶏むね肉の皮を取り、厚い部分を開いて厚さを均一にする",
"フォークで数か所穴を開け、味が染み込みやすくする",
"砂糖、塩、酒、オリーブオイル、こしょうを鶏肉にもみ込む",
"冷蔵庫で30分〜半日ほど置いて下味をつける",
"耐熱袋に入れて空気を抜き、沸騰したお湯に入れる",
"火を止めて蓋をし、30分ほど余熱で火を通す",
"粗熱が取れたら食べやすい厚さに切って完成"
],

},

"🍲鶏むねスープ":{
kcal:220,
time:15,
protein:28,
servings:2,
image:"images/torimunesoup.jpg",
category:"スープ",

ingredients:[
{name:"鶏むね肉",amount:200,unit:"g",note:"（一口大に切る）"},
{name:"キャベツ",amount:150,unit:"g",note:"（ざく切り）"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（薄切り）"},
{name:"にんじん",amount:0.5,unit:"本",note:"（いちょう切り）"},
{name:"しめじ",amount:0.5,unit:"パック",note:"（ほぐす）"},
{name:"水",amount:600,unit:"ml"},
{name:"鶏ガラスープの素",amount:1,unit:"大さじ"},
{name:"醤油",amount:2,unit:"小さじ"},
{name:"塩",amount:1,unit:"少々"},
{name:"こしょう",amount:1,unit:"少々"}
],

howto:[
"鶏むね肉は一口大に切り、塩こしょうで下味をつける",
"キャベツはざく切り、玉ねぎは薄切り、にんじんはいちょう切りにする",
"鍋に水と鶏ガラスープの素を入れて沸かす",
"鶏むね肉を加えてアクを取りながら煮る",
"野菜ときのこを加えて弱火で10〜15分煮込む",
"醤油と塩こしょうで味を整える",
"具材が柔らかくなったら完成"
],

},

"🍗ヤンニョムチキン":{
kcal:650,
time:25,
protein:35,
servings:2,
image:"images/yangnyeom.jpg",
category:"主菜",

ingredients:[
{name:"鶏もも肉",amount:300,unit:"g",note:"（一口大）"},
{name:"片栗粉",amount:4,unit:"大さじ"},
{name:"サラダ油",amount:1,unit:"適量"},

{name:"ケチャップ",amount:2,unit:"大さじ"},
{name:"コチュジャン",amount:1,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"みりん",amount:1,unit:"大さじ"},
{name:"にんにくチューブ",amount:2,unit:"cm"},

{name:"白ごま",amount:1,unit:"適量"}
],

howto:[
"鶏肉を一口大に切る",
"片栗粉をまぶす",
"フライパンに油を入れて揚げ焼きにする",
"ケチャップ・コチュジャン・砂糖・みりん・にんにくを混ぜる",
"火を止めてタレを加える",
"鶏肉にしっかり絡める",
"白ごまを振って完成"
]

},

"🥩チーズつくね":{
kcal:500,
time:25,
protein:28,
servings:2,
image:"images/cheesetsukune.jpg",
category:"お弁当",

ingredients:[
{name:"鶏ひき肉",amount:300,unit:"g"},
{name:"玉ねぎ",amount:0.5,unit:"個"},
{name:"片栗粉",amount:2,unit:"大さじ"},
{name:"ピザ用チーズ",amount:50,unit:"g"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"}
],

howto:[
"玉ねぎをみじん切りにする",
"鶏ひき肉と混ぜる",
"丸めて焼く",
"チーズをのせて溶かす",
"甘辛タレを絡めて完成"
]

},

"🥦鶏肉とブロッコリー":{
kcal:300,
time:15,
protein:35,
servings:2,
image:"images/chickenbroccoli.jpg",
category:"副菜",

ingredients:[
{name:"鶏むね肉",amount:300,unit:"g",note:"（一口大に切る）"},
{name:"ブロッコリー",amount:1,unit:"株",note:"（小房に分ける）"},
{name:"片栗粉",amount:2,unit:"大さじ"},
{name:"オリーブオイル",amount:1,unit:"大さじ"},
{name:"塩",amount:0.5,unit:"小さじ"},
{name:"こしょう",amount:1,unit:"少々"},
{name:"にんにく",amount:1,unit:"片",note:"（みじん切り）"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"酒",amount:1,unit:"大さじ"}
],

howto:[
"ブロッコリーを小房に分け、沸騰したお湯で2〜3分茹でる",
"鶏むね肉は一口大に切り、塩こしょうと酒で下味をつける",
"鶏肉に片栗粉をまぶして、柔らかく仕上げる",
"フライパンにオリーブオイルとにんにくを入れて香りを出す",
"鶏肉を焼き、両面に焼き色をつける",
"ブロッコリーを加えて炒め、醤油で味付けする",
"全体に味が絡んだら完成"
],

},

"🫑無限ピーマン":{
kcal:120,
time:10,
protein:8,
servings:2,
image:"images/mugenpiman.jpg",
category:"副菜",

ingredients:[
{name:"ピーマン",amount:5,unit:"個",note:"（細切り）"},
{name:"ツナ缶",amount:1,unit:"缶"},
{name:"鶏ガラスープの素",amount:1,unit:"小さじ"},
{name:"ごま油",amount:1,unit:"小さじ"}
],

howto:[
"ピーマンを細切りにする",
"耐熱容器に入れる",
"ツナを加える",
"調味料を加える",
"電子レンジ600Wで2分加熱",
"混ぜて完成"
]

},

"🥕にんじんしりしり":{
kcal:150,
time:10,
protein:7,
servings:2,
image:"images/ninjinshirishiri.jpg",
category:"副菜",

ingredients:[
{name:"にんじん",amount:1,unit:"本",note:"（千切り）"},
{name:"卵",amount:2,unit:"個"},
{name:"ツナ缶",amount:1,unit:"缶"},
{name:"醤油",amount:1,unit:"小さじ"},
{name:"ごま油",amount:1,unit:"小さじ"}
],

howto:[
"にんじんを千切りにする",
"ごま油で炒める",
"ツナを加える",
"溶き卵を流し入れる",
"醤油で味付けして完成"
]

},

"🥩豚キムチ":{
kcal:550,
time:15,
protein:30,
servings:2,
image:"images/butakimchi.jpg",
category:"主菜",

ingredients:[
{name:"豚バラ肉",amount:300,unit:"g",note:"（一口大に切る）"},
{name:"キムチ",amount:200,unit:"g"},
{name:"玉ねぎ",amount:0.5,unit:"個",note:"（薄切り）"},
{name:"ニラ",amount:0.5,unit:"束",note:"（4cm幅に切る）"},
{name:"ごま油",amount:1,unit:"大さじ"},
{name:"にんにく",amount:1,unit:"片",note:"（みじん切り）"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"酒",amount:1,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"小さじ"},
{name:"こしょう",amount:1,unit:"少々"}
],

howto:[
"豚バラ肉を食べやすい大きさに切り、酒とこしょうで下味をつける",
"玉ねぎは薄切り、ニラは4cm幅に切る",
"フライパンにごま油とにんにくを入れて香りを出す",
"豚肉を炒め、色が変わるまで火を通す",
"玉ねぎを加えてしんなりするまで炒める",
"キムチを加えてさらに炒め、醤油と砂糖で味を整える",
"最後にニラを加えて軽く炒めたら完成"
],

},

"🍛豚丼":{
kcal:680,
time:20,
protein:28,
servings:2,
image:"images/butadon.jpg",
category:"主食",

ingredients:[
{name:"豚バラ肉",amount:300,unit:"g"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（薄切り）"},
{name:"ご飯",amount:400,unit:"g"},
{name:"醤油",amount:3,unit:"大さじ"},
{name:"酒",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"生姜",amount:1,unit:"片",note:"（すりおろし）"}
],

howto:[
"玉ねぎは薄切り、豚バラ肉は食べやすい大きさに切る",
"醤油、酒、みりん、砂糖、生姜を混ぜて甘辛タレを作る",
"フライパンで豚肉を炒め、焼き色をつける",
"玉ねぎを加えてしんなりするまで炒める",
"作った甘辛タレを加えて全体に絡める",
"弱火で少し煮詰め、味を染み込ませる",
"ご飯に盛り付け、ねぎと白ごまをのせて完成"
],

},

"🍖生姜焼き":{
kcal:620,
time:20,
protein:35,
servings:2,
image:"images/syougayaki.jpg",
category:"主菜",

ingredients:[
{name:"豚ロース肉",amount:300,unit:"g",note:"（2〜3mm厚さ）"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（薄切り）"},
{name:"生姜",amount:1,unit:"片",note:"（すりおろし）"},
{name:"醤油",amount:3,unit:"大さじ"},
{name:"酒",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:2,unit:"小さじ"},
{name:"サラダ油",amount:1,unit:"大さじ"}
],

howto:[
"豚肉は筋切りをして、焼いた時に縮まないようにする",
"生姜、醤油、酒、みりん、砂糖を混ぜてタレを作る",
"豚肉をタレに10〜15分漬け込んで下味をつける",
"フライパンに油を入れて豚肉を焼く",
"豚肉に焼き色がついたら玉ねぎを加えて炒める",
"残ったタレを加えて全体に絡める",
"照りが出たら完成"
]

},

"🥚オムレツ":{
kcal:250,
time:10,
protein:18,
servings:2,
image:"images/omelette.jpg",
category:"お弁当",

ingredients:[
{name:"卵",amount:3,unit:"個"},
{name:"牛乳",amount:2,unit:"大さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"塩",amount:1,unit:"少々"},
{name:"こしょう",amount:1,unit:"少々"},
{name:"玉ねぎ",amount:0.5,unit:"個",note:"（みじん切り）"},
{name:"ハム",amount:3,unit:"枚",note:"（細かく切る）"}
],

howto:[
"玉ねぎをみじん切り、ハムを細かく切る",
"フライパンで玉ねぎとハムを炒め、塩こしょうで味付けする",
"ボウルに卵を割り、牛乳と塩を加えてよく混ぜる",
"フライパンを弱火〜中火で温め、バターを溶かす",
"卵液を流し入れ、箸で混ぜながら半熟状態にする",
"具材を中央にのせ、卵を折りたたんで形を整える",
"お皿に盛り付けて完成"
],

},

"🌮タコライス":{
kcal:700,
time:20,
protein:30,
servings:2,
image:"images/tacorice.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"合いびき肉",amount:250,unit:"g"},
{name:"玉ねぎ",amount:0.5,unit:"個",note:"（みじん切り）"},
{name:"レタス",amount:3,unit:"枚",note:"（千切り）"},
{name:"トマト",amount:1,unit:"個",note:"（角切り）"},
{name:"ピザ用チーズ",amount:50,unit:"g"},
{name:"ケチャップ",amount:2,unit:"大さじ"},
{name:"ウスターソース",amount:1,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"玉ねぎをみじん切りにする",
"ひき肉を炒める",
"玉ねぎを加えて炒める",
"調味料で味付けする",
"ご飯の上に盛る",
"レタス、トマト、チーズをのせて完成"
]

},

"🥗豆腐ハンバーグ":{
kcal:350,
time:25,
protein:25,
servings:2,
image:"images/toufuhamburg.jpg",
category:"主菜",

ingredients:[
{name:"木綿豆腐",amount:150,unit:"g"},
{name:"鶏ひき肉",amount:250,unit:"g"},
{name:"玉ねぎ",amount:0.5,unit:"個"},
{name:"パン粉",amount:3,unit:"大さじ"},
{name:"卵",amount:1,unit:"個"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"豆腐の水気を切る",
"材料を全部混ぜる",
"形を整える",
"両面を焼く",
"中まで火が通ったら完成"
]

},

"🥚卵焼き":{
kcal:180,
time:10,
protein:12,
servings:2,
image:"images/tamagoyaki.jpg",
category:"お弁当",

ingredients:[
{name:"卵",amount:3,unit:"個"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"醤油",amount:1,unit:"小さじ"},
{name:"みりん",amount:1,unit:"小さじ"},
{name:"だし汁",amount:2,unit:"大さじ"},
{name:"サラダ油",amount:1,unit:"少々"}
],

howto:[
"ボウルに卵を割り入れ、白身を切るようによく混ぜる",
"砂糖、醤油、みりん、だし汁を加えて混ぜる",
"卵焼き器を中火で温め、油を薄くひく",
"卵液を少量流し入れ、半熟になったら奥から手前に巻く",
"空いた部分に油を薄くひき、卵液を追加して巻く",
"同じ作業を繰り返して形を整える",
"焼き上がったら少し冷まして食べやすい大きさに切る"
]

},

"🥓ベーコンエッグ":{
kcal:320,
time:10,
protein:18,
servings:2,
image:"images/baconegg.jpg",
category:"朝ごはん",

ingredients:[
{name:"卵",amount:2,unit:"個"},
{name:"ベーコン",amount:4,unit:"枚"},
{name:"サラダ油",amount:1,unit:"小さじ"},
{name:"塩",amount:1,unit:"少々"},
{name:"こしょう",amount:1,unit:"少々"},
{name:"レタス",amount:2,unit:"枚",note:"（付け合わせ）"},
{name:"ミニトマト",amount:4,unit:"個",note:"（付け合わせ）"}
],

howto:[
"ベーコンを食べやすい大きさに切る",
"フライパンに油をひき、ベーコンを弱火〜中火で焼く",
"ベーコンに焼き色がついたら、卵を割り入れる",
"卵の白身が固まってきたら、少量の水を入れて蓋をする",
"好みの固さ（半熟・固焼き）になるまで蒸し焼きにする",
"塩こしょうで味を整え、付け合わせと一緒に盛り付けて完成"
],

},

"🍳ほうれん草オムレツ":{
kcal:280,
time:15,
protein:20,
servings:2,
image:"images/hourensouomelette.jpg",
category:"お弁当",

ingredients:[
{name:"卵",amount:3,unit:"個"},
{name:"ほうれん草",amount:0.5,unit:"束",note:"（約100g）"},
{name:"ベーコン",amount:3,unit:"枚",note:"（1cm幅に切る）"},
{name:"玉ねぎ",amount:0.5,unit:"個",note:"（薄切り）"},
{name:"牛乳",amount:2,unit:"大さじ"},
{name:"ピザ用チーズ",amount:30,unit:"g"},
{name:"バター",amount:10,unit:"g"},
{name:"塩",amount:1,unit:"少々"},
{name:"こしょう",amount:1,unit:"少々"}
],

howto:[
"ほうれん草を3〜4cm幅に切り、沸騰したお湯でさっと茹でる",
"茹でたほうれん草を冷水に取り、水気をしっかり絞る",
"ベーコンは1cm幅、玉ねぎは薄切りにする",
"フライパンでバターを溶かし、ベーコンと玉ねぎを炒める",
"ほうれん草を加えて軽く炒め、塩こしょうで味付けする",
"ボウルに卵、牛乳、チーズを入れて混ぜる",
"卵液を流し入れ、半熟になるまで焼く",
"具材を包むように折りたたみ、形を整えて完成"
],

},

"🍲麻婆豆腐":{
kcal:450,
time:20,
protein:25,
servings:2,
image:"images/hiyayakko.jpg",
category:"主食",

ingredients:[
{name:"木綿豆腐",amount:1,unit:"丁（300〜400g）"},
{name:"豚ひき肉",amount:200,unit:"g"},
{name:"長ねぎ",amount:0.5,unit:"本",note:"（みじん切り）"},
{name:"にんにく",amount:1,unit:"片",note:"（みじん切り）"},
{name:"生姜",amount:1,unit:"片",note:"（みじん切り）"},
{name:"ごま油",amount:1,unit:"大さじ"},

{name:"【合わせ調味料】",amount:0,unit:""},
{name:"豆板醤",amount:1,unit:"大さじ"},
{name:"甜麺醤",amount:1,unit:"大さじ"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"酒",amount:1,unit:"大さじ"},
{name:"鶏ガラスープの素",amount:2,unit:"小さじ"},
{name:"砂糖",amount:1,unit:"小さじ"},
{name:"水",amount:200,unit:"ml"},

{name:"【仕上げ】",amount:0,unit:""},
{name:"片栗粉",amount:1,unit:"大さじ"},
{name:"水（片栗粉用）",amount:2,unit:"大さじ"},
{name:"ラー油",amount:1,unit:"適量"}
],

howto:[
"豆腐を2cm角に切り、沸騰したお湯で軽く茹でて水気を切る",
"長ねぎ、にんにく、生姜をみじん切りにする",
"豆板醤、甜麺醤、醤油、酒、鶏ガラスープの素、砂糖、水を混ぜて合わせ調味料を作る",
"フライパンにごま油を入れ、にんにくと生姜を炒める",
"豚ひき肉を加えて色が変わるまで炒める",
"合わせ調味料を加えて煮立たせる",
"豆腐を加えて崩さないように煮込む",
"水溶き片栗粉を加えてとろみをつける",
"長ねぎを加え、ラー油をかけて完成"
],

},

"🍜肉うどん":{
kcal:500,
time:20,
protein:20,
servings:2,
image:"images/nikuudon.jpg",
category:"主食",

ingredients:[
{name:"うどん",amount:2,unit:"玉"},
{name:"牛こま切れ肉",amount:200,unit:"g"},
{name:"玉ねぎ",amount:0.5,unit:"個",note:"（薄切り）"},
{name:"ねぎ",amount:1,unit:"適量",note:"（小口切り）"},

{name:"【肉の味付け】",amount:0,unit:""},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"酒",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"},

{name:"【うどんだし】",amount:0,unit:""},
{name:"水",amount:600,unit:"ml"},
{name:"だしの素",amount:2,unit:"小さじ"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"みりん",amount:1,unit:"大さじ"},
{name:"塩",amount:0.5,unit:"小さじ"}
],

howto:[
"玉ねぎは薄切り、ねぎは小口切りにする",
"鍋に醤油、酒、みりん、砂糖を入れて牛肉と玉ねぎを煮る",
"牛肉に味が染みて柔らかくなったら火を止める",
"別の鍋に水、だしの素、醤油、みりん、塩を入れてうどんだしを作る",
"だしを温め、うどんを入れて表示時間通りに温める",
"器にうどんとだしを入れ、味付けした牛肉をのせる",
"ねぎを添えて完成"
],

},

"🍝ナポリタン":{
kcal:700,
time:20,
protein:25,
servings:2,
image:"images/napolitan.jpg",
category:"主食",

ingredients:[
{name:"スパゲッティ",amount:200,unit:"g"},
{name:"ウインナー",amount:5,unit:"本",note:"（斜め切り）"},
{name:"玉ねぎ",amount:0.5,unit:"個",note:"（薄切り）"},
{name:"ピーマン",amount:2,unit:"個",note:"（細切り）"},
{name:"ケチャップ",amount:6,unit:"大さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"塩",amount:1,unit:"少々"},
{name:"こしょう",amount:1,unit:"少々"}
],

howto:[
"スパゲッティを表示時間通りに茹でる",
"玉ねぎは薄切り、ピーマンは細切りにする",
"フライパンでウインナーを炒める",
"玉ねぎとピーマンを加えて炒める",
"茹でたスパゲッティを加える",
"ケチャップを入れてよく絡める",
"バターを加えて風味をつける",
"塩こしょうで味を整えて完成"
]

},

"🥢冷奴":{
kcal:120,
time:5,
protein:10,
servings:2,
image:"images/hiyayakko.jpg",
category:"副菜",

ingredients:[
{name:"絹ごし豆腐",amount:1,unit:"丁（300〜400g）"},
{name:"長ねぎ",amount:0.33,unit:"本",note:"（小口切り）"},
{name:"かつお節",amount:1,unit:"袋"},
{name:"おろし生姜",amount:1,unit:"小さじ"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"ごま油",amount:1,unit:"小さじ",note:"（お好み）"},
{name:"白ごま",amount:1,unit:"少々"}
],

howto:[
"豆腐をパックから取り出し、キッチンペーパーで包んで水気を軽く切る",
"長ねぎを小口切りにする",
"豆腐を食べやすい大きさに切って器に盛る",
"豆腐の上に長ねぎ、かつお節、おろし生姜をのせる",
"醤油をかけ、お好みでごま油と白ごまを加える",
"冷たい状態でいただく"
],

},

"🍚親子丼":{
kcal:650,
time:20,
protein:35,
servings:2,
image:"images/oyakodon.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"鶏もも肉",amount:250,unit:"g",note:"（一口大）"},
{name:"卵",amount:4,unit:"個"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（薄切り）"},
{name:"水",amount:150,unit:"ml"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"}
],

howto:[
"玉ねぎを薄切りにする",
"鶏肉を一口大に切る",
"フライパンに水・醤油・みりん・砂糖を入れて煮立たせる",
"玉ねぎを入れて3分煮る",
"鶏肉を加えて火が通るまで煮る",
"溶き卵の2/3を流し入れる",
"半熟になったら残りの卵を入れる",
"ご飯にのせて完成"
]

},

"🍗唐揚げ":{
kcal:650,
time:25,
protein:35,
servings:2,
image:"images/karaage.jpg",
category:"主菜",

ingredients:[
{name:"鶏もも肉",amount:400,unit:"g",note:"（一口大）"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"酒",amount:2,unit:"大さじ"},
{name:"にんにく",amount:1,unit:"片",note:"（すりおろし）"},
{name:"生姜",amount:1,unit:"片",note:"（すりおろし）"},
{name:"片栗粉",amount:5,unit:"大さじ"},
{name:"サラダ油",amount:1,unit:"適量"}
],

howto:[
"鶏もも肉を一口大に切る",
"醤油、酒、にんにく、生姜で10分ほど下味をつける",
"片栗粉をまぶす",
"170℃の油で揚げる",
"きつね色になり中まで火が通ったら完成"
]

},

"🥩ハンバーグ":{
kcal:550,
time:30,
protein:30,
servings:2,
image:"images/hamburg.jpg",
category:"主菜",

ingredients:[
{name:"合いびき肉",amount:300,unit:"g"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（みじん切り）"},
{name:"卵",amount:1,unit:"個"},
{name:"パン粉",amount:4,unit:"大さじ"},
{name:"牛乳",amount:2,unit:"大さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"ケチャップ",amount:3,unit:"大さじ"},
{name:"ウスターソース",amount:2,unit:"大さじ"},
{name:"醤油",amount:1,unit:"小さじ"},
{name:"砂糖",amount:1,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"サラダ油",amount:1,unit:"大さじ"}
],

howto:[
"玉ねぎをみじん切りにして炒め、冷ます",
"ひき肉、卵、パン粉、牛乳、塩こしょうを混ぜる",
"形を整えて空気を抜く",
"フライパンで両面に焼き色をつける",
"蓋をして弱火で5〜7分ほど焼き、中まで火を通す",
"【デミグラスソース】フライパンに残った肉汁にケチャップ大さじ3、ウスターソース大さじ2、醤油小さじ1、砂糖小さじ1、バター10gを加える",
"弱火で混ぜながら少し煮詰め、とろみが出たらソース完成",
"ハンバーグにデミグラスソースをかけて完成"
]

},

"🍖豚の角煮":{
kcal:700,
time:90,
protein:35,
servings:2,
image:"images/butakakuni.jpg",
category:"主菜",

ingredients:[
{name:"豚バラブロック",amount:500,unit:"g"},
{name:"大根",amount:0.5,unit:"本"},
{name:"ゆで卵",amount:2,unit:"個"},
{name:"生姜",amount:1,unit:"片",note:"（薄切り）"},
{name:"水",amount:400,unit:"ml"},
{name:"醤油",amount:4,unit:"大さじ"},
{name:"酒",amount:3,unit:"大さじ"},
{name:"みりん",amount:3,unit:"大さじ"},
{name:"砂糖",amount:2,unit:"大さじ"}
],

howto:[
"豚バラ肉を大きめに切り、フライパンで表面を焼く",
"鍋に豚肉、水、生姜を入れて30分ほど煮る",
"大根を加えてさらに煮込む",
"醤油、酒、みりん、砂糖を加える",
"弱火でじっくり煮込み、味を染み込ませる",
"最後にゆで卵を加えて少し煮たら完成"
]

},

"🐟鮭のムニエル":{
kcal:350,
time:20,
protein:30,
servings:2,
image:"images/salmonmeuniere.jpg",
category:"主菜",

ingredients:[
{name:"生鮭",amount:2,unit:"切れ"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"小麦粉",amount:2,unit:"大さじ"},
{name:"バター",amount:20,unit:"g"},
{name:"オリーブオイル",amount:1,unit:"大さじ"},
{name:"レモン",amount:0.5,unit:"個"}
],

howto:[
"鮭に塩こしょうを振り、10分ほど置く",
"鮭の水分を拭き取り、小麦粉を薄くまぶす",
"フライパンにオリーブオイルとバターを入れる",
"鮭を両面焼き、中まで火を通す",
"仕上げにレモンを絞って完成"
]

},

"🍗照り焼きチキン":{
kcal:600,
time:25,
protein:38,
servings:2,
image:"images/teriyakichicken.jpg",
category:"主菜",

ingredients:[
{name:"鶏もも肉",amount:2,unit:"枚（約500g）"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"片栗粉",amount:2,unit:"大さじ"},
{name:"サラダ油",amount:1,unit:"大さじ"},

{name:"【照り焼きタレ】",amount:0,unit:""},
{name:"醤油",amount:3,unit:"大さじ"},
{name:"酒",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"}
],

howto:[
"鶏もも肉の厚みを均一にする",
"塩こしょうをして片栗粉を薄くまぶす",
"フライパンで皮目から焼く",
"裏返して中まで火を通す",
"醤油、酒、みりん、砂糖を混ぜてタレを作る",
"タレを加えて照りが出るまで煮絡める",
"食べやすく切って完成"
]

},

"🥚だし巻き卵":{
kcal:180,
time:10,
protein:12,
servings:2,
image:"images/dashimaki.jpg",
category:"お弁当",

ingredients:[
{name:"卵",amount:3,unit:"個"},
{name:"だし汁",amount:3,unit:"大さじ"},
{name:"砂糖",amount:2,unit:"小さじ"},
{name:"醤油",amount:1,unit:"小さじ"},
{name:"みりん",amount:1,unit:"小さじ"},
{name:"サラダ油",amount:1,unit:"少々"}
],

howto:[
"ボウルに卵を割り、だし汁、砂糖、醤油、みりんを混ぜる",
"卵焼き器を温め、油を薄くひく",
"卵液を少量流して巻く",
"同じ作業を繰り返して形を整える",
"粗熱を取って食べやすく切ったら完成"
]

},

"🐟鮭の塩焼き":{
kcal:250,
time:15,
protein:28,
servings:2,
image:"images/salmonyaki.jpg",
category:"お弁当",

ingredients:[
{name:"鮭",amount:2,unit:"切れ"},
{name:"塩",amount:1,unit:"少々"},
{name:"酒",amount:1,unit:"小さじ"}
],

howto:[
"鮭に塩と酒を振って10分置く",
"キッチンペーパーで水分を取る",
"魚焼きグリルまたはフライパンで焼く",
"中まで火が通ったら完成"
]

},

"🥓アスパラベーコン巻き":{
kcal:220,
time:10,
protein:12,
servings:2,
image:"images/asparabacon.jpg",
category:"お弁当",

ingredients:[
{name:"アスパラ",amount:6,unit:"本"},
{name:"ベーコン",amount:6,unit:"枚"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"サラダ油",amount:1,unit:"少々"}
],

howto:[
"アスパラの根元を切り、食べやすい長さにする",
"ベーコンでアスパラを巻く",
"フライパンで転がしながら焼く",
"塩こしょうで味を整えて完成"
]

},

"🥔ポテトサラダ":{
kcal:300,
time:25,
protein:8,
servings:2,
image:"images/potatosalad.jpg",
category:"お弁当",

ingredients:[
{name:"じゃがいも",amount:3,unit:"個"},
{name:"きゅうり",amount:0.5,unit:"本"},
{name:"ハム",amount:3,unit:"枚"},
{name:"マヨネーズ",amount:4,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"じゃがいもを茹でてつぶす",
"きゅうりを薄切りにして塩もみする",
"ハムを細切りにする",
"材料を混ぜてマヨネーズで和える",
"塩こしょうで味を整えて完成"
]

},

"🍖豚肉の野菜巻き":{
kcal:420,
time:20,
protein:28,
servings:2,
image:"images/butaniku_yasaimaki.jpg",
category:"お弁当",

ingredients:[
{name:"豚ロース薄切り肉",amount:8,unit:"枚"},
{name:"にんじん",amount:0.5,unit:"本"},
{name:"いんげん",amount:8,unit:"本"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"片栗粉",amount:1,unit:"大さじ"},
{name:"サラダ油",amount:1,unit:"大さじ"},

{name:"【甘辛タレ】",amount:0,unit:""},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"酒",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"}
],

howto:[
"にんじんを細切りにし、いんげんと一緒に下茹でする",
"豚肉を広げて野菜を巻き、片栗粉を薄くまぶす",
"フライパンで転がしながら焼く",
"醤油、酒、みりん、砂糖を加える",
"タレが絡んで照りが出たら完成"
]

},

"🍤エビフライ":{
kcal:450,
time:30,
protein:30,
servings:2,
image:"images/ebifurai.jpg",
category:"お弁当",

ingredients:[
{name:"エビ",amount:8,unit:"尾"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"小麦粉",amount:3,unit:"大さじ"},
{name:"卵",amount:1,unit:"個"},
{name:"パン粉",amount:1,unit:"適量"},
{name:"サラダ油",amount:1,unit:"適量"}
],

howto:[
"エビの殻と背ワタを取り、下処理する",
"塩こしょうで下味をつける",
"小麦粉、卵、パン粉の順につける",
"170℃の油で揚げる",
"きつね色になったら完成"
]

},

"🥬ほうれん草ベーコン炒め":{
kcal:180,
time:10,
protein:10,
servings:2,
image:"images/hourensoubacon.jpg",
category:"お弁当",

ingredients:[
{name:"ほうれん草",amount:1,unit:"束"},
{name:"ベーコン",amount:3,unit:"枚"},
{name:"バター",amount:10,unit:"g"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"ほうれん草を茹でて水気を絞る",
"ベーコンを食べやすく切る",
"フライパンでベーコンを炒める",
"ほうれん草とバターを加える",
"塩こしょうで味付けして完成"
]

},

"🥚味付け卵":{
kcal:160,
time:15,
protein:13,
servings:2,
image:"images/ajitama.jpg",
category:"お弁当",

ingredients:[
{name:"卵",amount:4,unit:"個"},

{name:"【漬けダレ】",amount:0,unit:""},
{name:"醤油",amount:3,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"水",amount:3,unit:"大さじ"}
],

howto:[
"卵を好みの固さに茹でる",
"殻をむく",
"醤油、みりん、砂糖、水を混ぜて漬けダレを作る",
"卵をタレに入れて冷蔵庫で数時間置く",
"味が染みたら完成"
]

},

"🥔じゃがいもベーコン炒め":{
kcal:250,
time:15,
protein:8,
servings:2,
image:"images/potatobacon.jpg",
category:"お弁当",

ingredients:[
{name:"じゃがいも",amount:3,unit:"個"},
{name:"ベーコン",amount:4,unit:"枚"},
{name:"バター",amount:10,unit:"g"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"醤油",amount:1,unit:"小さじ"}
],

howto:[
"じゃがいもを一口大に切る",
"電子レンジで柔らかくする",
"ベーコンを炒める",
"じゃがいもとバターを加えて炒める",
"醤油と塩こしょうで味付けして完成"
]

},

"🥬ほうれん草のおひたし":{
kcal:60,
time:10,
protein:5,
servings:2,
image:"images/hourensouohitashi.jpg",
category:"副菜",

ingredients:[
{name:"ほうれん草",amount:1,unit:"束"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"だし汁",amount:2,unit:"大さじ"},
{name:"かつお節",amount:1,unit:"適量"}
],

howto:[
"ほうれん草を茹でる",
"冷水に取り水気を絞る",
"食べやすい大きさに切る",
"醤油とだし汁で和える",
"かつお節をのせて完成"
]

},

"🍆なすの煮びたし":{
kcal:120,
time:20,
protein:3,
servings:2,
image:"images/nasunibitashi.jpg",
category:"副菜",

ingredients:[
{name:"なす",amount:3,unit:"本"},
{name:"ごま油",amount:1,unit:"大さじ"},
{name:"だし汁",amount:200,unit:"ml"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"生姜",amount:1,unit:"少々"}
],

howto:[
"なすを食べやすく切る",
"ごま油でなすを焼く",
"だし汁、醤油、みりん、生姜を加える",
"弱火で煮て味を染み込ませる",
"冷まして完成"
]

},

"🥒きゅうりの浅漬け":{
kcal:30,
time:10,
protein:1,
servings:2,
image:"images/kyuriasazuke.jpg",
category:"副菜",

ingredients:[
{name:"きゅうり",amount:2,unit:"本"},
{name:"塩",amount:0.5,unit:"小さじ"},
{name:"昆布",amount:1,unit:"少々"},
{name:"ごま油",amount:1,unit:"小さじ"}
],

howto:[
"きゅうりを食べやすく切る",
"塩をもみ込む",
"昆布とごま油を加える",
"冷蔵庫で少し置いて完成"
]

},

"🥕きんぴらごぼう":{
kcal:150,
time:20,
protein:4,
servings:2,
image:"images/kinpira.jpg",
category:"副菜",

ingredients:[
{name:"ごぼう",amount:1,unit:"本"},
{name:"にんじん",amount:0.5,unit:"本"},
{name:"ごま油",amount:1,unit:"大さじ"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"みりん",amount:1,unit:"大さじ"},
{name:"白ごま",amount:1,unit:"適量"}
],

howto:[
"ごぼうとにんじんを細切りにする",
"ごま油で炒める",
"調味料を加えて炒め煮する",
"汁気がなくなったら完成"
]

},

"🥦ブロッコリーの胡麻和え":{
kcal:120,
time:10,
protein:6,
servings:2,
image:"images/broccoligoma.jpg",
category:"副菜",

ingredients:[
{name:"ブロッコリー",amount:1,unit:"株"},
{name:"すりごま",amount:2,unit:"大さじ"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"小さじ"}
],

howto:[
"ブロッコリーを小房に分けて茹でる",
"水気をしっかり切る",
"すりごま、醤油、砂糖を混ぜる",
"ブロッコリーと和えて完成"
]

},

"🎃かぼちゃサラダ":{
kcal:280,
time:20,
protein:5,
servings:2,
image:"images/kabochasalad.jpg",
category:"副菜",

ingredients:[
{name:"かぼちゃ",amount:300,unit:"g"},
{name:"きゅうり",amount:0.5,unit:"本"},
{name:"ハム",amount:3,unit:"枚"},
{name:"マヨネーズ",amount:3,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"かぼちゃを一口大に切って柔らかくする",
"熱いうちにつぶす",
"きゅうりとハムを切る",
"材料をマヨネーズで和える",
"塩こしょうで味を整えて完成"
]

},

"🍄きのこバター炒め":{
kcal:150,
time:10,
protein:5,
servings:2,
image:"images/kinokobutter.jpg",
category:"副菜",

ingredients:[
{name:"しめじ",amount:1,unit:"パック"},
{name:"えのき",amount:1,unit:"袋"},
{name:"バター",amount:10,unit:"g"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"きのこを食べやすい大きさにする",
"フライパンでバターを溶かす",
"きのこを炒める",
"醤油と塩こしょうで味付けして完成"
]

},

"🫛いんげん胡麻和え":{
kcal:80,
time:10,
protein:4,
servings:2,
image:"images/ingen.jpg",
category:"副菜",

ingredients:[
{name:"いんげん",amount:150,unit:"g"},
{name:"すりごま",amount:2,unit:"大さじ"},
{name:"醤油",amount:1,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"小さじ"}
],

howto:[
"いんげんを茹でる",
"食べやすい長さに切る",
"調味料を混ぜる",
"いんげんと和えて完成"
]

},

"🌽コーンバター":{
kcal:180,
time:10,
protein:5,
servings:2,
image:"images/cornbutter.jpg",
category:"副菜",

ingredients:[
{name:"コーン",amount:200,unit:"g"},
{name:"バター",amount:15,unit:"g"},
{name:"塩",amount:1,unit:"少々"},
{name:"こしょう",amount:1,unit:"少々"}
],

howto:[
"フライパンにバターを溶かす",
"コーンを炒める",
"塩こしょうで味付けする",
"全体が温まったら完成"
]

},

"🍲豚汁":{
kcal:250,
time:25,
protein:15,
servings:2,
image:"images/tonjiru.jpg",
category:"スープ",

ingredients:[
{name:"豚こま切れ肉",amount:150,unit:"g"},
{name:"大根",amount:100,unit:"g"},
{name:"にんじん",amount:0.5,unit:"本"},
{name:"ごぼう",amount:0.5,unit:"本"},
{name:"こんにゃく",amount:0.5,unit:"枚"},
{name:"味噌",amount:3,unit:"大さじ"},
{name:"だし汁",amount:500,unit:"ml"},
{name:"ごま油",amount:1,unit:"小さじ"}
],

howto:[
"野菜を食べやすい大きさに切る",
"鍋にごま油を入れて豚肉を炒める",
"野菜とこんにゃくを加えて炒める",
"だし汁を加えて具材が柔らかくなるまで煮る",
"火を弱めて味噌を溶かす",
"温まったら完成"
]

},

"🥣コーンスープ":{
kcal:220,
time:15,
protein:8,
servings:2,
image:"images/cornsoup.jpg",
category:"スープ",

ingredients:[
{name:"コーン",amount:200,unit:"g"},
{name:"牛乳",amount:300,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"鍋にバターを溶かす",
"コーンを炒める",
"牛乳とコンソメを加える",
"弱火で温める",
"塩こしょうで味を整えて完成"
]

},

"🍄きのこスープ":{
kcal:100,
time:15,
protein:5,
servings:2,
image:"images/kinokosoup.jpg",
category:"スープ",

ingredients:[
{name:"しめじ",amount:0.5,unit:"パック"},
{name:"えのき",amount:0.5,unit:"袋"},
{name:"玉ねぎ",amount:0.5,unit:"個"},
{name:"水",amount:400,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"きのこと玉ねぎを食べやすく切る",
"鍋に水とコンソメを入れる",
"具材を加えて煮る",
"柔らかくなったら塩こしょうで味付けして完成"
]

},

"🥚かきたま汁":{
kcal:90,
time:10,
protein:7,
servings:2,
image:"images/kakitamajiru.jpg",
category:"スープ",

ingredients:[
{name:"卵",amount:2,unit:"個"},
{name:"だし汁",amount:400,unit:"ml"},
{name:"醤油",amount:2,unit:"小さじ"},
{name:"塩",amount:1,unit:"少々"},
{name:"片栗粉",amount:1,unit:"小さじ"}
],

howto:[
"鍋にだし汁を温める",
"醤油と塩で味付けする",
"水溶き片栗粉で少しとろみをつける",
"溶き卵を流し入れる",
"卵が固まったら完成"
]

},

"🍅ミネストローネ":{
kcal:180,
time:30,
protein:7,
servings:2,
image:"images/minestrone.jpg",
category:"スープ",

ingredients:[
{name:"ベーコン",amount:4,unit:"枚"},
{name:"玉ねぎ",amount:1,unit:"個"},
{name:"にんじん",amount:0.5,unit:"本"},
{name:"じゃがいも",amount:1,unit:"個"},
{name:"トマト缶",amount:1,unit:"缶"},
{name:"水",amount:300,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"野菜とベーコンを食べやすく切る",
"鍋でベーコンと野菜を炒める",
"トマト缶と水を加える",
"コンソメを入れて20分ほど煮込む",
"塩こしょうで味を整えて完成"
]

},

"🥔じゃがいもポタージュ":{
kcal:220,
time:25,
protein:6,
servings:2,
image:"images/potatopotage.jpg",
category:"スープ",

ingredients:[
{name:"じゃがいも",amount:2,unit:"個"},
{name:"玉ねぎ",amount:0.5,unit:"個"},
{name:"牛乳",amount:300,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"じゃがいもと玉ねぎを薄切りにする",
"鍋にバターを溶かして玉ねぎを炒める",
"じゃがいもと水を加えて柔らかく煮る",
"ミキサーでなめらかにする",
"牛乳とコンソメを加えて温める",
"塩こしょうで味を整えて完成"
]

},

"🥬野菜コンソメスープ":{
kcal:100,
time:15,
protein:4,
servings:2,
image:"images/yasaiconsome.jpg",
category:"スープ",

ingredients:[
{name:"キャベツ",amount:150,unit:"g"},
{name:"玉ねぎ",amount:1,unit:"個"},
{name:"にんじん",amount:0.5,unit:"本"},
{name:"ベーコン",amount:3,unit:"枚"},
{name:"水",amount:500,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"野菜とベーコンを食べやすく切る",
"鍋に水とコンソメを入れる",
"具材を加えて煮込む",
"野菜が柔らかくなったら味を整えて完成"
]

},

"🍄クリームきのこスープ":{
kcal:250,
time:20,
protein:8,
servings:2,
image:"images/creamkinoko.jpg",
category:"スープ",

ingredients:[
{name:"しめじ",amount:1,unit:"パック"},
{name:"玉ねぎ",amount:0.5,unit:"個"},
{name:"牛乳",amount:300,unit:"ml"},
{name:"小麦粉",amount:1,unit:"大さじ"},
{name:"バター",amount:15,unit:"g"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"きのこと玉ねぎを切る",
"鍋にバターを溶かして炒める",
"小麦粉を加えて混ぜる",
"牛乳を少しずつ加える",
"コンソメで味付けする",
"とろみが出たら完成"
]

},

"🥓ベーコンと卵のスープ":{
kcal:180,
time:15,
protein:12,
servings:2,
image:"images/baconeggssoup.jpg",
category:"スープ",

ingredients:[
{name:"卵",amount:2,unit:"個"},
{name:"ベーコン",amount:3,unit:"枚"},
{name:"玉ねぎ",amount:0.5,unit:"個"},
{name:"水",amount:400,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"ベーコンと玉ねぎを切る",
"鍋で炒める",
"水とコンソメを加える",
"溶き卵を流し入れる",
"塩こしょうで味を整えて完成"
]

},

"🍜わかめスープ":{
kcal:50,
time:10,
protein:3,
servings:2,
image:"images/wakamesoup.jpg",
category:"スープ",

ingredients:[
{name:"乾燥わかめ",amount:5,unit:"g"},
{name:"長ねぎ",amount:0.5,unit:"本"},
{name:"水",amount:400,unit:"ml"},
{name:"鶏ガラスープの素",amount:2,unit:"小さじ"},
{name:"ごま油",amount:1,unit:"小さじ"},
{name:"白ごま",amount:1,unit:"少々"}
],

howto:[
"わかめを水で戻す",
"鍋に水と鶏ガラスープの素を入れる",
"わかめとねぎを加えて煮る",
"ごま油と白ごまで仕上げて完成"
]

},

"🥣豆腐とわかめの味噌汁":{
kcal:80,
time:10,
protein:5,
servings:2,
image:"images/tofumisoshiru.jpg",
category:"スープ",

ingredients:[
{name:"木綿豆腐",amount:150,unit:"g"},
{name:"乾燥わかめ",amount:5,unit:"g"},
{name:"長ねぎ",amount:0.5,unit:"本"},
{name:"だし汁",amount:400,unit:"ml"},
{name:"味噌",amount:2,unit:"大さじ"}
],

howto:[
"豆腐を食べやすい大きさに切る",
"わかめを水で戻す",
"鍋にだし汁を温め、豆腐とわかめを入れる",
"火を弱めて味噌を溶かす",
"ねぎを加えて完成"
]

},

"🍅トマトスープ":{
kcal:150,
time:20,
protein:5,
servings:2,
image:"images/tomatosoup.jpg",
category:"スープ",

ingredients:[
{name:"トマト缶",amount:1,unit:"缶"},
{name:"玉ねぎ",amount:1,unit:"個"},
{name:"ベーコン",amount:3,unit:"枚"},
{name:"水",amount:300,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"玉ねぎとベーコンを切る",
"鍋で炒める",
"トマト缶と水を加える",
"コンソメを入れて煮込む",
"塩こしょうで味を整えて完成"
]

},

"🧅オニオンスープ":{
kcal:100,
time:25,
protein:3,
servings:2,
image:"images/onionsoup.jpg",
category:"スープ",

ingredients:[
{name:"玉ねぎ",amount:2,unit:"個"},
{name:"バター",amount:10,unit:"g"},
{name:"水",amount:500,unit:"ml"},
{name:"コンソメ",amount:2,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"玉ねぎを薄切りにする",
"バターでじっくり炒める",
"水とコンソメを加える",
"弱火で煮込む",
"塩こしょうで味を整えて完成"
]

},

"🥚ふわふわ卵スープ":{
kcal:90,
time:10,
protein:7,
servings:2,
image:"images/fuwatama.jpg",
category:"スープ",

ingredients:[
{name:"卵",amount:2,unit:"個"},
{name:"水",amount:400,unit:"ml"},
{name:"鶏ガラスープの素",amount:2,unit:"小さじ"},
{name:"醤油",amount:1,unit:"小さじ"},
{name:"片栗粉",amount:1,unit:"小さじ"},
{name:"ねぎ",amount:1,unit:"適量"}
],

howto:[
"鍋に水と調味料を入れて温める",
"水溶き片栗粉で少しとろみをつける",
"溶き卵を細く流し入れる",
"ねぎを加えて完成"
]

},

"🍳チャーハン":{
kcal:650,
time:15,
protein:20,
servings:2,
image:"images/chahan.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"卵",amount:2,unit:"個"},
{name:"チャーシュー",amount:100,unit:"g"},
{name:"長ねぎ",amount:0.5,unit:"本"},
{name:"ごま油",amount:1,unit:"大さじ"},
{name:"鶏ガラスープの素",amount:2,unit:"小さじ"},
{name:"醤油",amount:1,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"長ねぎとチャーシューを細かく切る",
"フライパンで卵を炒める",
"ご飯を加えて炒める",
"具材と調味料を加えて炒める",
"パラパラになったら完成"
]

},

"🍛ハヤシライス":{
kcal:700,
time:35,
protein:25,
servings:2,
image:"images/hayashi.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"牛こま切れ肉",amount:250,unit:"g"},
{name:"玉ねぎ",amount:2,unit:"個"},
{name:"しめじ",amount:1,unit:"パック"},
{name:"ハヤシルー",amount:0.5,unit:"箱"},
{name:"水",amount:600,unit:"ml"},
{name:"バター",amount:10,unit:"g"}
],

howto:[
"玉ねぎを薄切りにする",
"牛肉を炒める",
"玉ねぎとしめじを加えて炒める",
"水を加えて煮込む",
"ルーを溶かして完成"
]

},

"🥢そぼろ丼":{
kcal:620,
time:20,
protein:30,
servings:2,
image:"images/soborodon.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"鶏ひき肉",amount:300,unit:"g"},
{name:"卵",amount:2,unit:"個"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"砂糖",amount:2,unit:"大さじ"},
{name:"みりん",amount:1,unit:"大さじ"},
{name:"生姜",amount:1,unit:"少々"}
],

howto:[
"鶏ひき肉を調味料で炒める",
"卵を炒って炒り卵を作る",
"ご飯にそぼろと卵を盛る",
"完成"
]

},

"🥘ドライカレー":{
kcal:650,
time:25,
protein:25,
servings:2,
image:"images/drycurry.jpg",
category:"主食",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"合いびき肉",amount:250,unit:"g"},
{name:"玉ねぎ",amount:1,unit:"個"},
{name:"にんじん",amount:0.5,unit:"本"},
{name:"カレー粉",amount:2,unit:"大さじ"},
{name:"ケチャップ",amount:2,unit:"大さじ"},
{name:"ウスターソース",amount:1,unit:"大さじ"}
],

howto:[
"野菜をみじん切りにする",
"ひき肉を炒める",
"野菜を加えて炒める",
"調味料を加える",
"ご飯に盛って完成"
]

},

"🍞フレンチトースト":{
kcal:350,
time:15,
protein:12,
servings:2,
image:"images/frenchtoast.jpg",
category:"朝ごはん",

ingredients:[
{name:"食パン",amount:2,unit:"枚"},
{name:"卵",amount:2,unit:"個"},
{name:"牛乳",amount:150,unit:"ml"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"バター",amount:10,unit:"g"},
{name:"メープルシロップ",amount:1,unit:"適量"}
],

howto:[
"卵、牛乳、砂糖を混ぜて卵液を作る",
"食パンを卵液に浸す",
"フライパンにバターを溶かす",
"両面を焼いて焼き色をつける",
"メープルシロップをかけて完成"
]

},

"🥪卵サンド":{
kcal:400,
time:15,
protein:18,
servings:2,
image:"images/tamago_sand.jpg",
category:"朝ごはん",

ingredients:[
{name:"食パン",amount:4,unit:"枚"},
{name:"卵",amount:4,unit:"個"},
{name:"マヨネーズ",amount:3,unit:"大さじ"},
{name:"塩こしょう",amount:1,unit:"少々"},
{name:"レタス",amount:1,unit:"適量"}
],

howto:[
"卵を茹でてつぶす",
"マヨネーズと塩こしょうで和える",
"パンに卵とレタスを挟む",
"食べやすく切って完成"
]

},

"🍙鮭おにぎりセット":{
kcal:300,
time:10,
protein:12,
servings:2,
image:"images/onigiriset.jpg",
category:"朝ごはん",

ingredients:[
{name:"ご飯",amount:300,unit:"g"},
{name:"鮭フレーク",amount:1,unit:"適量"},
{name:"海苔",amount:2,unit:"枚"},
{name:"味噌汁",amount:2,unit:"杯"}
],

howto:[
"ご飯に鮭フレークを混ぜる",
"食べやすい大きさに握る",
"海苔を巻く",
"味噌汁と一緒に盛り付けて完成"
]

},

"🥓ベーコンエッグ":{
kcal:320,
time:10,
protein:18,
servings:2,
image:"images/baconegg.jpg",
category:"朝ごはん",

ingredients:[
{name:"卵",amount:2,unit:"個"},
{name:"ベーコン",amount:4,unit:"枚"},
{name:"サラダ油",amount:1,unit:"小さじ"},
{name:"塩こしょう",amount:1,unit:"少々"}
],

howto:[
"フライパンでベーコンを焼く",
"卵を割り入れる",
"蓋をして好みの固さまで焼く",
"塩こしょうで味付けして完成"
]

},

"🥞ホットケーキ":{
kcal:450,
time:20,
protein:10,
servings:2,
image:"images/hotcake.jpg",
category:"朝ごはん",

ingredients:[
{name:"ホットケーキミックス",amount:200,unit:"g"},
{name:"卵",amount:1,unit:"個"},
{name:"牛乳",amount:150,unit:"ml"},
{name:"バター",amount:1,unit:"適量"},
{name:"はちみつ",amount:1,unit:"適量"}
],

howto:[
"卵と牛乳を混ぜる",
"ホットケーキミックスを加える",
"フライパンで両面焼く",
"バターとはちみつをかけて完成"
]

},

"🥩牛丼":{
kcal:680,
time:20,
protein:30,
servings:2,
image:"images/gyudon.jpg",
category:"主菜",

ingredients:[
{name:"ご飯",amount:400,unit:"g"},
{name:"牛こま切れ肉",amount:250,unit:"g"},
{name:"玉ねぎ",amount:1,unit:"個",note:"（薄切り）"},
{name:"水",amount:200,unit:"ml"},
{name:"醤油",amount:2,unit:"大さじ"},
{name:"みりん",amount:2,unit:"大さじ"},
{name:"砂糖",amount:1,unit:"大さじ"},
{name:"和風だし",amount:1,unit:"小さじ"}
],

howto:[
"玉ねぎを薄切りにする",
"鍋に水・醤油・みりん・砂糖・和風だしを入れて煮立たせる",
"玉ねぎを入れて柔らかくなるまで煮る",
"牛肉を加えてアクを取りながら煮る",
"汁気が少し残るくらいまで煮込む",
"ご飯に盛り付けて完成"
]

}

};

window.recipes = recipes;

function suggestMenu(){

let ingredients =
document.getElementById(
"ingredients"
).value
.toLowerCase();

let chicken =
ingredients.includes("鶏肉") ||
ingredients.includes("とり肉") ||
ingredients.includes("鳥肉");

let pork =
ingredients.includes("豚肉") ||
ingredients.includes("ぶた肉");

let egg =
ingredients.includes("卵") ||
ingredients.includes("たまご");

let onion =
ingredients.includes("玉ねぎ") ||
ingredients.includes("たまねぎ");

let carrot =
ingredients.includes("にんじん") ||
ingredients.includes("人参");

let potato =
ingredients.includes("じゃがいも") ||
ingredients.includes("ジャガイモ");

let broccoli =
ingredients.includes("ブロッコリー");

let cabbage =
ingredients.includes("キャベツ");

let pepper =
ingredients.includes("ピーマン");

let eggplant =
ingredients.includes("ナス");

let beanSprout =
ingredients.includes("もやし");

let tofu =
ingredients.includes("豆腐");

let bacon =
ingredients.includes("ベーコン");

let tuna =
ingredients.includes("ツナ");

let cheese =
ingredients.includes("チーズ");

let spinach =
ingredients.includes("ほうれん草");

let sausage =
ingredients.includes("ウインナー");

let menus = [];
let mode =
document.getElementById(
"dietMode"
).value;

// カレー
if(
pork &&
onion &&
carrot &&
potato
){

menus = ["🍛カレー"];

}

// 肉じゃが
else if(
pork &&
onion &&
potato
){

menus = ["🥔肉じゃが"];

}

// 鶏肉とブロッコリー
else if(
chicken &&
broccoli
){

menus = ["🥦鶏肉とブロッコリー"];

}

// ベーコン＋卵
else if(
bacon &&
egg
){

menus = [
"🥓ベーコンエッグ"
];

}

// ほうれん草＋卵
else if(
spinach &&
egg
){

menus = [
"🍳ほうれん草オムレツ"
];

}

// 豆腐
else if(
tofu
){

menus = [
"🍲麻婆豆腐",
"🥢冷奴"
];

}

// 鶏肉＋卵
else if(
chicken &&
egg
){

if(mode === "diet"){

menus = [
"🥗サラダチキン",
"🍲鶏むねスープ",
"🥦鶏肉とブロッコリー"
];

}else{

menus = [
"🍚親子丼",
"🍳オムライス",
"🍗チキン南蛮"
];

}

}

// 豚肉
else if(pork){

menus = [
"🥩豚キムチ",
"🍛豚丼",
"🥢生姜焼き"
];

}

// 卵
else if(egg){

menus = [
"🍳オムレツ",
"🥚卵焼き"
];

}

// 何もない
else{

menus = [
"🤔食材を選んでね"
];

}

let randomIndex =
Math.floor(
Math.random() *
menus.length
);

let result =
menus[randomIndex];

let others =
menus.filter(
(menu,index)=>
index !== randomIndex
);

let info =
recipes[result];


if(info){

let html =

`<div class="recipe-card">

<h3>${result}</h3>

<p>🔥 ${info.kcal} kcal</p>

<p>⏰ ${info.time} 分</p>

<p>💪 タンパク質 ${info.protein} g</p>

`;

html += `
<button 
class="favorite-btn"
data-recipe="${result}"
onclick="addFavorite('${result}')">

<span class="favorite-heart">⭐</span>
お気に入り登録

</button>
`;

html += "</div>";

if(info.ingredients){

html += "<br><br>📝材料<br>";

for(let i=0;i<info.ingredients.length;i++){

let item = info.ingredients[i];

if(typeof item === "string"){

   html += "・" + item.replace("0.5","1/2").replace("0.25","1/4").replace("0.33","1/3") + "<br>";

}else{

    html +=
    "・" +
    item.name + " " +
formatAmount(item.amount, item.unit) +
(item.note ? item.note : "") +
"<br>";

}

}
}

if(info.howto){

html +=
"<br>👩‍🍳作り方<br>";

for(let i=0;i<info.howto.length;i++){

html +=
(i+1) +
"．" +
info.howto[i] +
"<br>";

}

}

if(others.length > 0){

html +=
"<br><br>────────<br><br>" +
"🍽️他の候補<br><br>";

for(let i=0;i<others.length;i++){

html +=
others[i] +
"<br>";

}

}

document.getElementById(
"result"
).innerHTML =
html;
}else{

document.getElementById(
"result"
).innerHTML =
result;

}

}
function weekMenu(){

const menus = [

"🍚親子丼",
"🍳オムライス",
"🍗チキン南蛮",
"🥩豚キムチ",
"🥢生姜焼き",
"🍛カレー",
"🍜肉うどん"

];

const days = [

"月曜日",
"火曜日",
"水曜日",
"木曜日",
"金曜日",
"土曜日",
"日曜日"

];

let html = "";

for(let i=0;i<7;i++){

const menu =
menus[
Math.floor(
Math.random() *
menus.length
)
];

html +=
`${days[i]}
：${menu}<br>`;

}

document
.getElementById(
"weekResult"
)
.innerHTML =
html;

}

function shoppingList(){

alert("買い物リスト動いた！");

let ingredients =
document.getElementById(
"ingredients"
).value;

alert(ingredients);

let list = [];

if(!ingredients.includes("玉ねぎ")){
list.push("玉ねぎ");
}

if(!ingredients.includes("にんじん")){
list.push("にんじん");
}

if(!ingredients.includes("じゃがいも")){
list.push("じゃがいも");
}

if(!ingredients.includes("卵")){
list.push("卵");
}

let html = "";

if(list.length === 0){

html =
"✨買い足し不要です";

}else{

html =
"🛒おすすめ買い物リスト<br><br>";

for(let i=0;i<list.length;i++){

html +=
"・" +
list[i] +
"<br>";

}

}

document.getElementById(
"shoppingResult"
).innerHTML =
html;

}
const foods = [

"鶏肉",
"豚肉",
"卵",
"玉ねぎ",
"にんじん",
"じゃがいも",
"ブロッコリー",
"キャベツ",
"ピーマン",
"ナス",
"もやし",
"豆腐",
"ベーコン",
"ツナ",
"チーズ",
"ほうれん草",
"ウインナー"

];

let ingredientsBox = document.getElementById("ingredients");

if(ingredientsBox){

ingredientsBox.addEventListener(
"input",
function(){

let text = this.value;

let html = "";

for(let i=0;i<foods.length;i++){

if(
foods[i].includes(text)
&&
text !== ""
){

html +=
`<div onclick="addFood('${foods[i]}')">
${foods[i]}
</div>`;

}

}

document
.getElementById("suggestions")
.innerHTML = html;

});

}

function addFood(food){

let box =
document.getElementById(
"ingredients"
);

if(box.value === ""){

box.value = food;

}else{

box.value +=
" " + food;

}

document.getElementById(
"suggestions"
).innerHTML = "";

}

function showPopularRecipes(){

const recipes = [

{
name:"🍛 カレー",
text:"みんなに人気の定番レシピ",
image:"images/curry.jpg",
category:"主菜"
},

{
name:"🍳 オムライス",
text:"子供から大人まで大人気",
image:"images/omurice.jpg",
category:"ごはん"
},

{
name:"🍚 親子丼",
text:"ふわとろ卵が絶品",
image:"images/oyakodon.jpg",
category:"ごはん"
},

{
name:"🥩 牛丼",
text:"甘辛だれでご飯が進む",
image:"images/gyudon.jpg",
category:"ごはん"
},

{
name:"🥩 豚キムチ",
text:"ガッツリ食べたい日におすすめ",
image:"images/butakimchi.jpg",
category:"主菜"
},

{
name:"🍖 生姜焼き",
text:"ご飯が進む定番おかず",
image:"images/syougayaki.jpg",
category:"主菜"
},

{
name:"🥔 肉じゃが",
text:"家庭料理の王道",
image:"images/nikujaga.jpg",
category:"主菜"
},

{
name:"🍗 ヤンニョムチキン",
text:"甘辛ダレがやみつき",
image:"images/yangnyeom.jpg",
category:"主菜"
},

{
name:"🍜 肉うどん",
text:"簡単で満足感たっぷり",
image:"images/nikuudon.jpg",
category:"麺"
},

{
name:"🍝 ナポリタン",
text:"喫茶店風の懐かしい味",
image:"images/napolitan.jpg",
category:"麺"
},

{
name:"🍗 チキン南蛮",
text:"タルタルが最高",
image:"images/chickennanban.jpg",
category:"主菜"
},

{
name:"🥚 オムレツ",
text:"朝ごはんにもぴったり",
image:"images/omelette.jpg",
category:"お弁当"
},

{
name:"🥗 サラダチキン",
text:"ヘルシーで高タンパクな人気料理",
image:"images/saladchicken.jpg",
category:"副菜"
},

{
name:"🌮 タコライス",
text:"野菜もお肉も楽しめる",
image:"images/tacorice.jpg",
category:"ごはん"
},

{
name:"🥩 チーズつくね",
text:"お弁当に大人気",
image:"images/cheesetsukune.jpg",
category:"お弁当"
},

{
name:"🫑 無限ピーマン",
text:"レンジで簡単副菜",
image:"images/mugenpiman.jpg",
category:"副菜"
},

{
name:"🥕 にんじんしりしり",
text:"栄養たっぷり沖縄料理",
image:"images/ninjinshirishiri.jpg",
category:"副菜"
},

{
name:"🥗 豆腐ハンバーグ",
text:"ヘルシー高たんぱく",
image:"images/toufuhamburg.jpg",
category:"主菜"
},

{
name:"🍲 鶏むねスープ",
text:"体に優しいあったかスープ",
image:"images/torimunesoup.jpg",
category:"スープ"
},

{
name:"🥦 鶏肉とブロッコリー",
text:"ダイエット中にもおすすめ",
image:"images/chickenbroccoli.jpg",
category:"副菜"
},

{
name:"🍛 豚丼",
text:"甘辛味でご飯が進む",
image:"images/butadon.jpg",
category:"ごはん"
},

{
name:"🥓 ベーコンエッグ",
text:"朝食の定番メニュー",
image:"images/baconegg.jpg",
category:"朝ごはん"
},

{
name:"🍳 ほうれん草オムレツ",
text:"野菜も取れるふわふわ卵料理",
image:"images/hourensouomelette.jpg",
category:"お弁当"
},

{
name:"🥚 卵焼き",
text:"お弁当の定番おかず",
image:"images/tamagoyaki.jpg",
category:"お弁当"
},

{
name:"🍲 麻婆豆腐",
text:"ピリ辛でご飯が進む中華料理",
image:"images/mapotofu.jpg",
category:"主菜"
},

{
name:"🥢 冷奴",
text:"すぐ作れる簡単おかず",
image:"images/hiyayakko.jpg",
category:"副菜"
}

];

let html = "";

let shuffled =
recipes.sort(
()=>Math.random()-0.5
);

for(let i=0;i<5;i++){

html += `
<div class="recommend-card"
onclick="openRecipe('${shuffled[i].name}')">

<img
src="${shuffled[i].image}"
class="recipe-image">

<h3>${shuffled[i].name}</h3>

<p>${shuffled[i].text}</p>

</div>
`;

}

document.getElementById(
"popularRecipes"
).innerHTML = html;

}

// showPopularRecipes();


function addFavorite(recipe){

let index = favorites.indexOf(recipe);


if(index === -1){

    favorites.push(recipe);

    alert("❤️お気に入りに追加したよ！");


}else{

    favorites.splice(index,1);

    alert("💔お気に入りから削除したよ！");
}


// 保存
localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);


// お気に入り一覧更新
showFavorites();


// ハート表示更新
let btn = document.querySelector(
    `.favorite-btn[data-recipe="${recipe}"]`
);

if(btn){
    btn.classList.toggle(
        "active",
        favorites.includes(recipe)
    );
}


// Moguおすすめ更新
if(document.getElementById("moguResult")){
    recommendMenu();
}

}

function showFavorites(){

let html = "";

for(let i=0;i<favorites.length;i++){

let info = recipes[favorites[i]];

html +=
"<div class='card' onclick=\"openRecipe('" +
favorites[i] +
"')\">" +

"<img src='" +
info.image +
"' class='recipe-image'>" +

"<h3>" +
favorites[i] +
"</h3>" +

"<p>" +
(info.category || "") +
"</p>" +

"<p>🔥 " +
info.kcal +
"kcal</p>" +

"<p>⏰ " +
info.time +
"分</p>" +

"</div>";

}

document.getElementById(
"favorite-title"
).innerHTML =
"❤️ お気に入り (" +
favorites.length +
"件)";

document.getElementById("favorites").innerHTML = html;

}

function searchRecipe(name){

    openRecipe(name);

}


function showRecommend(){

let html = "";

let recommendList = Object.keys(recipes);


// ランダムに並び替え
recommendList.sort(() => Math.random() - 0.5);


// 6個だけ表示
recommendList = recommendList.slice(0,6);


for(let i=0;i<recommendList.length;i++){

let name = recommendList[i];

let info = recipes[name];

html += `

<div class="recommend-card" onclick="openRecipe('${name}')">

<img src="${info.image}" class="recommend-image">


<div class="recommend-body">

<h3>${name}</h3>

<p>${info.text || "おすすめレシピ"}</p>

<div class="recommend-info">

<span>🔥 ${info.kcal}kcal</span>

<span>⏰ ${info.time}分</span>

</div>

</div>

</div>

`;

}


let box = document.getElementById("recommend");

if (box) {
    box.innerHTML = html;
    return;
}

}

function filterCategory(category){


let html = "";

for(let name in recipes){

let info = recipes[name];

if(category === "全部" || info.category === category){

html += `

<div class="recipe-card" onclick="openRecipe('${name}')">

<img src="${info.image}" class="recipe-image">

<div class="recipe-info">

<h3 onclick="openRecipe('${name}')">
${name}
</h3>

<p>${info.text || ""}</p>

<div class="recipe-meta">
⏰ ${info.time}分　🔥 ${info.kcal}kcal
</div>

</div>

</div>

`;

}

}

document.getElementById("result").innerHTML = html;

}

function searchRecipes(){

let word = document.getElementById("searchBox").value;

word = word
.replace(/[ぁ-ん]/g, function(s){
return String.fromCharCode(s.charCodeAt(0) + 0x60);
})
.toLowerCase();
let html = "";

for(let name in recipes){

let info = recipes[name];

let matchName = name
.replace(/[ぁ-ん]/g, function(s){
return String.fromCharCode(s.charCodeAt(0) + 0x60);
})
.toLowerCase()
.includes(word);

let matchIngredient = false;

let matchCategory = false;


if(info.category){

if(info.category.includes(word)){

matchCategory = true;

}

}

if(info.ingredients){

for(let i=0;i<info.ingredients.length;i++){

let ingredient =
typeof info.ingredients[i] === "string"
?
info.ingredients[i]
:
info.ingredients[i].name;


ingredient = ingredient
.replace(/[ぁ-ん]/g, function(s){
return String.fromCharCode(s.charCodeAt(0) + 0x60);
})
.toLowerCase();


if(ingredient.includes(word)){

matchIngredient = true;

}

}

}


if(matchName || matchIngredient || matchCategory){

html += `
<div class="recipe-card"
onclick="openRecipe('${name}')">

<img 
src="${info.image}" 
class="recipe-image"
>

<h3>${name}</h3>

<p>🔥 ${info.kcal}kcal</p>
<p>⏰ ${info.time}分</p>

</div>
`;

}

}

document.getElementById("searchResult").innerHTML = html;

}

function changeServings(name){

let people =
Number(document.getElementById("personCount").value);

let info = recipes[name];

let base = info.servings;

let ratio = people / base;

// ここに前に作った人数変更処理

}

function randomRecipe(){

let names = Object.keys(recipes);

let random =
Math.floor(Math.random() * names.length);

let recipe = names[random];

let info = recipes[recipe];

document.getElementById("randomResult").innerHTML = `

<div class="recipe-card"
onclick="openRecipe('${recipe}')">

<img
src="${info.image}"
class="recipe-image"
>

<h3>${recipe}</h3>

<p>🔥 ${info.kcal} kcal</p>

<p>⏰ ${info.time} 分</p>

<p>💪 ${info.protein} g</p>

</div>

`;

}

function showCategory(category){

let result = "";

for(let key in recipes){

if(recipes[key].category == category){

result += `
<div class="recipe-card" onclick="openRecipe('${key}')">
<h3>${recipes[key].name}</h3>
<p>${recipes[key].text}</p>
</div>
`;

}

}

document.getElementById("recipeList").innerHTML = result;

}

function saveMemo(){

let memo = document.getElementById("shoppingMemo").value;

localStorage.setItem("shoppingMemo",memo);

alert("買い物メモを保存しました😊");

}


window.onload=function(){

let memo = localStorage.getItem("shoppingMemo");

if(memo){

document.getElementById("shoppingMemo").value=memo;

}

if (document.getElementById("recommend")) {
    showRecommend();
}

if (document.getElementById("favorites")) {
    showFavorites();
}

}

function scrollHome(){

    document.getElementById("home")
    .scrollIntoView({
        behavior:"smooth"
    });

}


function goSearch(){

    document.getElementById("search")
    .scrollIntoView({
        behavior:"smooth"
    });

}


function goFavorite(){

    document.getElementById("favorite-title")
    .scrollIntoView({
        behavior:"smooth"
    });

}

function todaySetMenu(){

const sets = [

{
main:"🍛カレー",
side:"🥗サラダチキン",
soup:"🍲鶏むねスープ"
},

{
main:"🍖生姜焼き",
side:"🫑無限ピーマン",
soup:"🍲鶏むねスープ"
},

{
main:"🥩豚キムチ",
side:"🥢冷奴",
soup:"🍲鶏むねスープ"
},

{
main:"🍚親子丼",
side:"🥕にんじんしりしり",
soup:"🍲鶏むねスープ"
},

{
main:"🥩牛丼",
side:"🥢冷奴",
soup:"🍲鶏むねスープ"
},

{
main:"🍗チキン南蛮",
side:"🥦鶏肉とブロッコリー",
soup:"🍲鶏むねスープ"
}

];

let set =
sets[
Math.floor(
Math.random() *
sets.length
)
];

let mainInfo =
recipes[set.main];

let sideInfo =
recipes[set.side];

let soupInfo =
recipes[set.soup];

let totalKcal =
mainInfo.kcal +
sideInfo.kcal +
soupInfo.kcal;

let totalTime =
mainInfo.time +
sideInfo.time +
soupInfo.time;

document.getElementById(
"todaySetResult"
).innerHTML = `

<div class="recipe-card">

<h3>🍽 今日のおすすめ献立</h3>

<p>🍖 主菜：${set.main}</p>

<p>🥗 副菜：${set.side}</p>

<p>🍲 スープ：${set.soup}</p>

<hr>

<p>
🔥 合計カロリー：
${totalKcal} kcal
</p>

<p>
⏰ 合計時間：
約 ${totalTime} 分
</p>

<br>

<button onclick="openRecipe('${set.main}')">
主菜のレシピを見る
</button>

</div>

`;

}

function moodMenu(type){

let list = [];

if(type === "ガッツリ"){

list = [
"🍗チキン南蛮",
"🥩豚キムチ",
"🥩牛丼",
"🍛カレー"
];

}

if(type === "節約"){

list = [
"🥚卵焼き",
"🍳オムレツ",
"🥢冷奴",
"🥕にんじんしりしり"
];

}

if(type === "ヘルシー"){

list = [
"🥗サラダチキン",
"🥦鶏肉とブロッコリー",
"🥗豆腐ハンバーグ",
"🍲鶏むねスープ"
];

}

if(type === "時短"){

list = [
"🫑無限ピーマン",
"🥢冷奴",
"🥓ベーコンエッグ",
"🥚卵焼き"
];

}

let recipe =
list[
Math.floor(
Math.random()*list.length
)
];

let info = recipes[recipe];

if(!info){
    console.log("レシピが見つかりません:", recipe);
    return;
}

document.getElementById(
"moodResult"
).innerHTML = `

<div class="recipe-card"
onclick="openRecipe('${recipe}')">

<h3>${type}におすすめ✨</h3>

<img
src="${info.image}"
class="recipe-image"
>

<h3>${recipe}</h3>

<p>
🔥 ${info.kcal}kcal
</p>

<p>
⏰ ${info.time}分
</p>

</div>

`;

}


let timer;
let timeLeft = 0;

let timerMinutesValue = 10;


function changeTimer(value){

    timerMinutesValue += value;


    // 1分以下にはしない
    if(timerMinutesValue < 1){
        timerMinutesValue = 1;
    }


    // 99分以上にしない
    if(timerMinutesValue > 99){
        timerMinutesValue = 99;
    }


    document.getElementById("timerMinutes").innerText =
    timerMinutesValue;


    document.getElementById("timerDisplay").innerText =
    String(timerMinutesValue).padStart(2,"0") + ":00";

}

function startTimer(){

    let minutes = Number(
        document.getElementById("timerMinutes").innerText
    );

    timeLeft = minutes * 60;


    clearInterval(timer);


    timer = setInterval(function(){

        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;


        document.getElementById("timerDisplay").innerHTML =
        min + ":" + (sec < 10 ? "0" + sec : sec);


        if(timeLeft <= 0){

            clearInterval(timer);

            document.getElementById("finishPopup").style.display = "flex";

        }


        timeLeft--;

    },1000);

}


function stopTimer(){

    clearInterval(timer);

}



function resetTimer(){

    clearInterval(timer);


    let minutes = document.getElementById("timerMinutes").innerText;


    timeLeft = minutes * 60;


    document.getElementById("timerDisplay").innerHTML =
    minutes + ":00";

}

function goTimer(){

    document.querySelector(".timer-box").scrollIntoView({
        behavior:"smooth"
    });

}

function closePopup(){

    document.getElementById("finishPopup").style.display = "none";

}

function openRecipe(name){

location.href =
"recipe.html?name=" + encodeURIComponent(name);

}



function recommendMenu(){

let keys = Object.keys(recipes);

if(dietMode === "diet"){
    keys = keys.filter(name => recipes[name].diet === true);
}

// ランダムで3品選ぶ
let result = [];

while(result.length < 3 && result.length < keys.length){

let random =
keys[Math.floor(Math.random()*keys.length)];

if(!result.includes(random)){
result.push(random);
}

}


let html = `
<h3>🐻 Moguの今日のおすすめ</h3>
`;

result.forEach(function(name){

let recipe = recipes[name];

html += `


<img 
src="${recipe.image}" 
class="recommend-image"
>

<h3>${name}</h3>

<div class="category-tag">
🍽 ${recipe.category}
</div>
<div class="mini-info">

<span>
⏰ ${recipe.time}分
</span>

<span>
🔥 ${recipe.kcal}kcal
</span>

</div>


<div class="recommend-actions">

<button
class="favorite-btn ${favorites.includes(name) ? "active" : ""}"
onclick="addFavorite('${name}')">

<span class="favorite-heart">
${favorites.includes(name) ? "♥" : "♡"}
</span>

お気に入り

</button>

<button onclick="openRecipe('${name}')">
👩‍🍳 レシピを見る
</button>

</div>


</div>
`;

});


let box = document.getElementById("moguResult");

if(box){
    box.innerHTML = html;
}

}

function changeDietMode(mode){

    dietMode = mode;

    document.getElementById("normalBtn").classList.remove("active");
    document.getElementById("dietBtn").classList.remove("active");

    if(mode === "normal"){

        document.getElementById("normalBtn").classList.add("active");

    }else{

        document.getElementById("dietBtn").classList.add("active");

    }

    if (document.getElementById("moguResult")) {
    recommendMenu();
}

}
