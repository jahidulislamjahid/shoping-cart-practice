function updateQuantity(product, price, isIncreasing) {
    const input = document.getElementById(product + '-input');
    let inputText = input.value;
    if (isIncreasing) {
        inputText = parseInt(inputText) + 1;
    }
    else if (inputText > 0) {
        inputText = parseInt(inputText) - 1;
    }
    input.value = inputText;
    // updating the price 
    const currentTotal = document.getElementById(product + '-price');
    currentTotal.innerText = inputText * price;
}

// phone event handler 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateQuantity('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateQuantity('phone', 1219, false);
});
// case event handler 
document.getElementById('case-plus').addEventListener('click', function () {
    /*  const input = document.getElementById('input-plus');
     const inputText = input.value;
     input.value = parseInt(inputText) + 1; */
    updateQuantity('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    /*   const input = document.getElementById('input-plus');
      const inputText = input.value;
      input.value = parseInt(inputText) - 1; */
    updateQuantity('case', 59, false);
});