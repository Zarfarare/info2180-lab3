window.addEventListener("load", (event)=> {
    
    const winnerCheck = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];

    
    let Xplayer = true;
    let Oplayer = false;
  
    let squares  = document.querySelectorAll("#board > div");
    let reset =  document.querySelector(".btn");
    
    squares.forEach((sq)=> {
        sq.classList.add("square");
        sq.innerHTML = " ";
    
    });
    var Track =['', '','','','','','', '','']
    squares.forEach((sq, index)=>{
        sq.onclick= (event)=>{
            if(Xplayer && sq.innerHTML==" "){
                sq.classList.add("X");
                sq.innerHTML = 'X';
                Xplayer = false;
                Oplayer = true;
            }
            else if(Oplayer && sq.innerHTML==" "){
                sq.classList.add("O");
                sq.innerHTML = 'O';
                Xplayer = true;
                Oplayer = false;
            }
            
            
        }
        

        sq.addEventListener('mouseover', function handleMouseOver() {
            sq.classList.add('hover');
          });
          
          
          sq.addEventListener('mouseout', function handleMouseOut() {
            sq.classList.remove('hover');
          });

          
         
         });

         reset.addEventListener('click', restart);
    
         function restart(){
             window.location.reload();
         }
   

});
