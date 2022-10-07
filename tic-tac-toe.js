window.addEventListener("load", (event)=> {
    
    const winnerCheck = [[0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];

    let xWinnerVal = 0;
    let oWinnerVal = 0;
    let Xplayer = true;
    let Oplayer = false;
    let active;
    let squares  = document.querySelectorAll("#board > div")
    ;
    
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
            active = isWinner();

            if (active == 1){
               document.querySelector("div#status").classList.add("you-won");
               document.querySelector("div#status").innerHTML = `Congratulations! ${sq.innerHTML} is the Winner!`;

               squares.forEach((square)=>{
                   square.onclick = (event) => {
                       event.preventDefault();
                   }
               })

            }
            
        }
        

        sq.addEventListener('mouseover', function handleMouseOver() {
            sq.classList.add('hover');
          });
          
          
          sq.addEventListener('mouseout', function handleMouseOut() {
            sq.classList.remove('hover');
          });

          let isWinner =()=> {

            for (item = 0 ; winnerCheck.length; item++){

                winnerCheck[item].forEach(element => {
                    if (squares[element].classList.contains("X")){
                        xWinnerVal++;
                    }
                    else if (squares[element].classList.contains("O")){
                        oWinnerVal++;
                    }
                });
                if(xWinnerVal == 3 || oWinnerVal ==3 ){
                    return 1;
                }
                xWinnerVal = 0;
                oWinnerVal = 0;
               if (item < winnerCheck.length - 1){
                   continue;
               }
               return 0;

            }
         }
         
         });

    
   

});


