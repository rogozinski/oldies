//text input value = value + value of pressed button
function calc(x){
	calc_form.calc_display.value = calc_form.calc_display.value + x;
}

//set value of text input as empty space
function clean(){
	calc_form.calc_display.value = ' ';
}

//remove last string item and return the value to text input
function backslash(x){
	calc_form.calc_display.value = x.substring(0, x.length-1);
}

function calculate(){
	calc_form.calc_display.value = eval(calc_form.calc_display.value);
}
