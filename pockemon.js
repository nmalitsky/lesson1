class Pokemon {
	constructor (name, level) {
		this.name = name;
		this.level = level;
	}

	// show Pokemon name and level
	show() {
		console.log(`Pokemon '${this.name}', level: ${this.level}`)
	}

	// override valueOf for Pokemon object
	valueOf() {
		return isNaN(this.level) ? 0 : this.level; // check for valid number value
	}
}

class PokemonList extends Array {
	constructor (...pokemons) {
 		super(...pokemons);
	}

	// add Pokekon to the end of list
	add(name, level) {
		this.push(new Pokemon(name, level));
	}

	// show pokemoms info and list length
	show() {
		this.forEach(pokemon => pokemon.show())
		console.log(`----------------\nTotal in list: ${this.length}\n`);
	}

	// get pockemon with max level in list
	max() {
		let maxLevel = Math.max(...this);
		let pokemonIndex = this.map(pokemon => pokemon.level).indexOf(maxLevel);
		return this[pokemonIndex];
	}
}


// generate 'lost' list of pokemomns
let lost = new PokemonList(
	new Pokemon('Zirk', 3),
	new Pokemon('Zaza', 5),
	new Pokemon('Kirk', 1)
);


// generate 'found' list of pokemomns
let found = new PokemonList(
	new Pokemon('Abba', 7),
	new Pokemon('Kevin', 5),
	new Pokemon('Fork', 1)
);

// add some pokemons to the 'lost' list
lost.add('Mara', 8);
lost.add('Loter', 4);

// add some pokemons to the 'found' list
found.add('Zorg', 111);
found.add('Mixer', 1);

console.log('Lost list:');
lost.show();

console.log('Found list:');
found.show();

console.log('Move first pokemon from lost list to found list (use Array methods)\n');
found.push(lost.shift()); 

console.log('Lost list (2):\n');
lost.show();

console.log('Found list (2):\n');
found.show();

console.log('Pokemon with max level for found list:');
found.max().show();


