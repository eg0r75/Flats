let flatPhoto=document.getElementsByClassName("flatPhoto")[0];
let flatInfo=document.getElementsByClassName("flatInfo")[0] ;
let map=document.getElementsByClassName("map")[0];
map.style.height=flatPhoto.offsetHeight-flatInfo.offsetHeight-10+"px";
let bookModal=document.getElementsByClassName("bookModal")[0];
let number=document.getElementsByClassName("headerPhone2")[0];

let modal=document.getElementsByClassName("modal")[0];
let modalButton=document.getElementsByClassName("modalButton")[0];

number.onclick=function(event){
    event.preventDefault();
    // modal.style.display="block";
    modal.style.transform="translateY(0) scale(1)";
}

modal.onclick=function(){
	// modal.style.display="none";
    modal.style.transform="translateY(100%) scale(0)";
}

modal.children[0].onclick=function(event){
event.stopPropagation();
}
modalButton.onclick=function(event){
    event.preventDefault();
    // modal.style.display="none"
    modal.style.transform="translateY(100%) scale(0)";
}
flatInfo.onclick=function(){
    event.preventDefault();
    bookModal.style.transform="translateY(0) scale(1)";
}
 bookModal.onclick=function(){
   
    bookModal.style.transform="translateY(100%) scale(0)";
 }
 bookModal.children[0].onclick=function(event){
    event.stopPropagation();
    }
