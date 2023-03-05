/** @type {HTMLCanvasElement} */
let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

document.body.appendChild(canvas);

function onResize() {
    canvas.width = window.innerHeight;
    canvas.height = window.innerHeight;
}

onResize();
document.onresize = onResize;