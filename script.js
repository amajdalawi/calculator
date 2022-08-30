let info_string = document.querySelector('.info_display')
let result_string = document.querySelector('.result_display')
reset();


// Function that resets the calc

function reset() {
    info_string.textContent = '';
    result_string.textContent = '0';
}

// AC button event

ac_btn = document.querySelector('.AC');
ac_btn.addEventListener('click',() => {
    reset();
})

// Make result zero
zerofy_btn = document.querySelector('.zerofy');
zerofy_btn.addEventListener('click',() => {
    result_string.textContent = '0';
});

// Add a number to the result string
function addNumber(n) {
    if (result_string.textContent === '0' && n.toString().length < 14) {
        result_string.textContent = n.toString()
    } else if(Math.abs(result_string.textContent.length + n.toString().length) < 14) {
        result_string.textContent += n.toString();

    } else  {
        calc_display_div = document.querySelector('.calc_display');
        calc_display_div.classList.add('red_border');
        // calc_display_div.classList.remove('red_border');
    }
}

let dict_num = {
    0: "zero",
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
}

for (let i = 0; i<10; i++) {
    number_button = document.querySelector('.' + dict_num[i]);
    number_button.addEventListener('click',()  => {
        addNumber(i);
    })
}