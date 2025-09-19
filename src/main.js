const card = document.querySelector('.card'); //выбираем элемент с классом card на странице
    card.addEventListener('click', ()=>{
        console.log(0)
        card.classList.toggle('card-show');
    });

