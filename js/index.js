// Your code goes here
const imgs = document.querySelectorAll(".content-section img");
const sign_me_up = document.querySelectorAll(".btn");
const anchor_tags = document.querySelectorAll("a");
function makeImg100Width(img){  
  let img_parent = img.parentElement;
  // img_parent.parentElement.querySelector(".text-content")
  img_parent.parentElement.querySelector(".text-content").setAttribute("style", "opacity: 0; height: 0; overflow: hidden; transition: all 1s ease-out")//transition: display 2s;");
  img_parent.parentElement.querySelector(".text-content").setAttribute("style", "display: none");
  img.setAttribute("style", "width: 100%; height: 100%;");// = "100%";
  img_parent.setAttribute("style", "width: 100%; max-height: 500px;transition: all 3s");// = "100%";
  // console.log(img_parent.parentElement.querySelector(".text-content"));
}

function makeImgTextReappear(img){
  let img_parent = img.parentElement;
  img_parent.setAttribute("style", "width: 48%; max-height: 250px;transition: all 3s");
  img.setAttribute("style", "width: 100%; height: 100%;");// = "100%";
  setTimeout(() => {
    img_parent.parentElement.querySelector(".text-content").setAttribute("style", "display: block");
  }, 3000)
  // console.log(img);
}

// img.addEventListener("mouseover", makeImg100Width);
// console.log(img.parentElement.parentElement)//.addEventListener("mouseout", makeTextReappear);
// img.parentElement.parentElement.addEventListener("mouseleave", makeTextReappear);

imgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    makeImg100Width(img)
  });
  img.parentElement.parentElement.addEventListener("mouseleave", function(event){
    makeImgTextReappear(img);
  });
  // console.log(img.parentElement.parentElement);
});

sign_me_up.forEach((button) => {
  button.addEventListener("click", () => {
    alert(`You've been enrolled to the ${button.parentElement.querySelector("h4").innerHTML} program`);
  })
  window.localStorage.setItem("Cat", "Meow");
});

anchor_tags.forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    alert("I'm sorry, you are locked here... if you want to visit this page you will need to pay me, via directo deposit, 100K... and yep, each time");
  });
});

window.addEventListener("load", function(){
  console.log("Page totally loaded");
  
});

window.addEventListener("resize", function(){
  console.log("You are resizing");
  console.log(window.localStorage);
  document.getElementById("focus").focus({ preventScroll: false});
});

let mainDiv = document.querySelector(".inverse-content");
mainDiv.addEventListener('click', e => {
  e.currentTarget.style.border = "solid yellow 5px";
})


let subDiv = document.querySelector(".inverse-content .text-content");
subDiv.addEventListener('click', e => {
  e.stopPropagation();
  e.currentTarget.style.border = "solid orange 5px";
});

// document.getElementById("focus").focus({ preventScroll: false});