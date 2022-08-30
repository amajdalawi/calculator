let info_string = document.querySelector('.info_display')
let result_string = document.querySelector('.result_display')
reset();


// Function that resets the calc

function reset() {
    info_string.textContent = '';
    result_string.textContent = '0';
}

// AC button event

let ac_btn = document.querySelector('.AC');
ac_btn.addEventListener('click',() => {
    reset();
})

// Make result zero
let zerofy_btn = document.querySelector('.zerofy');
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


// Add functionality to the number buttons in the calc

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

// Add functionality to the arithmetic buttons

let dict_arithmetic = {
    '/':'div',
    '*':'mul',
    '+':'add',
    '-':'minus',
    '%':'mod',
};

let ops = ['/','*','+','-','%'];

// evals a number, rounds down floats to 2 decimal numbers

function round2(n) {
    if (n.toString().split('.').length > 1) {
        return parseFloat(eval(n)).toFixed(2).toString();
    } else {
        return eval(n).toString()
    }
}

function applyArithmetic(operator) {
    if (info_string.textContent == '') {
        info_string.textContent = result_string.textContent + ' ' + operator;
        result_string.textContent = '0';
    } else if (info_string.textContent.split(' ').length == 2 && result_string.textContent == '0') {
        info_string.textContent = info_string.textContent.split(' ')[0] + ' ' + operator;

    } else if (info_string.textContent.split(' ').length == 2) {
        let finalres = info_string.textContent + ' ' + result_string.textContent;
        // let eval_num = eval(finalres).toString();
        // // console.log(eval_num)
        // if (eval_num.split('.').length == 2) {
        //     eval_num = parseFloat(eval_num).toFixed(2).toString();
        // }
        info_string.textContent = round2(finalres) + ' ' + operator;
        result_string.textContent = '0';

    } else if (info_string.textContent.split(' ').length == 3) {
        info_string.textContent = result_string.textContent + ' ' + operator;
        result_string.textContent = '0';
    } else if (info_string.textContent.split(' ').length == 1) {
        info_string.textContent = info_string.textContent + ' ' + operator;
        result_string.textContent = '0';
    }
}

for (let op of ops) {
    arith_btn = document.querySelector('.' + dict_arithmetic[op]);
    // console.log(op, dict_arithmetic[op], arith_btn)

    arith_btn.addEventListener('click',(e) => {
        applyArithmetic(op);
    }); 
}

// the equals button

function equalEval() {
    if (info_string.textContent == '') {
        info_string.textContent = result_string.textContent;
        result_string.textContent = '0';
    } else if (info_string.textContent.split(' ').length == 2) {
        result_string.textContent = round2(info_string.textContent + ' ' + result_string.textContent);
        info_string.textContent = '';
    }
}

let equals_btn = document.querySelector('.equals');
// console.log(equals_btn);
equals_btn.addEventListener('click',(e) => {
    equalEval();
});

// adds functionality to the decimal button

function addDecimal() {
    if(result_string.textContent.split('.').length === 1) {
        result_string.textContent += '.';
    } 
}

let decimal_btn = document.querySelector('.decimal');
// console.log(decimal_btn);
decimal_btn.addEventListener('click',() => {
    addDecimal()
});

// Add functionality to the backspace button

function removeNum() {
    if (result_string.textContent.length === 1 && result_string.textContent !== '0') {
        result_string.textContent = '0';
    } else if (result_string.textContent !== '0') {
        result_string.textContent = result_string.textContent.slice(0,result_string.textContent.length -1)
    } 
}

let backspace_btn = document.querySelector('.bkspace');
backspace_btn.addEventListener('click',() => {
    removeNum();
})