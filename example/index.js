import {createModal, bindModal} from "https://rawcdn.githack.com/Krokochik/modal/master/src/modal.js?min=1";

for (let i = 0; i < 30; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="https://picsum.photos/seed/${i+(i+1)*2}/200" alt="">
                      <span>Image</span>
                      <a href="https://picsum.photos/seed/${Math.pow(i+1, (i+1)*(1+1))}/1024">Link</a>`;
    document.querySelector("body").appendChild(card);
}

document.querySelectorAll(".card > a").forEach(link => {
    console.log(link instanceof Node);
    const image = document.createElement("img");
    image.src = link.href;
    bindModal("click", link,
        createModal(image),
        event => event.preventDefault());
})