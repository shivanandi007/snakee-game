

$(document).ready(function(){

    
    var snake= $('#snake'); 
    snake.css({     //css function
        'position' : 'absolute',  // Which is static by default
        'left' : 500,
        'top': 200
    })

    var ismovingRight = false;
    var ismovingDown = false;
    var ismovingUp = false;
    var ismovingLeft = false;
    
    $(document).on("keydown", function(e){
        /*Cheaking keyCode */
        console.log(e.keyCode)
       
        var kn=e.keyCode;
         if(kn==39){
         ismovingRight=true;
         }
         else if(kn==40){
         ismovingDown=true;
         }
         else if(kn==37){
         ismovingLeft=true;
         }
         else if(kn==38){
         ismovingUp=true;
         }
        });

         $(document).on("keyup", function(e){
             console.log(e.keyCode)
             var kn=e.keyCode;
             if(kn==39){
             ismovingRight=false;
             
             }
              else if(kn==40){
             ismovingDown=false;
            }
            else if(kn==37){
                ismovingLeft=false;
            }
            else if(kn==38){
                ismovingUp=false;
            }
        });
        var speed = 5
    function move(){
        if(ismovingRight){
            snake.css('left', (snake.position().left + speed))
        }
        if(ismovingDown){
            snake.css('top', (snake.position().top + speed))
        }
        if(ismovingUp){
            snake.css('top', (snake.position().top  -speed))
        }
        if(ismovingLeft){
            snake.css('left', (snake.position().left - speed))
        }
    }      
    
    setInterval(move , 10)

});


            
         



