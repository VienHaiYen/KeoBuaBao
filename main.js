// import baoImg from './img/bao.png'
// import buaImg from './img/bua.png'
// import keoImg from './img/keo.png'
// import questionImg from './img/question.png'


const player = document.querySelector('.right')
const computer = document.querySelector('.left')
const retryBtn = document.querySelector('.retry-btn')
const result = document.querySelector('.result')


const prepare = document.querySelector('.prepare')
const playBtn = document.querySelector('.play-btn')
const reResult = document.querySelector('.re-result')
// alert(player)

let _1thBtn = document.getElementById('1')
let _2thBtn = document.getElementById('2')
let _3thBtn = document.getElementById('3')

let directBtns = document.querySelectorAll('.main-btn')
// alert(directBtn)

directBtns.forEach((btn) => {
    btn.addEventListener('click', () =>{
        prepare.style.display="flex"
        result.innerText = ''
        computer.innerHTML = `<img style="transform: scale(0.5)"src="./img/question.png"/>`
        player.innerHTML = ``
    })
})

let save
_1thBtn.addEventListener('click',()=>{
    reResult.innerHTML = `<img src="./img/keo.jpg"/>`
    save=1
})
_2thBtn.addEventListener('click',()=>{
    reResult.innerHTML = `<img src="./img/bua.png"/>`
    save=2
})
_3thBtn.addEventListener('click',()=>{
    reResult.innerHTML = `<img src="./img/bao.png"/>`
    save=3
})
retryBtn.addEventListener('click',()=>{
    computer.innerHTML = `<img style="transform: scale(0.5)"src="./img/question.png"/>`
    player.innerHTML=``
    result.innerText = ''
})

playBtn.addEventListener('click',()=>{
    prepare.style.display="none"
    action()
})
const action =()=>{
    setTimeout(()=>{
        let rand =Math.floor((Math.random()*3))+1
        switch(rand) {
            case 1:
                computer.innerHTML = `<img src="./img/keo.jpg"/>`
                break
            case 2:
                computer.innerHTML = `<img src="./img/bua.png"/>`
                break
            case 3:
                computer.innerHTML = `<img src="./img/bao.png"/>`
                break
        }
        player.innerHTML=reResult.innerHTML
        if(rand ===save){
            result.innerText = 'One \nmore'
        }
        else if(rand===save-1){
            result.innerText = 'Win'
        }
        else{
            result.innerText = 'Lose'
        }
    },500)
}