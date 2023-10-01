const canvas = document.getElementById("bg-canvas")
const ctx = canvas.getContext("2d")
const mouse = {
    x: window.innerWidth/2,
    y:window.innerHeight/2
}
window.onresize=resizeCanvas
document.body.addEventListener("mousemove", (e)=>{
    mouse.x = e.clientX
    mouse.y = e.clientY
})

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="black"
    ctx.strokeRect(mouse.x,mouse.y,50,50)
    requestAnimationFrame(animate)
}

function resizeCanvas() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
}

resizeCanvas()
animate()