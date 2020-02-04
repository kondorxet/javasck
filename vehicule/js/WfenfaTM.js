class Vehicule {
	
	constructor() {
		this.name = "vehicule";
	}


}

class Velo extends Vehicule {

	constructor () {
		super();
		this.name - "velo"
		this.roues = 4;
		this.portes = 0
		this.selle = 1
		this.pedales = 2
		this.freinarriere = false
	};

}

class BMX extends Velo {
	constructor(name) {
		this.name = "BMX";
		this.pneusize = 24
		this.freinarriere = true
	}

}

const test_velo = () => {

	console.log("test velo");

	let monVelo = new BMX('mon BMX cruiser');

}
