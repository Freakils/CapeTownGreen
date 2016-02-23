var taxiLocationCounter = 1;
// displayMessage(taxiLocationCounter);

//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
	var keyName = keyCodeName(e.keyCode);
	
		if(keyName === "right"){
			if(taxiLocationCounter<9){
			moveForward();
			};
		};

		if(keyName === "left"){
			if(taxiLocationCounter>1){
			moveBackward();
			};
		};


displayMessage(createLocationClass(taxiLocationCounter));

};

function moveForward(){
	var currentLocation = createLocationClass(taxiLocationCounter);
		taxiLocationCounter = taxiLocationCounter+1;
	var newLocation = createLocationClass(taxiLocationCounter);
		moveTaxi(currentLocation,newLocation);
};

function moveBackward(){
	var currentLocation = createLocationClass(taxiLocationCounter);
		taxiLocationCounter = taxiLocationCounter-1;
	var newLocation = createLocationClass(taxiLocationCounter);
		moveTaxi(currentLocation,newLocation);
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


	var createLocationClass = function(number) {
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

	var createTrafficLightClass = function(number){
		if(number ===1) {
			return ".one-of-nine";
		}

		if(number ===2) {
			return ".two-of-nine";
		}

		if(number ===3) {
			return ".three-of-nine";
		}

		if(number ===4) {
			return ".four-of-nine";
		}

		if(number ===5) {
			return ".five-of-nine";
		}

		if(number ===6) {
			return ".six-of-nine";
		}

		if(number ===7) {
			return ".seven-of-nine";
		}

		if(number ===8) {
			return ".eight-of-nine";
		}

		if(number ===9) {
			return ".nine-of-nine";
		}
	};

