/*var a, b, c, d, e, f, g, h;
a=prompt();
b=prompt();
c==prompt();
d=prompt("Heedex ail");
e=c*b;
f=d/e;
g=f*e;
h=d-g;
alert(f + )*/
var b=2
var c=1
var randomNumber = Math.floor(Math.random()*10)+1;
var my_number;
for(var i=1; i<=3;){
    my_number = prompt("Place a number between 1 to 10")
        if(my_number==randomNumber){
            alert("You win");
            alert("How many tries taken " + c)
            break;
        }else if(my_number=="" || my_number>=10){
            alert("Wrong intreger or wrong input")
        }else{
            alert("Wrong answer try again, Tries left: " + b)
            i++;
            b--;
            c++;
        }
        if(my_number<randomNumber){
            alert("Number too low, Guess higher")
        }else{
            alert("Number too high, Guess lower")
            alert(randomNumber)
        }
    if(i==3){
        alert("Game over");
        alert("The winning number: " + randomNumber);
    }
}



