let imgChange = document.getElementById('imgChange')
let colorBlack = document.getElementById('colorBlack')
let colorOrenge = document.getElementById('colorOrenge')
let colorPurple = document.getElementById('colorPurple')
let colorPink = document.getElementById('colorPink')


colorBlack.addEventListener('click', () => {
    imgChange.src = 'img/black-watch.png'
})

colorOrenge.addEventListener('click', () => {
    imgChange.src = 'img/orenge-watch.png'
})

colorPurple.addEventListener('click', () => {
    imgChange.src = 'img/purple-watch.png'
})

colorPink.addEventListener('click', () => {
    imgChange.src = 'img/pink-watch.png'
})



