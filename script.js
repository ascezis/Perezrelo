"use strict"
//Получаю значения:
let started_time = document.getElementById('fixed_time');
let user_current = document.getElementById('User_time');
let start = document.getElementById('Start');
let stop = document.getElementById('Stop');
let nulled = document.getElementById('nulled');
let cheel = document.getElementById('cheel');
let timer;

//Audio;
let voice_start = new Audio;
let voice_end = new Audio();
let voice_go = new Audio();


//

//Таймер:
function Timer() {
    timer = setTimeout(() => {
        //Беру ЗНАЧЕНИЕ этого элемента
        user_current.value--;
        if (user_current.value <= 0){
            user_current.value = '0';
            return;
        }
        //Рекурсивная функция (вызывает сама себя)
        else {
            Timer();
        }
    }, 60000);
}


//Добавляю обработчик начала события:
start.addEventListener('click', () => {
    Timer();
});

//Остановка
stop.addEventListener('click', () => {
    clearTimeout(timer);
})

//Сброс таймера:
nulled.addEventListener('click', () => {
    clearTimeout(timer);
    user_current.value = ' ';
});

//Функция фиксированного отчёта (25 минут)
started_time.addEventListener('click', () => {
    voice_start.src = 'end_voice_perezrel.mp3';
    voice_start.play();
    user_current.value = 25;
    timer = setTimeout(() => {
        user_current.value--;

        //Беру ЗНАЧЕНИЕ этого элемента
        if (user_current.value <= 0) {
            alert('Hello');
            return;
        }
        //Рекурсивная функция (вызывает сама себя)
        else {
            Timer();
        }
    }, 60000);
});

//Функция перерыва

cheel.addEventListener('click',  () => {
    voice_end.src = 'perezrelo_endo.ogg';
    voice_end.play();
    user_current.value = 5;
    timer = setTimeout(() => {
        user_current.value--;
        //Беру ЗНАЧЕНИЕ этого элемента
        Timer();
    }, 60000);
});

//Реакция на бездействие пользователя



let NotAction; //переменная, хранящая значение таймера;

//Неккоректная функция;
//
// document.addEventListener('mousemove', ()=>{
//     clearTimeout(NotAction); //Болванка
//     NotAction = setTimeout(()=>{
//         //Запускаю музыку:
//         voice_go.src = 'aggresive.ogg';
//         voice_go.play();
//     },)
// });