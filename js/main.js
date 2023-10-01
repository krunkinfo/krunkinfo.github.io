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
let invertStage = false
let stageVel = 0.4

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)

    
    ctx.save()
    ctx.strokeStyle="black"
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,mouse.r,0,2*Math.PI)
    ctx.stroke()
    ctx.restore()

    ctx.save()
    ctx.strokeStyle="grey"
    ctx.arc(mouse.x,mouse.y,lastAnimStage,0,2*Math.PI)
    ctx.stroke()
    ctx.restore()

    if(invertStage){
        lastAnimStage-=stageVel
    }else{
        lastAnimStage+=stageVel
    }
    if(lastAnimStage+1 > mouse.r){
        invertStage = true 
    } else if(lastAnimStage < 1){
        invertStage = false 
    }

    requestAnimationFrame(animate)
}

function resizeCanvas() {
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
}

resizeCanvas()
animate()