// const allBtn = document.getElementsByClassName("tckt-btn");
// let count = 0;
// let seatCount = 8;

// function disableButtons() {
//     for (const btn of allBtn) {
//         btn.disabled = true;
//     }
// }

// for (const btn of allBtn) {
//     btn.addEventListener("click", function(e) {
//         count += 1;
//         seatCount -= 1;

//         document.getElementById("seat-left").innerText = seatCount;
//         document.getElementById("tckt-count").innerText = count;

//         if (count >= 4 || seatCount <= 0) {
//             alert('You have reached your limit.');
//             disableButtons();
//         }
//     });
// }












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
            document.getElementById("tckt-count").innerText = count;
        }
        else{
            alert('you reach your level')
        }
        
// appendchild part

        const seatNumber = btn.textContent;

        // Example data for class and price
        const ticketClass = "Economy"; // Example class
        const ticketPrice = 550; // Example price

        // Create a new table row element
        const newRow = document.createElement("tr");

        // Create and append table data for seat number, class, and price
        const seatData = document.createElement("td");
        seatData.innerText = seatNumber;

        const classData = document.createElement("td");
        classData.innerText = ticketClass;

        const priceData = document.createElement("td");
        priceData.innerText = ticketPrice;

        newRow.appendChild(seatData);
        newRow.appendChild(classData);
        newRow.appendChild(priceData);

        // // Append the new row to the table
        const table = document.getElementById("output-id");
        table.appendChild(newRow);
        table.style.marginLeft = "20px"
    })
    
    
}

function disableButtons() {
        for (const btn of selectedButton) {
            btn.disabled = true;
        }
    }
    



// for green button
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
            disableButtons()
        }
        
        

    }

}





  ///////////

// Select all ticket buttons
// Select all ticket buttons
// const allBtns = document.querySelectorAll(".tckt-btn");

// for (const btn of allBtns) {
//     btn.addEventListener("click", function(e) {
//         // Get seat number from the button text
        

//     });
// }

