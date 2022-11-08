const options = [
    'Definitely',
    'Yes',
    'Perhaps not',
    'Maybe',
    'Unpredictable',
    'Does not compute',
    'Ask a human',
    'Doubt it'
]
const magicBall = document.getElementById("mb-container")
const response = document.getElementById("response")

magicBall.addEventListener("click", function(){

    const index = Math.floor(Math.random()*8)
    const message = options[index]
    magicBall.className = 'magicball__outer animate'
    setTimeout(()=>{
        response.textContent = message;
        response.style.fontSize = '1.1rem'
        magicBall.className = 'magicball__outer'
    }, 3000)
})