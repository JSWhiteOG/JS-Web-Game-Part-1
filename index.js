function newImage(url, left, bottom){
 let object = document.createElement('img')
 object.src = url
 object.style.position = 'fixed'
 object.style.left = left + 'px'
 object.style.bottom = bottom + 'px'
 document.body.append(object)
 return object
}



function newItem(url, left, bottom){
 let object = newImage(url, left, bottom)
 object.addEventListener('dblclick', () => {
 object.remove()
}
)
}
function tile(url, left, bottom, height, width){
 for(let h = 0; h < height; h++){
  for(let w = 0; w < width; w++){
    newImage(url, left + w*100, bottom+h*100)
   }
  }
 }
 
let horizon = window.innerHeight / 2
let skyHigh = window.innerHeight-horizon
let grassHigh = horizon

tile('assets/sky.png', 0, horizon, skyHigh/100, window.innerWidth/50)
tile('assets/grass.png', 0, 0, grassHigh/100, window.innerWidth/50)



newImage('assets/moe.gif', 0, 10,)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/well.png', 500, 425)
newImage('assets/crate.png', 150, 200)
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

