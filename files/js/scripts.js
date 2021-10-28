function concatenate(dec, hex){
	let result = '';
	if(dec < 10) return dec + hex;
	if(dec == 10) return 'A' + hex;
	if(dec == 11) return 'B' + hex;
	if(dec == 12) return 'C' + hex;
	if(dec == 13) return 'D' + hex;
	if(dec == 14) return 'E' + hex;
	return 'F' + hex;
}

function convertToHex(dec){
	let hex = '';
	while(dec > 15){
		hex = concatenate(dec % 16, hex);
		dec = parseInt(dec / 16);
	}
	hex = concatenate(dec, hex);
	if(hex.length == 1) hex = '0' + hex;
	return hex;
}

function sliderChanged(){
	let colour = '#' + convertToHex(redSlider.value) + convertToHex(greenSlider.value) + convertToHex(blueSlider.value);
	hexValue.value = colour;
	redValue.value = redSlider.value;
	greenValue.value = greenSlider.value;
	blueValue.value = blueSlider.value;
	div.style.backgroundColor = colour;
}