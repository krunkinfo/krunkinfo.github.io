const canvas = document.getElementById("bg-canvas")
const ctx = canvas.getContext("2d")
const mouse = {
    x: Infinity,
    y: Infinity,
    r: 45
}
window.onresize=resizeCanvas
document.body.addEventListener("mousemove", (e)=>{
    mouse.x = e.clientX
    mouse.y = e.clientY
})

let lastAnimStage = 0
let stageVel = 2
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    ctx.beginPath()
    ctx.strokeStyle="black"
    ctx.arc(mouse.x,mouse.y,mouse.r,0,2*Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle="cyan"
    ctx.arc(mouse.x,mouse.y,lastAnimStage,0,2*Math.PI)
    ctx.stroke()

    lastAnimStage+=stageVel
    if(lastAnimStage+1 > window.innerWidth*1.7){
        lastAnimStage = 0
    }
    requestAnimationFrame(animate)
}

function resizeCanvas() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
}

resizeCanvas()
animate()