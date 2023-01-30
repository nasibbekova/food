let modalWindow = document.querySelector('.modal')
let modalBg = document.querySelectorAll('.modal__bg')
let openBtns = document.querySelectorAll('.btns')
let closeBtns = document.querySelector('.modal__close')

openBtns.forEach((btn) =>{
    btn.onclick = () =>{
        modalWindow.style.display = "flex"
        modalBg.style.display = "block"

        setTimeout(() =>{
            modalWindow.style.opacity = '1'
            modalBg.style.opacity = '1'
            modalWindow.style.scale = '1'
            modalWindow.style.rotate = '0deg'
        },200)
    }
})


closeBtns.onclick = () =>{
    modalWindow.style.display = 'none'
    modalWindow.style.rotate = "0deg"
    modalWindow.style.scale = '2'
    modalWindow.style.opacity = '0'
    modalBg.style.opacity = '0'

    setTimeout(() =>{
        modalWindow.style.display = 'none'
        modalBg.style.dipsla3 = 'none'
    },200)
}



let isEnought = false
body.onscroll = () =>{
    if(Math.ceil(window.innerHeight+window.scrollY) >=body.offsetHeight &&isEnought === false){
        open()
    }
}


let foodImgs = document.querySelectorAll ('.tabcontainer .tabcontent') //изображение
let tabheader__items = document.querySelectorAll ('div[data-type]') //стиль питания 
let tabcontentFood = document.querySelectorAll ('.tabcontainer .tabcontent__descr') //текст 
let calculating = docment.querySelectorAll ('.calculating .calculating__choose')

let foodImages = {
    first:'./img/slider/food-12.jpg',
    second: './img/slider/olive-oil.jpg',
    third: './img/slider/paprica.jpg',
    fourth: './img/slider/pepper.jpg'
}

tabheader__items.forEach (item =>{
    item.onclick = () =>{
        let key = item.getAttribute('data-type')
        let img = foodImages[key]
        foodImgs.style.backgroundImage = `url(${img})`
        tabcontentFood.innerHTML = key 

        calculating.forEach(el.classList.remove ('calculating__choose-item_active'))
        item.classList.add('calculating__choose-item_active')
    }
})


