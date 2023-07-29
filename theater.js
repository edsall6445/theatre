const GEN_ADMISSION = 20;
const DISCOUNT_ADMISSION = 10;
const MATINEE_DISCOUNT = 3;



function buyTicket() {
    const age = prompt("What is your age?")

    let cost = getBaseTicketCost(age);
    
    const isMatinee = prompt("Are you attending a Matinee? ");

    isMatinee.toLowerCase();
   

    cost = applyMatineeDiscount(cost, isMatinee);

    
    alert("Your ticket will cost : $" + cost);


}

function getBaseTicketCost(age) {
    
    if (age <= 12 || age >= 65) {
        return DISCOUNT_ADMISSION;
    }
   
    return GEN_ADMISSION;

}

function applyMatineeDiscount(cost, isMatinee) {
    if((isMatinee === 'yes'|| isMatinee ==='y')) 
    {
        return cost - MATINEE_DISCOUNT;

    }

    return cost;
}




