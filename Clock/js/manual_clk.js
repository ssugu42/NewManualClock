
var canvas = document.getElementById('manual');
var context = canvas.getContext("2d");
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var canvasOffset = $("#manual").offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var elem = { x: 0, y: 0, x1: 180, y1: 0 };
var dragok = false;
context.translate(200, 200);

// var img = new Image();
// img.src = "assets/images/hand.png";
// img.onload = function () {
//    var i_w = img.width / 2;
//    var i_h = img.height / 2;
//     draw();
// }

draw(context);
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;

function draw(context, evt) {
    init_line(context, elem);
}

function init_line(context, elem){
    context.beginPath();
    context.rect(0,0,10,180);
    context.fill();
    context.closePath();
}


function mouseDown(evt) {
    mouseX = parseInt(evt.clientX - offsetX);
    mouseY = parseInt(evt.clientY - offsetY);
    console.log(mouseX + ',' + mouseY);
    init_line(context, elem);
    dragok = context.isPointInPath(mouseX, mouseY);
    if (dragok = true) {
        canvas.onmousemove = myMove;
        console.log("Gets in inside of line");
    }
}

function myMove(evt){
    if (dragok) {
        console.log("Moving");
        mouseX = parseInt(evt.clientX - offsetX);
        mouseY = parseInt(evt.clientY - offsetY);
        // var cent_x = mouseX - centerX;
        // var cent_y = mouseY - centerY;
        var angle = Math.atan2(evt.mouseY, evt.mouseX);
         angle = angle * (180/Math.PI);
        // var angle = Math.atan2(cent_y, cent_x);
        r = angle.toFixed(7);
        draw_hand(r);
    }
}

function draw_hand(r){
    clear_rect();
    drawRect(r);
}
function clear_rect(){
    context.translate(-200,-200);
    context.beginPath();
    context.clearRect(0,0,canvas.width,canvas.height);
    context.closePath();
    context.translate(200,200);
}

function drawRect(r){
    context.save();
    context.rotate(r);
    console.log("Rotate Degree :"+r);
    context.rect(0,0,180,10);
    context.fill();
}

function mouseUp() {
    dragok = false;
    console.log("Mouse Relesed");
}



// function myDown(canvas,mousePos,evt){
//     console.log("clicked");
//     var mousePos = getMousePos(canvas, evt);
//     console.log("mouse at"+mousePos.mouse_x,mousePos.mouse_y);
// }


// var canvas;
// var ctx;
// var x = 75;
// var y = 50;
// var WIDTH = 400;
// var HEIGHT = 300;
// var dragok = false;

// function rect(x, y, w, h){
//     var element={x:0,y:0,x1:200,y1:0};
//     ctx.beginPath();
//     ctx.lineWidth = 10;
//     ctx.moveTo(element.x,element.y);
//     ctx.lineTo(element.x1,element.y1);
//     ctx.stroke();
//     ctx.closePath();
// }

// function clear(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function init(){
//     canvas = document.getElementById("manual");
//     ctx = canvas.getContext("2d");
//     ctx.translate(250,250);
//     return setInterval(draw, 10);
// }

// function draw(){
//     clear();
//     ctx.fillStyle = "white";
//     rect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "#444444";
//     rect(0,0, 250, 10);
// }

// function myDown(e){
//     console.log("Mouse Down Works");
//     if (e.pageX < x + 450 + canvas.offsetLeft && e.pageX > 250 +
//         canvas.offsetLeft && e.pageY < y + 260 + canvas.offsetTop &&
//         e.pageY > 250 + canvas.offsetTop){
//             console.log("Mouse Within the Element");
//             x = e.pageX - canvas.offsetLeft;
//             y = e.pageY - canvas.offsetTop;
//             dragok = true;
//             // canvas.onmousemove = myMove;
//     }
// }

// // function myUp() {
// //     console.log("Mouse Released");
// //     dragok = false;
// //     canvas.onmousemove = null;
// // }

// // function  myMove(e) {
// //     if (dragok) {

// //         var angle = Math.atan2(e.mouseY, e.mouseX);

// //         angle = angle * (180/Math.PI);

// //         // The following if statement is optional and converts our angle from being

// //         // -180 to +180 degrees to 0-360 degrees.  It is completely optional

// //         if(angle < 0)
// //         {
// //             angle = 360 - (-angle);
// //         }
// //         // Atan2 results have 0 degrees point down the positive X axis, while our image is pointed up.

// //         // Therefore we simply add 90 degrees to the rotation to orient our image

// //         // If 0 degrees is to the right on your image, you do not need to add 90

// //         ctx.rotate(angle);
// //         console.log("moving");
// //     }
// // }

// init();
// canvas.onmousedown = myDown;
// // canvas.onmouseup = myUp;