// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__item');

          
//         //   tabheader__item_active 
//         function hideTabContent() {
//             tabsContent.forEach(item => {
//                 item.style.display = 'none';
//             });

//             tabs.forEach(item => {
//                 item.classList.remove('tabheader__item_active');
//             });
//         }




//         function showTabContent(i = 0) {
            // tabsContent[i].style.display = 'block';
            // tabs[i].classList.add('tabheader__item_active');
//         }



//         hideTabContent();
//         showTabContent();


//         tabsParent.addEventListener('click' (e) => {
//             const target = e.target;

//             if (target && target.classList.contains('tabheader__item')) {
//                 tabs.forEach((item, i) => {
//                     if (target == item) {
//                         hideTabContent();
//                         showTabContent(i); 
//                     }
//                 });
//             }
//         });








// });



window.addEventListener('DOMContentLoaded', function() {

    // Tabs
 



	let tabs = document.querySelectorAll('.tabheader__item'), //селектор одиночного таба
		tabsContent = document.querySelectorAll('.tabcontent'), //содержимое айтема, контент
		tabsParent = document.querySelector('.tabheader__items'); //родитель айтема

    function hideFunc() {
        tabsContent.forEach(item => {
            item.style.position = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showFunc(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');

    }

    hideFunc();
    showFunc();

    tabsParent.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('tabheader__item_active') ) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideFunc();
                    showFunc(i);
                } 
            });
        }
    });





});
