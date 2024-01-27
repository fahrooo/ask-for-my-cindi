const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const body = document.body;

btnYes.addEventListener("click", () =>{
    question.innerHTML = "I Love You Too!";
    gif.src = "https://media1.tenor.com/m/-HP-i9dmbowAAAAC/cat-cute.gif"

    btnNo.style.display = "none"
    btnYes.style.display = "none"

    setTimeout(() => {
        window,location.href = "/ask-for-my-cindi/date.html"
    }, 5000);
})

btnNo.addEventListener("mouseover", ()=>{
    // Generate random margins within 10px
    const randomMarginRight = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
    const randomMarginLeft = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
    const randomMarginTop = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
    const randomMarginBottom = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
  
    // Apply the random margins to the button
    btnNo.style.marginRight = randomMarginRight + 'px';
    btnNo.style.marginTop = randomMarginTop + 'px';
})

btnNo.addEventListener("click", ()=>{
    // Generate random margins within 10px
    const randomMarginRight = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
    const randomMarginLeft = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
    const randomMarginTop = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
    const randomMarginBottom = Math.floor(Math.random() * (100 - (-100) + 1)) - 100;// Range from -10px to 10px
  
    // Apply the random margins to the button
    btnNo.style.marginRight = randomMarginRight + 'px';
    btnNo.style.marginTop = randomMarginTop + 'px';
})