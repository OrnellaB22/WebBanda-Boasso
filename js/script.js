const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navbarLinks = document.getElementsByClassName('nav__list')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
})