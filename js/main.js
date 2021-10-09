//Мини домашка на субботу 9.10.21
//Доделать задание на занятии.
/*-----------------------не работает-------------------------------*/
const btn = document.querySelectorAll('button');

const clickFunc = () => { 
  let z = 0;  
  btn.forEach((el) => {
    el.addEventListener('click', function() {
      z++;
    });    
  });
  if(btn === '.red') {
    console.log(`${z} YES`);
  } else if(btn === '.orange'){
    console.log(`${z} NO`);
  }
}
clickFunc();
/*-----------------------не работает-------------------------------*/

  
//*1. Сделать 2 кнопки YES NO и повесить событие клика на каждую, количество кликов фиксировать в счётчик, отдельный для каждой кнопки.*/

const button1 = document.querySelector('.red');
let i = 0;
button1.onclick = () => {
  i++;
  console.log(`${i} YES`);
};

const button2 = document.querySelector('.orange');
let k = 0;
button2.onclick = () => {
  k++;
  console.log(`${k} NO`);
};

  //2. Провести оптимизацию написав универсальную функцию для обоих событий.
  //3.  Создать дополнительные дивы, где каждый раз будет значение каждого счетчика*/