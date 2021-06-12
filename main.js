
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
   car1_width=120;
   car1_height=90;
   car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";
   car1_x=10;
   car1_y=10;

   car2_width=120;
   car2_height=90;
   car2_image="https://i.postimg.cc/tnnW1Kff/car2.png";
   car2_x=10;
   car2_y=100;
   background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";
   function add(){
       background_imgtag=new Image();
       background_imgtag.onload=uploadbackground;
       background_imgtag.src=background_image;

       car1_imgtag=new Image();
       car1_imgtag.onload=uploadcar1;
      car1_imgtag.src=car1_image;

      car2_imgtag=new Image();
      car2_imgtag.onload=uploadcar2;
     car2_imgtag.src=car2_image;
   }
   function uploadbackground(){
       ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
   }

   function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode; 
    console.log(keyPressed);
    if(keyPressed=='38'){
        console.log("up arrow key");
        car1_up();
    }

    if(keyPressed=='40'){
        console.log("down arrow key");
        car1_down();
    }

    if(keyPressed=='37'){
        console.log("left arrow key");
        car1_left();
    }

    if(keyPressed=='39'){
        console.log("right arrow key");
        car1_right();
    }

    if(keyPressed=='87'){
        console.log("w key");
        car2_up();
    }

    if(keyPressed=='83'){
        console.log("s key");
        car2_down();
    }

    if(keyPressed=='65'){
        console.log("a key");
        car2_left();
    }

    if(keyPressed=='68'){
        console.log("d key");
        car2_right();
    }
    if(car1_x >700){
        console.log("car1");
        document.getElementById('game_status').innerHTML = "Car 1 Won!!";
    }

    else if(car2_x >700){
        console.log("car2");
        document.getElementById('game_status').innerHTML = "Car 2 Won!!";
    }
}

function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("when up arrow key is presed x="+car1_x+"y="+car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("when up arrow key is presed x="+car2_x+"y="+car2_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down arrow key is presed x="+car1_x+"y="+car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("when down arrow key is presed x="+car2_x+"y="+car2_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("when left arrow key is presed x="+car1_x+"y="+car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("when left arrow key is presed x="+car2_x+"y="+car2_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("when right arrow key is presed x="+car1_x+"y="+car1_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_right(){
    if(car2_x<=700){
        car2_x=car2_x+10;
        console.log("when right arrow key is presed x="+car2_x+"y="+car2_y);

        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}