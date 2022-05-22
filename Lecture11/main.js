//const canvas = document.querySelector('canvas');
const mcanvas = document.getElementById('main_canvas');
const context = mcanvas.getContext('2d');


class Player{

}

class Projectile{

}

class Enemy{
    
}

var startAngle = 0;
var endAngle = 360;

var anticlockwise = true;
context.beginPath();

context.arc(100, 100, 20, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle, anticlockwise);
context.fillStyle='blue';
context.fill();

context.closePath();

