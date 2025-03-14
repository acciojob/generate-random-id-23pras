function makeid(l) {
    let result = '';
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let charlen = characters.length;

	for(let i=0; i<l; i++){
		result += characters.charAt(Math.floor(Math.random)*charlen);
		
	}

	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
