let player={
    name:"per",
    chips:200
}

let cards=[]

let hasBlackJack = false
let isAlive = false
let sum=0
let msg=""
let msgEl=document.getElementById("msgEl")
let sumEl=document.getElementById("sumEl")
let cardEl=document.getElementById("cardEl")
let playerEl=document.getElementById("playerEl")

playerEl.textContent = player.name+" : $"+player.chips

function getRandomCard()
{
    let randomNum= Math.floor(Math.random()*13)+1
    if(randomNum>10)
    {
        return 10
    }
    else if(randomNum ===1)
    {
        return 11
    }
    else{
        return randomNum
    }
}

function startGame()
{
    isAlive= true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard+secondCard
    renderGame()
}

function renderGame()
{
    cardEl.textContent="Cards:"
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent += cards[i]+" "
    }
    sumEl.textContent= "Sum: "+sum
    if(sum<=20)
    {
        msg="Do you want to draw a new card?"
    }
    else if(sum===21)
    {
        msg="you've got blackjack"
        hasBlackJack=true
    }
    else
    {
        msg="you're out of the game!"
        isAlive=false
    }
    msgEl.textContent=msg
    
}

function newCard()
{
    if( isAlive===true && hasBlackJack===false)
    {
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
}