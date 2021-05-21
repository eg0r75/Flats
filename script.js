let backButton = document.getElementById("backButton");
let nextButton = document.getElementById("nextButton");
let slider = document.getElementById("slider");
console.log(slider);
let dist = 0;
let backPair = document.getElementById("backPair");
let nextPair = document.getElementById("nextPair");
let pairs = document.getElementsByClassName("pair");
let number = document.getElementsByClassName("headerPhone2")[0];
let flatCounter = 0;
let flats = document.getElementsByClassName("flats")[0];
let modal = document.getElementsByClassName("modal")[0];
let allFlats = document.getElementsByClassName("allFlats")[0];

let flatTypes = ["Квартира", "Котедж", "Апартаменты", "Вилла", "Шалаш", "Пентхаус", "Дома на колесах", "Загородный дом", "Изба"]
flatTypes = [
    [9000, "flat3 (2).jpg", "Квартира", "Москва", "Три спальных места", "Три гостя"],
    [8000, "flat3 (3).jpg", "Коттедж", "Уфа", "Два спальных места", "Два Гостя"],
    [10000, "Flat3 (1).jpg", "Вилла", "Набережные челны", "Четыре спальных места", "Четыре гостя"],
    [9000, "flat2 (2).jpg", "Апартаменты", "Санкт-Петербург", "Три спальных места", "Три гостя"],
    [8000, "flat3 (4).jpg", "Пентхаус", "Самара", "Два спальных места", "Два гостя"],
    [7000, "flat2 (3).jpg", "Изба", "Москва", "Одно спальное место", "Один гость"],
    [9000,"flat2 (4).jpg","Шалаш","Иркутск","Два спальных мешка","Два братишки"],
    [10000,"flat3 (5).jpg","Дом на дереве","Красноярск","Четыре спальных места","Четыре гостя"],
    [8000,"flat2 (5).jpg","Дом на колесах","Где то","Два спальных места","Два гостя"],
]
let modalButton = document.getElementsByClassName("modalButton")[0];
nextButton.onclick = function () {
    // dist = dist + window.innerWidth;
    // dist = dist % (window.innerWidth * slider.children.length)
    // console.log(7);
    // console.log(dist);
    // slider.scroll({
    //     top: 0,
    //     left: dist,
    //     behavior: "smooth"

    // });
    dist += 100;
    //Здесь проверяется остаток от деления текущей дистанции на 300. Если dist равен 100,200 то слайдер двигается в право ,но если он 300 то остаток от деления равен 0 и слайдер прокручивается до первого.
    dist = dist % (100 * slider.children.length);
    console.log(dist);
    slider.style.transform = "translateX(-" + dist + "%)";
}
backButton.onclick = function () {
    // dist = dist - window.innerWidth;
    // if (dist < 0) {
    //     dist = (window.innerWidth * (slider.children.length - 1))
    // } else {
    //     dist = dist;
    // }
    // slider.scroll({
    //     top: 0,
    //     left: dist,
    //     behavior: "smooth"
    // })
    dist -= 100;
    dist = dist < 0 ? 100 * (slider.children.length - 1) : dist;
    slider.style.transform = "translateX(-" + dist + "%)";
}
backPair.onclick = function () {
    let activePair = document.getElementsByClassName("activePair")[0];
    let prevActivePair;
    if (activePair.previousElementSibling) {
        prevActivePair = activePair.previousElementSibling;
    } else {
        prevActivePair = pairs[pairs.length - 1];
    }
    activePair.classList.remove("activePair");
    setTimeout(function () {
        prevActivePair.classList.add("activePair");
    }, 500);
}
nextPair.onclick = function () {
    let activePair = document.getElementsByClassName("activePair")[0];
    let nextActivePair;
    if (activePair.nextElementSibling.classList[0].includes("pair")) {
        nextActivePair = activePair.nextElementSibling;
    } else {
        nextActivePair = pairs[0];
    }
    activePair.classList.remove("activePair");

    setTimeout(function () {
        nextActivePair.classList.add("activePair");
    }, 500);
}
number.onclick = function (event) {
    event.preventDefault();
    // modal.style.display="block";
    modal.style.transform = "translateY(0) scale(1)";
}

modal.onclick = function () {
    // modal.style.display="none";
    modal.style.transform = "translateY(100%) scale(0)";
}

modal.children[0].onclick = function (event) {
    event.stopPropagation();
}
modalButton.onclick = function (event) {
    event.preventDefault();
    // modal.style.display="none"
    modal.style.transform = "translateY(100%) scale(0)";
}
allFlats.onclick = function () {
    // console.log(5);
    for (let i = 0; i < 3; i = i + 1) {
        console.log(i);
        // let div=document.createElement("div");
        // div.innerHTML=flatTypes[i+flatCounter];
        // div.classList.add("flat")
        // document.body.appendChild(div);
        // flats.insertBefore(div,allFlats);
        let a = document.createElement("a")
        let flat=`
        <div class="flat">
            <h3>${flatTypes[i+flatCounter][0]}р</h3>
            <img src="${flatTypes[i+flatCounter][1]}" alt="">

            <div class="flatOptions">
                <h4>${flatTypes[i+flatCounter][2]}</h4>
                <h5>${flatTypes[i+flatCounter][3]}</h5>
                <div>
                    <img src="bed.svg" alt="">
                    <h6>${flatTypes[i+flatCounter][4]}</h6>
                </div>
                <div>
                    <img src="user.svg" alt="">
                    <h6>${flatTypes[i+flatCounter][5]}</h6>
                </div>
            </div>

        </div>
        `;
        a.innerHTML=flat;
        flats.insertBefore(a,allFlats)
        console.log(flat);
    }
    flatCounter = flatCounter + 3
    if (flatCounter >= flatTypes.length) {
        allFlats.style.display = "none";
    }
}
