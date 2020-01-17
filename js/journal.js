function addImage(){
    document.getElementById('myImage').style.display = "block";
    // document.getElementById('myImage').style.transition = "all 1s";
}

function removeImage(){
    document.getElementById('myImage').style.display = "none";
    // document.getElementById('myImage').style.transition = "all 1s";
}
function moveImage(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*20);
    document.getElementById('myImage').style.left =deltaX+"%" ;
    document.getElementById('myImage').style.top =deltaY+"%" ;
}

function addImageJessica(){
    document.getElementById('myImage-jessica').style.display = "block";
    // document.getElementById('myImage-jessica').style.transition = "all 1s";
}
function removeImageJessica(){
    document.getElementById('myImage-jessica').style.display = "none";
    // document.getElementById('myImage-jessica').style.transition = "all 1s";
}
function moveImageJessica(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*20);
    document.getElementById('myImage-jessica').style.left =deltaX+"%" ;
    document.getElementById('myImage-jessica').style.top =deltaY+"%" ;
}

function addImageNature(){
    document.getElementById('myImage-nature').style.display = "block";
}
function removeImageNature(){
    document.getElementById('myImage-nature').style.display = "none";
}
function moveImageNature(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*40);
    document.getElementById('myImage-nature').style.left =deltaX+"%" ;
    document.getElementById('myImage-nature').style.top =deltaY+"%" ;
}

function addImageHappy(){
    document.getElementById('myImage-happy').style.display = "block";
}
function removeImageHappy(){
    document.getElementById('myImage-happy').style.display = "none";
}
function moveImageHappy(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*60);
    document.getElementById('myImage-happy').style.left =deltaX+"%" ;
    document.getElementById('myImage-happy').style.top =deltaY+"%" ;
}

function addImageTravel(){
    document.getElementById('myImage-travel').style.display = "block";
}
function removeImageTravel(){
    document.getElementById('myImage-travel').style.display = "none";
}
function moveImageTravel(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*80);
    document.getElementById('myImage-travel').style.left =deltaX+"%" ;
    document.getElementById('myImage-travel').style.top =deltaY+"%" ;
}

function addImageArchitecture(){
    document.getElementById('myImage-arc').style.display = "block";
}
function removeImageArchitecture(){
    document.getElementById('myImage-arc').style.display = "none";
}
function moveImageArchitecture(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*100);
    document.getElementById('myImage-arc').style.left =deltaX+"%" ;
    document.getElementById('myImage-arc').style.top =deltaY+"%" ;
}

function addImageStorm(){
    document.getElementById('myImage-storm').style.display = "block";
}
function removeImageStorm(){
    document.getElementById('myImage-storm').style.display = "none";
}
function moveImageStorm(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*110);
    document.getElementById('myImage-storm').style.left =deltaX+"%" ;
    document.getElementById('myImage-storm').style.top =deltaY+"%" ;
}
