
let totalPrice = 0;

const allBtn = document.getElementsByClassName("tckt-btn");
let count = 0;
let seatCount = 8;

for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
        count += 1;
        seatCount -= 1;
        if (count <= 4) {
            document.getElementById("seat-left").innerText = seatCount;
            document.getElementById("tckt-count").innerText = count;
            
                
        } else {
            alert('You have reached your limit of tickets.');
        }

        if(count >=5){
            table.appendChild(newRow);    
        }

        // for green Selected button
        btn.style.backgroundColor = 'green';
        
        // appenchild section
        const seatNumber = btn.textContent;
        const ticketClass = "Economy";
        const ticketPrice = 550;

        const newRow = document.createElement("tr");

        const seatData = document.createElement("td");
        seatData.innerText = seatNumber;

        const classData = document.createElement("td");
        classData.innerText = ticketClass;

        const priceData = document.createElement("td");
        priceData.innerText = ticketPrice;

        newRow.appendChild(seatData);
        newRow.appendChild(classData);
        newRow.appendChild(priceData);

        const table = document.getElementById("output-id");
        table.appendChild(newRow);
  

        // calculate cost
        const totalCostElement = document.getElementById("total-cost");
        const totalCost = parseInt(totalCostElement.innerText);
        totalPrice += ticketPrice;
        totalCostElement.innerText = totalPrice;
        document.getElementById("total-cost").innerText = totalPrice;



    });
}

// Apply button 
const Btn = document.getElementById("Apply-btn");
Btn.addEventListener("click", function () {
    const coupon = document.getElementById("input-field").value;
    // const couponCode = "NEW15";

    if (coupon === "NEW15") {
        const discountElement = document.getElementById("discount-price")
        const discountAmount = totalPrice * 0.15;  
        // console.log(discountAmount)
        discountElement.innerText = discountAmount.toFixed(2);

        //grand price discount1 calculation
        const finalPrice = document.getElementById("final-price")
        finalPrice.innerText = totalPrice - discountAmount;

    }else if(coupon === "Couple 20"){
        const discountElement = document.getElementById("discount-price")
        const discountAmount2 = totalPrice * 0.2;
        discountElement.innerText = discountAmount2.toFixed(2);

         // Grand price discount2 calculation
         const finalPrice = document.getElementById("final-price")
         finalPrice.innerText = totalPrice - discountAmount2;
    } 
     else {
        alert('Invalid Coupon code');
    }
});

