const btns = document.querySelectorAll("button");

for (btn of btns){
    btn.addEventListner("click", () => {
        console.log("button was clicked");
    });
}