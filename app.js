
var body = document.querySelector("body");

body.onkeydown = function(e){
    //e.keyCode - will capture the key codes
var keyName = keyCodeName(e.keyCode)
	displayMessage(keyName);

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