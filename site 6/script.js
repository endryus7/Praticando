var show = true

const menucontent = document.querySelector('header')
const menuhamburger = menucontent.querySelector('.menu-hamburger')

menuhamburger.addEventListener('click', () => {
    menucontent.classList.toggle('on', show)
    show =! show
})