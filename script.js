const profilePic = document.querySelector('.profile-logo');
const porfileCard = document.querySelector('.card')
const upArrow = document.querySelector('.up-arrow')
const downArrow = document.querySelector('.down-arrow')
const whyAstroContent = document.querySelector('.why-astrology-content')


profilePic.addEventListener('click', () => {
    porfileCard.classList.toggle('flex')
})
