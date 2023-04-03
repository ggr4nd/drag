"use strict"

let elems = document.querySelectorAll('.elem');
let parent1 = document.querySelector('#parent1');
let parent2 = document.querySelector('#parent2');
let parent3 = document.querySelector('#parent3');


let img1 = new Image();
img1.src = 'football.png';

let img2 = new Image();
img2.src = 'basketball.png';

let img3 = new Image();
img3.src = 'voleyball.png';

let i1 = false;
let i2 = false;
let i3 = false;


if (i1 == true && i2 == true && i3 == true){
    alert( "Вы прошли игру");
}

elems.forEach(function(elem, index){
    elem.addEventListener('dragstart', function(event1) {
        event1.dataTransfer.setData('text', index);
    })
    elem.addEventListener('dragstart', function(event2) {
        event2.dataTransfer.setData('text', index);
    })
    elem.addEventListener('dragstart', function(event3) {
        event3.dataTransfer.setData('text', index);
    })
});



parent1.addEventListener('dragover', function(event){
    event.preventDefault();
   
});
parent1.addEventListener('drop', function(event1){
   console.log(event1.dataTransfer.getData('text'));
   this.appendChild(elems[event1.dataTransfer.getData('text')]);
   if(event1.dataTransfer.getData('text') == 0){
    i1 = true;
   }
   if (i1 == true && i2 == true && i3 == true){
    alert( "Вы прошли игру");
}
});



parent2.addEventListener('dragover', function(event){
    event.preventDefault();
   
});
parent2.addEventListener('drop', function(event2){
   console.log(event2.dataTransfer.getData('text'));
   this.appendChild(elems[event2.dataTransfer.getData('text')]);
   if(event2.dataTransfer.getData('text') == 1){
    i2 = true;
   }
   if (i1 == true && i2 == true && i3 == true){
    alert( "Вы прошли игру");
}
});


parent3.addEventListener('dragover', function(event){
    event.preventDefault();
   
});
parent3.addEventListener('drop', function(event3){
   console.log(event3.dataTransfer.getData('text'));
   this.appendChild(elems[event3.dataTransfer.getData('text')]);
   if(event3.dataTransfer.getData('text') == 2){
    i3 = true;
   }
   if (i1 == true && i2 == true && i3 == true){
    alert( "Вы прошли игру");
}
});



