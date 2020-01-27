const minifiedDandomColorGenerator = () => `rgb(${ Math.floor((Math.random() * 255) + 1) }, ${ Math.floor((Math.random() * 255) + 1) }, ${ 255 })`;

const simplifiedRandomColorGenerator = () => {
	/** @type {number} [generate a random number from 1 to 255, which is the range of acceptable value of rgb] */
	const r = Math.floor((Math.random() * 255) + 1);
	const g = Math.floor((Math.random() * 255) + 1);
	const b = Math.floor((Math.random() * 255) + 1);

	// return the rgb string with the generated random value *** feel free to choke on it
	return `rgb(${ r },${ g },${ b })`;
}