let bigImg = document.getElementById("bigImg")

let Smallone = document.getElementById('Smallone')
let Smalltwo = document.getElementById('Smalltwo')
let Smalltree = document.getElementById('Smalltree')
let Smallfour = document.getElementById('Smallfour')


Smallone.addEventListener('click',function(event){
    let bigImgurl = bigImg.src
    let Smalloneurl = Smallone.src

    bigImg.src = Smalloneurl
    Smallone.src = bigImgurl
})

Smalltwo.addEventListener('click',function(event){
    let bigImgurl = bigImg.src
    let Smalltwourl = Smalltwo.src

    bigImg.src = Smalltwourl
    Smalltwo.scr = bigImgurl
})

Smalltree.addEventListener('click',function(event){
    let bigImgurl = bigImg.src
    let Smalltreeurl = Smalltree.src

    bigImg.src = Smalltreeurl
    Smalltree.scr = bigImgurl
})

Smallfour.addEventListener('click',function(event){
    let bigImgurl = bigImg.src
    let Smallfoururl = Smallfour.src

    bigImg.src = Smallfoururl
    Smallfour.scr = bigImgurl
})