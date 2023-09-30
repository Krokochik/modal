export let createModal = content => {
    if (!(content instanceof Node))
        throw new TypeError("Content must be Node");
    content = content.cloneNode(true);
    const popup = Object.assign(
        document.createElement("div"), {
            className: "modal"
        });
    const bg = Object.assign(
        document.createElement("div"), {
            className: "modal__bg"
        });
    const cross = Object.assign(
        document.createElement("div"), {
            className: "modal__cross"
        });
    const container = Object.assign(
        document.createElement("div"), {
            className: "modal__container"
        });
    const hideModal = () => {
        popup.classList.remove("visible");
        document.querySelector("body").style.overflow = "";
    }

    content.classList.add("modal__content");

    bg.addEventListener("click", hideModal);
    cross.addEventListener("click", hideModal);
    container.appendChild(cross);
    container.appendChild(content);
    popup.appendChild(bg);
    popup.appendChild(container);

    return popup;
}

export let bindModal = (event, target, popup, callback) => {
    if (!(typeof event === "string") || !(target instanceof Node) || !(popup instanceof Node))
        throw new TypeError("Illegal argument given");
    if (!(popup in document.childNodes)) {
        document.querySelector("body").appendChild(popup);
    }
    target.addEventListener(event, e => {
        if (callback !== undefined) callback(e);
        popup.classList.add("visible");
        document.querySelector("body").style.overflow = "hidden";
    });
}