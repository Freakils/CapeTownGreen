var taxiLocationCounter = 1;
// displayMessage(taxiLocationCounter);

var body = document.querySelector("body");
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
	var keyName = keyCodeName(e.keyCode);
	
		if(keyName === "right"){
			if(taxiLocationCounter<9){
			taxiLocationCounter = taxiLocationCounter+1;
			};
		};

		if(keyName === "left"){
			if(taxiLocationCounter>1){
			taxiLocationCounter = taxiLocationCounter-1;
			};
		};


displayMessage(createLocactionClass(taxiLocationCounter));

};


	var keyCodeName = function(keycode) {
		if(keycode === 37) {
	 		return "left"; 
		}

		if(keycode === 38) {
			return "up";
		}

		if(keycode === 39) {
			return "right";
		}

		if(keycode === 40) {
			return "down";
		}
		
		else {return ""};
		
	};


	var createLocactionClass = function(number) {
		if(number ===1) {
			return "slot-one-of-nine";
		}

		if(number ===2) {
			return "slot-two-of-nine";
		}

		if(number ===3) {
			return "slot-three-of-nine";
		}

		if(number ===4) {
			return "slot-four-of-nine";
		}

		if(number ===5) {
			return "slot-five-of-nine";
		}

		if(number ===6) {
			return "slot-six-of-nine";
		}

		if(number ===7) {
			return "slot-seven-of-nine";
		}

		if(number ===8) {
			return "slot-eight-of-nine";
		}

		if(number ===9) {
			return "slot-nine-of-nine";
		}
	};

