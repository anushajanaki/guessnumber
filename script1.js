//to store a random num it generates 0.1 to 0.9
var random=Math.floor(Math.random()*100)+1;
//store num of attempts
var attempts =0;
document.getElementById('btn').addEventListener('click',function(){
attempts++;
//store user input
var guess=parseInt(document.getElementById("guessinput").value)
if(guess===random){
    display("congratulations "+attempts);
    document.getElementById('btn').disabled=true;
}
else if(guess<random)
{
    display("Too low,try again")
}
else if(guess>random)
{
    display("Too high,try again")
}
});
function display(message){
    document.getElementById("msg").textContent=message;
}