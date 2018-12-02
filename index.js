module.exports.convert = (frames, frameRate) => {
	let rationalNum;

	if (frameRate == "23.98") {
		rationalNum = `${frames}001/24000s`;
	} else if (frameRate == "24") {
		rationalNum = `${frames}00/2400s`;
	} else if (frameRate == "25") {
		rationalNum = `${frames}00/2500s`;
	} else if (frameRate == "29.97") {
		rationalNum = `${frames}001/30000s`;
	} else if (frameRate == "30") {
		rationalNum = `${frames}00/3000s`;
	} else if (frameRate == "50") {
		rationalNum = `${frames}00/5000s`;
	} else if (frameRate == "59.94") {
		rationalNum = `${frames}001/60000s`;
	} else if (frameRate == "60") {
		rationalNum = `${frames}00/6000s`;
	}
	return rationalNum;
};
