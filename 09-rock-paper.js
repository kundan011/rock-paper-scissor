
function computerchoice() {
    const randomNumber = Math.random();
    console.log(randomNumber)
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'seizer';
    }

    return computerMove;
    // let result = ''; }
}
    const score = JSON.parse(localStorage.getItem('score'))



    function playGame(playermove) {

        const computerMove = computerchoice();
        let result = '';

        if (playermove === 'paper') {

            if (computerMove === 'paper') {
                result = 'tie';
            }
            else if (computerMove === 'rock') {
                result = 'win';
            }
            else if (computerMove === 'seizer') {
                result = 'loose';
            }

        } else
            if (playermove === 'rock') {

                if (computerMove === 'rock') {
                    result = 'tie';
                }
                else if (computerMove === 'seizer') {
                    result = 'win';
                }
                else if (computerMove === 'paper') {
                    result = 'loose';
                }

            } else

                if (playermove === 'seizer') {

                    if (computerMove === 'seizer') {
                        result = 'tie';
                    }
                    else if (computerMove === 'paper') {
                        result = 'win';
                    } else

                        if (computerMove === 'rock') {
                            result = 'loose';
                        }
                        

                }
        if (result === 'win') {
            score.win += 1;
        } else if (result === 'loose') {
            score.loose += 1;
        }
        else if (result === 'tie') {
            score.tie += 1;
        }
        updatescore();

    document.querySelector('.Result').
        innerHTML = `You ${result}`;

    document.querySelector('.players-move').
    innerHTML =`You <img src="image/${playermove}-emoji.png" class="move">
    <img src="image/${computerMove}-emoji.png" class="move">
    Computer`;

    localStorage.setItem('score', JSON.stringify(score))

    }
    function updatescore() {
        document.querySelector('.score-js')
.innerHTML = `win: ${score.win} loose: ${score.loose} tie: ${score.tie}`;
    }
    

    const rock = document.getElementById('Rock')
    rock.addEventListener('click', () => {
        playGame('rock')
    })

    const paper = document.getElementById('Paper')
    paper.addEventListener('click', () => {
        playGame('paper')

    })

    const seizer = document.getElementById('Seizer')
    seizer.addEventListener('click', () => {
        playGame('seizer')
    })

    updatescore()