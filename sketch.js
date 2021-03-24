var ball;
var position,database;


function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(150,150,10,10);
    ball.shapeColor = "red";
    var b1=database.ref("ball/position")
    b1.on("value",readOp,showerr);
}

function draw(){
    background("white");
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
    x : position.x + x,
    y : position.y + y
})
}

function readOp(data){
    position=data.val()
    ball.x=position.x;
    ball.y=position.y;

}

function showerr(){
    console.log("synchronos Ball");
}
