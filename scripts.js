let randomNum = null;
let userInput = null;
let counter = 0;

function OnLoad(){
    randomNum = Math.floor(Math.random() * 100);
    console.log(randomNum);
}

function CheckAnswer(){
    userInput = document.getElementById('mainInput').value;
    counter++;
    document.getElementById("tryCount").textContent=`Число попыток: ${counter}`;
    if(userInput == randomNum){
        document.getElementById("hint").textContent="Подсказка: В точку";
        document.getElementById("result").textContent="Результат: Вы выиграли";
    }
    else if(userInput <= randomNum){
        document.getElementById("hint").textContent="Подсказка: больше";
        document.getElementById("result").textContent="Результат: Попробуйте еще раз";
    }
    else if(userInput >= randomNum){
        document.getElementById("hint").textContent="Подсказка: меньше";
        document.getElementById("result").textContent="Результат: Попробуйте еще раз";
    }
    else{
        document.getElementById("hint").textContent="Подсказка: Вы ввели не число!";
        document.getElementById("result").textContent="Результат: Попробуйте еще раз";
    }
    console.log(userInput);
    document.getElementById('mainInput').value = '';
}
