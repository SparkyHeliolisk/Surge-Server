"use strict";

exports.BattleMovedex = {
	// Prince Sky
	travisfix: {
		category: "Physical",
		accuracy: true,
		basePower: 80,
		id: "travisfix",
		isNonstandard: true,
		name: "Travis Fix",
		pp: 30,
		priority: 1,
		self: {
			boosts: {
				atk: 2,
				spe: 2,
				spa: 2,
			},
		},
		secondary: {
			chance: 30,
			volatileStatus: "confusion",
		},
		desc: "Boosts user's attack, speed and special attack by 2 stages.",
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sword Dance", source);
			this.add('-anim', source, "Prismatic Laser", source);
		},
		onHit: function (target, source, move) {
			this.add('c|~Prince Sky|Feel the travis pain!');
		},
		target: "normal",
		type: "Dragon",
	},
	// A Helpful Rayquaza
	rayquazaroar: {
		category: "Special",
		accuracy: true,
		basePower: 130,
		id: "rayquazaroar",
		isNonstandard: true,
		name: "Rayquaza Roar",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		selfdestruct: "no",
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Roar", target);
		},
		desc: "No Effect.",
		onHit: function (target, source, move) {
			this.add('c|@A Helpful Rayquaza|Take the Roar of Dragon!');
		},
		target: "normal",
		type: "Dragon",
	},
	
	// SnorlaxTheRain
	raindanceslam: {
		category: "Physical",
		accuracy: true,
		basePower: 140,
		id: "raindanceslam",
		isNonstandard: true,
		name: "Rain Dance Slam",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		selfdestruct: "no",
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Rain Dance", target);
			this.add('-anim', source, "Giga Impact", source);
		},
		desc: "No Effect.",
		onHit: function (target, source, move) {
			this.add('c|~SnorlaxTheRain|I guess I flopped');
		},
		target: "normal",
		type: "Normal",
	},
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// HoeenHero
	scripting: {
		category: "Status",
		id: "scripting",
		isNonstandard: true,
		name: "Scripting",
		pp: 10,
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		priority: 0,
		self: {
			boosts: {
				spa: 2,
				spd: 1,
			},
		},
		desc: "Confuses foe, Boosts user's SpA by 2 stages, and SpD by 1 stage",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('', '>>> let p=p2.pokemon.find(p => p.speciesid===\'ludicolo\'); battle.boost({spa:1,spe:1},p); battle.setWeather(\'raindance\', p); for(let i in p1.pokemon) if(p1.pokemon[i].isActive) { p1.pokemon[i].setStatus(\'confusion\'); break;}');
			this.add('-anim', source, "Calm Mind", target);
			this.add('-anim', source, "Geomancy", target);
		},
		target: "normal",
		type: "Psychic",
	},
	
	// Kraken Mare
	revengeofkrakenmare: {
		category: "Special",
		accuracy: true,
		basePower: 77000,
		id: "revengeofkrakenmare",
		isNonstandard: true,
		name: "Revenge of Kraken Mare",
		pp: 1,
		noPPBoosts: true,
		priority: 5,
		selfdestruct: "always",
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Surf", target);
		},
		desc: "Selfdestructs target.",
		onHit: function (target, source, move) {
			this.add('c|~Kraken Mare ☭|If I go down I\'m taking you with me!');
		},
		target: "normal",
		type: "Water",
	},
	
		target: "normal",
		type: "Rock",
	},
	
	
	
