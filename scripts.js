let randomNum = null;
let userInput = null;
let counter = 0;
let entered_numbers;

function OnLoad(){
    randomNum = Math.floor(Math.random() * 100);
}

function CheckAnswer(){
    userInput = document.getElementById('mainInput').value;
    entered_numbers = document.getElementById('entered_numbers')
    counter++;
    entered_numbers.innerHTML += ` ${userInput},`;
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
    document.getElementById('mainInput').value = '';
}
