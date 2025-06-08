const rollBtn = document.getElementById("rollBtn");
const diceFace = document.getElementById("diceFace");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollBtn.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * 6);
    const face = diceFaces[randomIndex];
    diceFace.textContent = face;
});