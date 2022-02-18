const profilePic = document.querySelector('.profile-logo');
const porfileCard = document.querySelector('.card')
console.log(profilePic)


profilePic.addEventListener('click', () => {
    porfileCard.classList.toggle('flex')
})