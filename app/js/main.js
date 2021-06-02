let menu = document.getElementsByClassName('rightside-menu')[0];
let menubtn = document.getElementsByClassName('header__btn')[0];

menubtn.addEventListener('click' , openRightsideMenu);

function openRightsideMenu (){
    menu.classList.toggle('rightside-menu--away');
}

let menu__close = document.getElementsByClassName('rightside-menu__close')[0];

menu__close.addEventListener('click' , openRightsideMenu);


//gallery__buttons
let gallery__button = document.getElementsByClassName('gallery__btn')[0];

gallery__button.addEventListener('click' , change_Btn_bg);

function change_Btn_bg(){
    gallery__button.classList.toggle('gallery__btn--active');
    let gallery__button3 = document.getElementsByClassName('gallery__btn')[3];
}


document.getElementsByClassName('gallery__btn')[1].onclick = function(){
    this.classList.toggle('gallery__btn--active');
   }

   let gallery__button2 = document.getElementsByClassName('gallery__btn')[2];
   let gallery__button3 = document.getElementsByClassName('gallery__btn')[3];
   let gallery__button4 = document.getElementsByClassName('gallery__btn')[4];
   gallery__button2.onclick = function(){
    this.classList.toggle('gallery__btn--active');
    }
   

   gallery__button3.onclick = function(){
    this.classList.toggle('gallery__btn--active');
   }
   
   gallery__button4.onclick = function(){
    this.classList.toggle('gallery__btn--active');
   }
