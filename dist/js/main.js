

window.addEventListener('DOMContentLoaded', function() {

    // Tabs
	let tabs = document.querySelectorAll('.tabheader__item'), //селектор одиночного таба
		tabsContent = document.querySelectorAll('.tabcontent'), //содержимое таба, контент
		tabsParent = document.querySelector('.tabheader__items'); //родитель табов

    function hideFunc() {   //функция на скрытие элементов
        tabsContent.forEach(item => { // переюираем контент таба
            item.style.display = 'none'; //скрывает контент у каждого таба
        });
        tabs.forEach(item => { //перебираем каждый таб по отдельности
            item.classList.remove('tabheader__item_active'); // и если на каком-то назначен класс активности, то убираем его.
        });
    }

    function showFunc(i = 0) {  //функция показа. инначально активен тот, у которого индекс 0. то есть, 1ый элемент.
        tabsContent[i].style.display = 'block'; //содержимое таба который будет под индексом = 0, станет видимое т.к. display=block
        tabs[i].classList.add('tabheader__item_active'); // так же этому табу назначается класс активности

    }

    hideFunc(); //скрываем всех сразу
    showFunc(); // показываем всем сразу, но т.к. аргумент не передан, то никого не показываем.

    tabsParent.addEventListener('click', (event) => { // делигирование события. назначаем клик на родителя табов, листенер следит событием и записывает все в эвент.
        let target = event.target; // для удобства.
        if (target && target.classList.contains('tabheader__item') ) { // если таргет эвента И таргет эвента совпадает с селектором tabheader__item
            tabs.forEach((item, i) => { // то перебираем все элементы и их индексы.
                if (target == item) { // если эвент совпал с элементом, 
                    hideFunc(); //то скрываем всех(на случай если кто-то уже был активен)
                    showFunc(i); // и показываем только того, на кого кликнули.
                } 
            });
        }
    });
 


    //timer

    const deadline = '2021-02-20'; //  конечная дата



    function getTimeRemaining(endtime) { //функция по расчету промежутков
        const t = Date.parse(endtime) - Date.parse(new Date()), // создаем локальную переменную в которую методом Date.parse разбираем строковое значение и переводим его в милисекунды. от этих милисекунд отнимаем также переведенное в милисекунды ВРЕМЯ ДАТЫ ИЗ СИСТЕМЫ. получаем разницу которую и будет отщитывать таймер.
              days = Math.floor( (t / (1000 * 60 * 60 * 24)) ), //  вычисляем дни. выводим разультат без остатся через math.floor. РАЗНИЦУ делим на произведение (тысяча милисекунд  умноженые на 60(так получаем количество милисекунд в одной минуте) умноженые ещё раз на 60(получаем сколько в одном часе) и умножаем еще раз на 24 часа(и получаем сколько в сутках будет милисекунд) ). арифметика в скобках - получение милисекунд в одних сутках.  разницу в милисекундах делим на милисекунды в одних сутках и получаем СКОЛЬКО СУТОК ОСТАЛОСЬ ДО ОКОНЧАНИЕ НАШЕЙ ДАТЫ.
              hours = Math.floor( (t / (1000 * 60 * 60) %  24) ), // (нашу разницу милисекунд делим на количество милисекунд в одном часе) делим это % на 24 и % возвращает нам остаток от деления. (пример%: 5 % 2 = 1.  5/2=4 и 1 в остатке)
              minutes = Math.floor( (t / 1000 / 60) % 60),
              seconds = Math.floor( (t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours ,
            'minutes': minutes,
            'seconds': seconds
       };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


function setClock(selector, endtime) { // функция установки таймера на страничке
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
          
          updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);


        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }

    }

} 


setClock('.timer', deadline);


}); //техническая функция загрузки DOM
