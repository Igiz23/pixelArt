const chooseColor = document.getElementById("choose");
const reLoad = document.getElementById("reload");
let mouseFlag = 0;
let colorChoose = "yellow";

drawPixel();
chooseColor.onclick = checkColor;
reLoad.onclick = reloadPage;

function checkColor() {
    colorChoose = document.getElementById("value").value;
}

function drawPixel() {
    let board = document.getElementById("board");
    for (let i = 0; i < 3010; i++) {
        let pixelPoint = document.createElement("div");
        pixelPoint.className += "pixel";
        pixelPoint.addEventListener("mouseenter", () => {
            if (mouseFlag === 1)
            {
                pixelPoint.style.backgroundColor = colorChoose;
                pixelPoint.style.borderColor = colorChoose;
            }
        })
        pixelPoint.addEventListener("click", () => {
            pixelPoint.style.backgroundColor = colorChoose;
            pixelPoint.style.borderColor = colorChoose;
        })
        board.appendChild(pixelPoint);
    }
}

function reloadPage() {
    document.location.reload();
}

document.addEventListener("mousedown", function(e) {
    mouseFlag = 1;
    e.stopPropagation();
})

document.addEventListener("mouseup", function(e) {
    mouseFlag = 0;
    e.stopPropagation();
})
