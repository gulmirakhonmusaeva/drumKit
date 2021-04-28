let drum = document.querySelectorAll(".drum")

for (let i = 0; i < drum.length; i++) {

    drum[i].addEventListener("click",function(){
       let text = drum[i].innerText
        playMusic(text)
        animation(text)
    })
}

document.addEventListener("keypress", function(event) {
    playMusic(event.key)
})


 function playMusic (clickPress) {
    
    switch (clickPress) {
        case 'w':
            let crash = new Audio('sounds/crash.mp3') 
            crash.play()
            break;
        case 'a':
            let kickBass = new Audio('sounds/kick-bass.mp3') 
            kickBass.play() 
            break;
        case 's':
            let  snare= new Audio('sounds/snare.mp3') 
            snare.play()
        
            break;
         case 'd':
            let  tom1= new Audio('sounds/tom-1.mp3') 
            tom1.play()
            break;
        case 'j':
            let tom2 = new Audio ('sounds/tom-2.mp3')
            tom2.play()
            break;
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;
        case 'l':
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;
        default:
            alert(text)
            break;
    }   
 }


 function animation (anime) {

     let myAnime = document.querySelector("." + anime);

     myAnime.classList.add("pressed")

     setTimeout(function() {
        myAnime.classList.remove("pressed")
     }, 100)

 }




































// for (let i = 0; i < drum.length; i++) {
//     drum[i].addEventListener("keypress",function(){


//     if (text === 'w') {
//         let crash = new Audio('sounds/crash.mp3') 
//         crash.play()
//        } else if (text === 'a') {
//         let kickBass = new Audio('sounds/ kick-bassmp3') 
//         kickBass.play() 




