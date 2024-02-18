
const allBtn=document.getElementsByClassName("tckt-btn");
// console.log(allBtn)
count = 0;
seatCount = 8
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count += 1;
        seatCount -= 1;
        if(count<=4){
          
        
        document.getElementById("seat-left").innerText = seatCount;
        }  
        if(count<=4){
            document.getElementById("tckt-count").innerText = count;
        }
        else{
            alert('you reach your level')
        }
    })
    
    
}

// seatCount = 8
// for(const btn of allBtn){
//     btn.addEventListener("click", function(e){
          
//     })  
    
    
    
// }




const selectedButton = document.querySelectorAll(".tckt-btn");
let totalClicks = 0;  
    
for (let i = 0 ; i<selectedButton.length ; i++){
        selectedButton[i].addEventListener('click', function(){
            this.style.backgroundColor ='green';
        });

        function buttonClickHandler(){
        if (totalClicks <=4){

            this.style.backgroundColor = 'green';
            totalClicks++;
        }
        if (count < 4 && seatCount > 0){
            this.removeEventListener("click");

        }
        

    }



}





  