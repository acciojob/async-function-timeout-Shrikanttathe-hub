//your JS code here. If required
document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("btn");

	btn.addEventListener("click", async () => {
		const textInput = document.getElementById("text");
		const delayInput = (document.getElementById("delay");

		if(textInput === "" || isNaN(delayNumber)){
			alert("Please enter a valid code");
			return;
		}

		try{
			await delay(delayInput);
			const outputDiv = document.getElementById("output");
			outputDiv.textContent = textInput;
			
		}
		catch(error){
			console.error(error);
		}
		
	});
});
