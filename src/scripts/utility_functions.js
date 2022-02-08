function disableButton(e){
    e.classList.add("disabled");
    e.disabled = true;
}

function removeDisableButton(e){
    e.classList.remove("disabled");
    e.disabled = false;
}

export { disableButton, removeDisableButton };