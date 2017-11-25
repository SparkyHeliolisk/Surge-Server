'use strict';

const RandomTeams = require('../../data/random-teams');

class RandomSeasonalRegStaffTeams extends RandomTeams {
	randomSeasonalRegStaffTeam() {
		let team = [];
		let variant = this.random(2);
		let sets = {
			// Admins.
			'~HoeenHero': {
				species: 'Ludicolo',
				ability: 'Programmer\'s Domain',
				item: 'Leftovers',
				gender: 'M',
				moves: [
					['', ''][variant], '', '',
				],
				signatureMove: '',
				evs: {
					spa: ,
					spe: ,
					hp: ,
				},
				nature: '',
			},
			
			
			// Global Leaders:
			'&Opple': {
				species: 'Dragonite',
				ability: 'Multiscale',
				item: 'Weakness Policy',
				gender: 'M',
				moves: ['Fire Punch', 'Dragon Claw', 'Waterfall',
				],
				signatureMove: 'Ancient Orb',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Adamant',
			},
			
			// Global Moderators:
			'@A Helpful Rayquaza': {
				species: 'Rayquaza-Mega',
				ability: 'Draco Stream',
				shiny: true,
				item: 'Lum Berry',
				gender: 'M',
				moves: ['Dragon Ascent', 'Dragon Dance', 'Extreme Speed',
						 ],
				signatureMove: 'Rayquaza Roar',
				evs: {
					atk: 252,
					spe: 252,
				},
				nature: 'Modest',
			},
			
			// Global Drivers:
			'%Serperiorater': {
				species: 'Serperior',
				ability: 'Unnamable',
				item: 'Leftovers',
				gender: 'M',
				moves: ['Psychic', 'Aura Sphere', 'Dark Pulse',
				],
				signatureMove: 'Saber Strike',
				evs: {
					spa: 252,
					spe: 252,
					spd: 4,
				},
				nature: 'Timid',
			},
			
			// Global Voices:
			'+ducktown': {
				species: 'Golduck',
				ability: 'Cloud Nine',
				item: 'Leftovers',
				gender: 'M',
				moves: ['Scald', 'Ice Beam', 'Psychic',
				],
				signatureMove: 'Duck Power',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4,
				},
				nature: 'Modest',
			},
			
			'+xcmr': {
				species: 'Meowth',
				ability: 'Feline Fury',
				item: 'Eviolite',
				gender: 'M',
				moves: ['U-turn', 'Fake Out', 'Knock Off',
				],
				signatureMove: 'Kitty Crush',
				evs: {
					atk: 252,
					spd: 4,
					spe: 252,
				},
				nature: 'Jolly',
			},
		};
		// convert moves to ids.
		for (let k in sets) {
			sets[k].moves = sets[k].moves.map(toId);
			sets[k].baseSignatureMove = toId(sets[k].baseSignatureMove);
		}

		// Generate the team randomly.
		let pool = Dex.shuffle(Object.keys(sets));
		for (let i = 0; i < 6; i++) {
			/*if (i === 1) {
				let monIds = pool.slice(0, 6).map(function (p) {
					return toId(p);
				});
				for (let mon in sets) {
					if (toId(mon) === userid && monIds.indexOf(userid) === -1) {
						pool[1] = mon;
						break;
					}
				}
			}*/
			let set = sets[pool[i]];
			set.level = 100;
			set.name = pool[i];
			if (!set.ivs) {
				set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			} else {
				for (let iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
					set.ivs[iv] = set.ivs[iv] || set.ivs[iv] === 0 ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}
		return team;
	}
}

module.exports = RandomSeasonalRegStaffTeams;
