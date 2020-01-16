function addImage(){
    document.getElementById('myImage').style.display = "block";
}
function removeImage(){
    document.getElementById('myImage').style.display = "none";
}
function moveImage(e){
    var deltaX = parseInt(e.clientX/screen.width*60)-100;
    var deltaY = parseInt(e.clientY/screen.height*60);
    document.getElementById('myImage').style.left =deltaX+"%" ;
    document.getElementById('myImage').style.top =deltaY+"%" ;
}