// p1 = Player 1
// p2 = Player2


var p1WinCount = 0;
var p2WinCount = 0;
async function PlayGame() {
            if(p1WinCount >=3 || p2WinCount >=3) {
                p1WinCount = 0;
                p2WinCount = 0;
                document.getElementById('outcome').innerHTML = '';
                document.getElementById('won').innerHTML = '';
            }
            let p1Strength = 100;
            let p2Strength = 100;
            let currentPlayer = 0;

            while(p1Strength > 0 && p2Strength > 0) {
                let power =  RandomPow();
                console.log("power: ", power);
                if(currentPlayer === 0) {
                    p2Strength = p2Strength - power;
                    currentPlayer = 1;
                } else {
                    p1Strength = p1Strength - power;
                    currentPlayer = 0;
                }
                
                console.log("inside1", p1Strength);
                console.log("inside2", p2Strength);
                if(p1Strength <=0 || p2Strength <= 0) {
                    if(p2Strength <= 0) {
                        p1WinCount++;
                    } else {
                        p2WinCount++;
                    }
                    document.getElementById('outcome').innerHTML = '<div>Player 1 - Won: ' + p1WinCount + '</div>'+
                                                        '<div>Player 2 - Won: ' + p2WinCount + '</div>';
                    if(p1WinCount >=3) {
                        document.getElementById('won').innerHTML = "Player 1 Won";
                    } else if(p2WinCount >=3) {
                        document.getElementById('won').innerHTML = "Player 2 Won";
                    }
                }
            }        
        }
function RandomPow(){
                let x = Math.floor((Math.random() * 5) + 1);
                console.log(x);
                return x;
            
        }
