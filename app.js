function updateQuantity(isIncreasing) {
    const input = document.getElementById('case-input');
    let inputText = input.value;
    if (isIncreasing) {
        inputText = parseInt(inputText) + 1;
    }
    else if (inputText > 0) {
        inputText = parseInt(inputText) - 1;
    }
    input.value = inputText;
    // updating the price 
    const currentTotal = document.getElementById('case-price');
    currentTotal.innerText = inputText * 59;
}



document.getElementById('case-plus').addEventListener('click', function () {
    /*  const input = document.getElementById('input-plus');
     const inputText = input.value;
     input.value = parseInt(inputText) + 1; */
    updateQuantity(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    /*   const input = document.getElementById('input-plus');
      const inputText = input.value;
      input.value = parseInt(inputText) - 1; */
    updateQuantity(false);
});