console.log("Hello World")

function getComputerChoice(){

    let num = Math.random()
    let hand = ""

    if (num<(1/3)) {
        hand="Rock";

    } else if (num>=(1/3) && num<(2/3)) {
        hand="Paper";

    } else {
        hand="Scissors";
    }
    console.log(num)

return hand;

}
console.log(getComputerChoice())
