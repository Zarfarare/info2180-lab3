window.addEventListener("load", (event)=> {
    
    let Xplayer = true;
    let Oplayer = false;
    let squares  = document.querySelectorAll("#board > div");
    
    squares.forEach((sq)=> {
        sq.classList.add("square");
        sq.innerHTML = " ";
    
    });
    var Track =['', '','','','','','', '','']
    squares.forEach((sq)=>{
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
          
          // 👇️ Change text color back on mouseout
          sq.addEventListener('mouseout', function handleMouseOut() {
            sq.classList.remove('hover');
          });

    })
    
    

});


