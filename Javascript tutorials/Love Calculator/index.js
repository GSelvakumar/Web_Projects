prompt("What is your name? ");
prompt("What is their name? ");

var loveScore = Math.random() * 100; //random from 0 to 1 
loveScore = Math.floor(loveScore) + 1 //adding 1 to eliminate the 0

if (loveScore > 70) {
    alert("Your love score is "+loveScore+" % "+ "You love each other like Kanye loves Kanye.");
}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is: "+loveScore+"%");
}

if (loveScore <= 30) {
    alert("Your love score is "+loveScore+"%"+"You go together like oil and water.");
}
