var car = {
		make: "Honda",
		model: "Fit",
		color: "Blue Raspberry",
		mileage: 3000,
		isWorking: true,

		driveToWork: function() {
				alert("old mileage: " + this.mileage);
				this.mileage = this.mileage + 8;
				alert("New mileage: " + this.mileage);
		},

		driveAroundWorld: function() {
				alert("Old mileage: " + this.mileage);
				this.mileage = this.mileage + 24000;
				alert("New Mileage: " + this.mileage);
				alert("car needs a tunep!");

				this.isWorking = false;
		},

		getTuneUp: function() {
				alert("Car is readty to go!");
				this.isWorking = true;
		},

		honk: function() {
				alert("Honk! Honk!");
		},

		showStats: function() {
		console.log("make: " + this.make);
		console.log("Model: " + this.model);
		console.log("Mileage: " + this.mileage);
		console.log("Is working: " + this.isWorking);
		console.log("----------------------------------");
		},

};

//function showStats() {
		//console.log("make: " + car.make);
		//console.log("Model: " + car.model);
		//console.log("Mileage: " + car.mileage);
		//console.log("Is working: " + car.isWorking);
		//console.log("----------------------------------");

document.onkeyup = function(event) {
		var letter = event.key.toLowerCase();
		// var letter = String.fromCharCode(event.which).toLowerCase();
		if (letter === "h") {
				car.honk();
		}
		if (letter === "d") {
				car.driveToWork();
		}
		if (letter === "w") {
				car.driveAroundWorld();
		}
		if (letter === "t") {
				car.getTuneUp();
		} else {
				alert("Please press h, d, w, or t.");
		}
		if (letter === "h" || letter === "d" || letter === "w" || letter === "t" || letter === "h") {
				car.showStats();
				// if (["h","d","w","t"].indexOf(letter) !-- -1)
		}

};
