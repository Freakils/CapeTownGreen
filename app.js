var taxiLocationCounter = 1;
// displayMessage(taxiLocationCounter);

//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");
body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
    var trafficLight = new TrafficLight(taxiLocationCounter);
    	
	var keyName = keyCodeName(e.keyCode);
	
		if((keyName === "right") && (trafficLight.color() === "green")){
			if(taxiLocationCounter<9){
			moveForward();
			};
		};

		if(keyName === "left"){
			if(taxiLocationCounter>1){
			moveBackward();
			};
		};

		if(keyName === "down"){
    		trafficLight.makeGreen();
    	};

    	if(keyName === "up"){
    		trafficLight.makeRed();
    	}



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


	var createLocationClass = function(taxiLocationCounter) {
		if(taxiLocationCounter ===1) {
			return "slot-one-of-nine";
		}

		if(taxiLocationCounter ===2) {
			return "slot-two-of-nine";
		}

		if(taxiLocationCounter ===3) {
			return "slot-three-of-nine";
		}

		if(taxiLocationCounter ===4) {
			return "slot-four-of-nine";
		}

		if(taxiLocationCounter ===5) {
			return "slot-five-of-nine";
		}

		if(taxiLocationCounter ===6) {
			return "slot-six-of-nine";
		}

		if(taxiLocationCounter ===7) {
			return "slot-seven-of-nine";
		}

		if(taxiLocationCounter ===8) {
			return "slot-eight-of-nine";
		}

		if(taxiLocationCounter ===9) {
			return "slot-nine-of-nine";
		}
	};

	var createTrafficLightClass = function(taxiLocationCounter){
		if(taxiLocationCounter ===1) {
			return ".one-of-nine";
		}

		if(taxiLocationCounter ===2) {
			return ".two-of-nine";
		}

		if(taxiLocationCounter ===3) {
			return ".three-of-nine";
		}

		if(taxiLocationCounter ===4) {
			return ".four-of-nine";
		}

		if(taxiLocationCounter ===5) {
			return ".five-of-nine";
		}

		if(taxiLocationCounter ===6) {
			return ".six-of-nine";
		}

		if(taxiLocationCounter ===7) {
			return ".seven-of-nine";
		}

		if(taxiLocationCounter ===8) {
			return ".eight-of-nine";
		}

		if(taxiLocationCounter ===9) {
			return ".nine-of-nine";
		}
	};

	function TrafficLight(taxiLocationCounter){
		var className = createTrafficLightClass(taxiLocationCounter);
		var trafficLightElement = document.querySelector(className);

		this.makeGreen = function(){
			trafficLightElement.classList.add("lights-go");	
			trafficLightElement.classList.remove("lights-slowdown");
			trafficLightElement.classList.remove("lights-stop");
					
		}

		this.makeOrange = function(){
			trafficLightElement.classList.add("lights-slowdown");
			trafficLightElement.classList.remove("lights-go");
			trafficLightElement.classList.remove("lights-stop");
			
		}

		this.makeRed = function(){
			trafficLightElement.classList.add("lights-stop");
			trafficLightElement.classList.remove("lights-go");
			trafficLightElement.classList.remove("lights-slowdown");
			
		}

		this.color = function(){
			if (trafficLightElement.classList.contains("lights-go")){
			    return "green";
			}
			if (trafficLightElement.classList.contains("lights-slowdown")){
    			return "orange";
			}
			if (trafficLightElement.classList.contains("lights-stop")){
    			return "red";
			}
		}
};
