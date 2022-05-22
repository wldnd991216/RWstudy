var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var ctx = canvas.getContext("2d");


class player{
    constructor(pos_x,pos_y,radius,color) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        context.beginPath();
        context.arc(this.pos_x,this.pos_y,this.radius,this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();

    }

}

var char_player = new player(100,100,20,'blue');
char_player.draw();


(canvas).on("click", function (e) {
    if (game.getContext) {
        var l = $(this).offset().left;
        var t = $(this).offset().top;
        var x = e.pageX - l;
        var y = e.pageY - t;
        var w = 15;
        var h = 15;
    

        ctx.fillStyle = "black";
        ctx.fillRect(x, y, w, h);

        char_chong.draw();
    }
})