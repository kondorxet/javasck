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

class Voiture extends Vehicule {

	constructor () {
		super();
		this.name - "voiture";
		this.roues = 4;
		this.pedales = 3
		this.portes = 5
		this.moteur = {
			puissance: 60,
			marche: false
		};

	}

	contact () {
		console.log("on allume le contact");
		this.allumerLesVoyants();

	}
	allumerLesVoyants () {
		console.log("les voyants s'allument");
		this.voyants.marche - true;
	}

	eteindreLesVoyants () {
		console.log("les voyants s'éteignent")
		this.voyants.marche = false;
	}

	decontact () {
		console.log("on coupe le contact");
		this.eteindreLesVoyants();
	}

	demarre () {
		console.log("demarre le moteur");
		this.moteur.marche = false;
	}

	coupe () {
		console.log("on coupe le moteur");
	}
}

class BMX extends Velo {
	constructor(name) {
		this.name = "BMX";
		this.pneusize = 24
		this.freinarriere = true
	}

}

class Sportive extends Voiture {

	constructor(name) {
		super(name ||);
		this.name = "sportive"
		this.moteur.puissance = 450;
	}

}

const test_vehicule = () => {

	console.log("test vehicule")

	let maVoiture = new Sportive(ma Porsche Carerra 4 gts);

	console.log(maVoiture.moteur.marche);

	maVoiture.contact();
	maVoiture.demarre();
	
	console.log(maVoiture.moteur.marche)

	let usine = [];
	for (let i = 0; i < 10000; i++) usine.push(new.Sportive());
		console.log(usine)
};

const test_velo = () => {

	console.log("test velo")

	let monVelo = new BMX(mon BMX cruiser);

}
