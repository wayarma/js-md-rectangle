
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "collazrvt.png"; // hohoho

let count = 0;

// proverka, chto moi super-puper background zagruzilsya ezhi.
backgroundImage.onload = () => {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    
};

// tut ja zamutil funkciju, chtobi ne pisatj postojanno math.floor(math.random) i vsyakuju #!@$% dalshe.
function RandInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function drawRectangles() {
    count++;

    // Tut ja takoi, ho-ho-ho, i delaju parametri randomnimi, chtobi vso bilo chotko i kazdij rectangle otlichalsa!
    let red = RandInteger(0, 255);
    let green = RandInteger(0, 255);
    let blue = RandInteger(0, 255);

    let x = RandInteger(0, 425);
    let y = RandInteger(0, 310);

    let width = RandInteger(100, 200);
    let height = RandInteger(50, 100);

    // A tut on primenyaet eti parametri i risuet rectangle.
    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.8)`;
    ctx.fillRect(x, y, width, height);

    document.getElementById("count").innerHTML = count;

}
