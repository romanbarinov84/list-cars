

  const tabsItem = document.querySelectorAll('.tabs__btn-item');
  const tabsContent = document.querySelectorAll('.tabs__content-item');

  tabsItem.forEach(function(element){
    element.addEventListener('click', open);
  });

  function open(evt){
  const tabTarget = evt.currentTarget;

  tabsItem.forEach(function(item){
    item.classList.remove('tabs__btn-item__active');
  })

  tabTarget.classList.add('tabs__btn-item__active');
  };

  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu__list');

  menuBtn.addEventListener('click',() => {
    menu.classList.toggle('menu__list--active')
  })

  let swiper = new Swiper(".swiper", {
    effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
      },
      loop: true, 
    });