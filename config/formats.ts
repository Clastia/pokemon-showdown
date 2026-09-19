// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'gen9',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Unrated Random Battle",
		mod: 'gen9',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Free-For-All Random Battle",
		mod: 'gen9',
		team: 'randomFFA',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Random Battle (Blitz)",
		mod: 'gen9',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['[Gen 9] Random Battle', 'Blitz'],
	},
	{
		name: "[Gen 9] Multi Random Battle",
		mod: 'gen9',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod',
		],
	},
	{
		name: "[Gen 9] OU",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail', 'Tera Blast'],
	},
	{
		name: "[Gen 9] Ubers",
		mod: 'gen9',
		ruleset: ['Standard'],
		banlist: ['AG', 'Moody', 'King\'s Rock', 'Razor Fang', 'Baton Pass', 'Last Respects'],
	},
	{
		name: "[Gen 9] UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 9] RU",
		mod: 'gen9',
		ruleset: ['[Gen 9] UU'],
		banlist: ['UU', 'RUBL', 'Light Clay'],
	},
	{
		name: "[Gen 9] NU",
		mod: 'gen9',
		ruleset: ['[Gen 9] RU'],
		banlist: ['RU', 'NUBL', 'Drought', 'Grassy Surge', 'Quick Claw'],
	},
	{
		name: "[Gen 9] PU",
		mod: 'gen9',
		ruleset: ['[Gen 9] NU'],
		banlist: ['NU', 'PUBL', 'Damp Rock'],
	},
	{
		name: "[Gen 9] LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard'],
		banlist: [
			'Basculin-White-Striped', 'Cutiefly', 'Diglett-Base', 'Dunsparce', 'Duraludon', 'Flittle', 'Gastly', 'Girafarig', 'Gligar',
			'Magby', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Shellder', 'Sneasel',
			'Sneasel-Hisui', 'Snivy', 'Stantler', 'Torchic', 'Voltorb-Hisui', 'Vulpix', 'Vulpix-Alola', 'Yanma', 'Moody', 'Heat Rock', 'Baton Pass',
			'Sticky Web',
		],
	},
	{
		name: "[Gen 9] Monotype",
		mod: 'gen9',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Blaziken', 'Deoxys-Normal', 'Deoxys-Attack',
			'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Gliscor', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Iron Bundle',
			'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palafin', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Booster Energy', 'Damp Rock', 'Focus Band',
			'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] CAP",
		desc: "The Create-A-Pok&eacute;mon project is a community dedicated to exploring and understanding the competitive Pok&eacute;mon metagame by designing, creating, and playtesting new Pok&eacute;mon concepts.",
		mod: 'gen9',
		ruleset: ['[Gen 9] OU', '+CAP'],
		banlist: ['Crucibellite', 'Rage Fist'],
	},
	{
		name: "[Gen 9] BSS Reg I",
		mod: 'gen9',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Custom Game",
		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// S/V Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
	},
	{
		name: "[Gen 9] Random Doubles Battle",
		mod: 'gen9',
		gameType: 'doubles',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 9] Doubles OU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Evasion Abilities Clause'],
		banlist: ['DUber', 'Shadow Tag', 'Commander'],
	},
	{
		name: "[Gen 9] Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] Doubles UU",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['[Gen 9] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 9] Doubles LC",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Sleep Clause Mod'],
		banlist: [
			'Basculin-White-Striped', 'Dunsparce', 'Duraludon', 'Girafarig', 'Gligar', 'Misdreavus', 'Murkrow', 'Qwilfish-Hisui', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Stantler', 'Vulpix', 'Vulpix-Alola', 'Yanma',
		],
	},
	{
		name: "[Gen 9] VGC 2023 Reg C",
		mod: 'gen9predlc',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Paldea Pokedex'],
	},
	{
		name: "[Gen 9] VGC 2023 Reg D",
		mod: 'gen9predlc',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets'],
		banlist: ['Walking Wake', 'Iron Leaves'],
	},
	{
		name: "[Gen 9] VGC 2025 Reg I",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 9', 'VGC Timer', 'Open Team Sheets', 'Limit Two Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: { trunc: Math.trunc },
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Champions
	///////////////////////////////////////////////////////////////////

	{
		section: "Champions",
	},
	{
		name: "[Gen 9 Champions] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		mod: 'champions',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'Species Clause', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod', 'Level Clause Mod'],
	},
	{
		name: "[Gen 9 Champions] OU",
		mod: 'champions',
		ruleset: ['Standard'],
		banlist: ['AG', 'Uber', 'Moody', 'Damp Rock', 'King\'s Rock', 'Light Clay', 'Quick Claw', 'Baton Pass', 'Last Respects', 'Shed Tail'],
	},
	{
		name: "[Gen 9 Champions] UU",
		mod: 'champions',
		ruleset: ['[Gen 9 Champions] OU'],
		banlist: ['OU', 'UUBL', 'Drought'],
	},
	{
		name: "[Gen 9 Champions] BSS Reg M-C",
		mod: 'champions',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer'],
	},
	{
		name: "[Gen 9 Champions] BSS Reg M-B",
		mod: 'championsregmb',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer'],
	},
	{
		name: "[Gen 9 Champions] Random Doubles Battle",
		mod: 'champions',
		gameType: 'doubles',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['Obtainable', 'Species Clause', 'Cancel Mod', 'Illusion Level Mod', 'Level Clause Mod'],
	},
	{
		name: "[Gen 9 Champions] VGC 2026 Reg M-C",
		mod: 'champions',
		gameType: 'doubles',
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer', 'Open Team Sheets'],
	},
	{
		name: "[Gen 9 Champions] VGC 2026 Reg M-C (Bo3)",
		mod: 'champions',
		gameType: 'doubles',
		ruleset: ['Flat Rules', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3'],
	},
	{
		name: "[Gen 9 Champions] VGC 2026 Reg M-B",
		mod: 'championsregmb',
		gameType: 'doubles',
		searchShow: false,
		bestOfDefault: true,
		ruleset: ['Flat Rules', 'VGC Timer', 'Open Team Sheets'],
	},
	{
		name: "[Gen 9 Champions] VGC 2026 Reg M-B (Bo3)",
		mod: 'championsregmb',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', 'VGC Timer', 'Force Open Team Sheets', 'Best of = 3'],
	},
	{
		name: "[Gen 9 Champions] Custom Game",
		mod: 'champions',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 50'],
	},
	{
		name: "[Gen 9 Champions] Doubles Custom Game",
		mod: 'champions',
		gameType: 'doubles',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 50'],
	},

	// Draft League
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
		column: 1,
	},
	{
		name: "[Gen 9] Draft",
		mod: 'gen9',
		searchShow: false,
		teraPreviewDefault: true,
		ruleset: ['Standard Draft', 'Min Source Gen = 9'],
	},
		{
		name: "[Gen 9] NatDex 4v4 Mix and Mega Doubles Draft (Bo3)",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Genesect Drives, Primal orbs, Origin orbs, Rusted items, Ogerpon Masks, Arceus Plates, and Silvally Memories with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		mod: 'mixandmega',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard OMs', '+Unobtainable', '+Past', 'VGC Timer', 'Best of = 3', 'Item Clause = 1', 'Evasion Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Min Source Gen = 3', 'Picked Team Size = 4', 'Adjust Level = 50'],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!(item.forcedForme && !item.zMove) && !item.megaStone &&
					!item.isPrimalOrb && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('natdexmod');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+tag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if (((item.itemUser?.includes(species.name) || item.forcedForme === species.name) &&
					!item.megaStone && !item.isPrimalOrb) || (natdex && species.name.startsWith('Necrozma-') &&
						item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each Mega Stone/Primal Orb/Rusted item/Origin item/Ogerpon Mask/Arceus Plate/Silvally Memory.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.join('/') !== pokemon.species.types.join('/')) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]', '[from] format: Mix and Mega');
				}
			}
		},
		onSwitchOut(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				this.add('-end', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
			}
		},
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 9] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 1', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Calyrex-Shadow', 'Ceruledge', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite',
			'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Keldeo',
			'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern',
			'Palkia', 'Palkia-Origin', 'Raging Bolt', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Volcarona', 'Walking Wake', 'Weavile', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Huge Power',
			'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power',
			'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Toxic Debris', 'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock', 'Razor Fang', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Balanced Hackmons",
		desc: `Anything directly hackable onto a set (EVs, IVs, forme, ability, item, and move) and is usable in local battles is allowed.`,
		mod: 'gen9',
		ruleset: [
			'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Moves Clause',
			'Endless Battle Clause', 'Hackmons Forme Legality', 'Species Reveal Clause', 'Terastal Clause',
		],
		banlist: [
			'Calyrex-Shadow', 'Deoxys-Attack', 'Gengar-Mega', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Rayquaza-Mega', 'Regigigas', 'Shedinja', 'Slaking', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out', 'Libero', 'Liquid Ooze', 'Magnet Pull', 'Moody', 'Neutralizing Gas',
			'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Protean', 'Pure Power', 'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'King\'s Rock',
			'Razor Fang', 'Baton Pass', 'Belly Drum', 'Ceaseless Edge', 'Clangorous Soul', 'Dire Claw', 'Electro Shot', 'Fillet Away', 'Imprison', 'Last Respects',
			'Lumina Crash', 'No Retreat', 'Photon Geyser', 'Power Trip', 'Quiver Dance', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Sleep Talk', 'Substitute',
			'Shell Smash', 'Tail Glow', 'V-create',
		],
	},
	{
		name: "[Gen 9] Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Godly Gift Mod'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Koraidon', 'Kyurem-Black', 'Miraidon', 'Arena Trap', 'Gale Wings', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag',
			'Swift Swim', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Alomomola', 'Annihilape', 'Araquanid', 'Arceus', 'Baxcalibur', 'Calyrex-Ice', 'Chien-Pao', 'Chi-Yu', 'Crawdaunt', 'Deoxys-Normal', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dragapult',
			'Espathra', 'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gliscor', 'Gouging Fire', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Iron Hands', 'Kingambit', 'Kyogre',
			'Kyurem', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Palkia-Origin', 'Raging Bolt',
			'Rayquaza', 'Regieleki', 'Reshiram', 'Serperior', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Spectrier', 'Terapagos', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Volcarona', 'Zacian',
			'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
		],
	},
	{
		name: "[Gen 9] Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone, or transform them with Genesect Drives, Primal orbs, Origin orbs, Rusted items, Ogerpon Masks, Arceus Plates, and Silvally Memories with no limit. Mega and Primal boosts based on form changes from gen 7.`,
		mod: 'mixandmega',
		ruleset: ['Standard OMs', 'Evasion Items Clause', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Calyrex-Shadow', 'Koraidon', 'Kyogre', 'Miraidon', 'Moody', 'Shadow Tag', 'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Lucarionite Z',
			'Malamarite', 'Mawilite', 'Medichamite', 'Pidgeotite', 'Raichunite Y', 'Red Orb', 'Scovillainite', 'Starminite', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Calyrex-Ice', 'Ceruledge', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Eternatus', 'Flutter Mane', 'Gholdengo', 'Giratina', 'Gouging Fire',
			'Groudon', 'Ho-Oh', 'Iron Bundle', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Manaphy', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Slaking', 'Sneasler', 'Solgaleo', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Zacian',
			'Zekrom',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.items.get(set.item);
				if (!(item.forcedForme && !item.zMove) && !item.megaStone &&
					!item.isPrimalOrb && !item.name.startsWith('Rusted')) continue;
				const natdex = this.ruleTable.has('natdexmod');
				if (natdex && item.id !== 'ultranecroziumz') continue;
				const species = this.dex.species.get(set.species);
				if (species.isNonstandard && !this.ruleTable.has(`+tag:${this.toID(species.isNonstandard)}`)) {
					return [`${species.baseSpecies} does not exist in gen 9.`];
				}
				if (((item.itemUser?.includes(species.name) || item.forcedForme === species.name) &&
					!item.megaStone && !item.isPrimalOrb) || (natdex && species.name.startsWith('Necrozma-') &&
						item.id === 'ultranecroziumz')) {
					continue;
				}
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [
						`You are limited to one of each Mega Stone/Primal Orb/Rusted item/Origin item/Ogerpon Mask/Arceus Plate/Silvally Memory.`,
						`(You have more than one ${item.name})`,
					];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.species.get(pokemon.m.originalSpecies);
				if (oSpecies.types.join('/') !== pokemon.species.types.join('/')) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]', '[from] format: Mix and Mega');
				}
			}
		},
		onSwitchOut(pokemon) {
			const originalSpecies = this.dex.species.get((pokemon.species as any).originalSpecies);
			if (originalSpecies.exists && pokemon.m.originalSpecies !== originalSpecies.baseSpecies) {
				this.add('-end', pokemon, originalSpecies.requiredItems?.[0] || originalSpecies.requiredItem || originalSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 9] Pokebilities AAA",
		desc: `Pok&eacute;mon have all of their released abilities simultaneously, as well as one ability they cannot normally use.`,
		mod: 'pokebilities',
		ruleset: ['Standard OMs', '!Obtainable Abilities', 'Ability Clause = 2', 'AAA Restricted Abilities', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arcanine-Hisui', 'Arceus', 'Archaludon', 'Azumarill', 'Basculegion', 'Basculin', 'Baxcalibur', 'Blaziken', 'Braviary-Hisui', 'Calyrex-Ice',
			'Calyrex-Shadow', 'Ceruledge', 'Cetitan', 'Chi-Yu', 'Chien-Pao', 'Cinccino', 'Clefable', 'Cloyster', 'Conkeldurr', 'Darkrai', 'Deoxys-Attack',
			'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dragapult', 'Dragonite', 'Drednaw', 'Enamorus-Incarnate', 'Espathra', 'Eternatus', 'Excadrill', 'Floatzel',
			'Flutter Mane', 'Gholdengo', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Hoopa-Unbound', 'Houndstone', 'Iron Bundle',
			'Iron Valiant', 'Kingambit', 'Kingdra', 'Kleavor', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala',
			'Magearna', 'Manaphy', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern', 'Ogerpon-Hearthflame', 'Palkia', 'Palkia-Origin',
			'Poliwrath', 'Porygon-Z', 'Raging Bolt', 'Rayquaza', 'Reshiram', 'Reuniclus', 'Roaring Moon', 'Shaymin-Sky', 'Sneasler', 'Solgaleo', 'Spectrier', 'Ursaluna',
			'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Urshifu-Rapid-Strike', 'Venusaur', 'Victreebel', 'Volcarona', 'Walking Wake', 'Weavile', 'Yanmega', 'Zacian',
			'Zacian-Crowned', 'Zapdos-Galar', 'Zekrom', 'Arena Trap', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Shadow Tag', 'Regenerator > 2', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Baton Pass', 'Shed Tail', 'Stored Power',
		],
		restricted: [
			'Comatose', 'Contrary', 'Emergency Exit', 'Fur Coat', 'Good as Gold', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter',
			'Innards Out', 'Magic Bounce', 'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Quick Draw', 'Simple', 'Speed Boost', 'Stakeout', 'Stench',
			'Tinted Lens', 'Toxic Debris', 'Triage', 'Unburden', 'Water Bubble', 'Wimp Out', 'Wonder Guard',
		],
		onValidateSet(set) {
			const species = this.dex.species.get(set.species);
			const unSeenAbilities = Object.keys(species.abilities)
				.filter(key => key !== 'S' && (key !== 'H' || !species.unreleasedHidden))
				.map(key => species.abilities[key as "0" | "1" | "H" | "S"])
				.filter(ability => ability !== set.ability);
			if (unSeenAbilities.length && this.toID(set.ability) !== this.toID(species.abilities['S'])) {
				for (const abilityName of unSeenAbilities) {
					const banReason = this.ruleTable.check('ability:' + this.toID(abilityName));
					if (banReason) {
						return [`${set.name}'s ability ${abilityName} is ${banReason}.`];
					}
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.ability === this.toID(pokemon.species.abilities['S'])) {
					continue;
				}
				pokemon.m.innates = Object.keys(pokemon.species.abilities)
					.filter(key => key !== 'S' && (key !== 'H' || !pokemon.species.unreleasedHidden))
					.map(key => this.toID(pokemon.species.abilities[key as "0" | "1" | "H" | "S"]))
					.filter(ability => ability !== pokemon.ability);
			}
		},
		onBeforeSwitchIn(pokemon) {
			if (pokemon.m.innates) {
				for (const innate of pokemon.m.innates) {
					if (pokemon.hasAbility(innate)) continue;
					const effect = 'ability:' + this.toID(innate);
					pokemon.volatiles[effect] = this.initEffectState({ id: effect, target: pokemon });
				}
			}
		},
		onSwitchOut(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
		},
		onFaint(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				const innateEffect = this.dex.conditions.get(innate) as Effect;
				this.singleEvent('End', innateEffect, null, pokemon);
			}
		},
		onAfterMega(pokemon) {
			for (const innate of Object.keys(pokemon.volatiles).filter(i => i.startsWith('ability:'))) {
				pokemon.removeVolatile(innate);
			}
			pokemon.m.innates = undefined;
		},
	},
	{
		name: "[Gen 9] Shared Power",
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		mod: 'sharedpower',
		ruleset: ['Standard OMs', 'Evasion Abilities Clause', 'Evasion Items Clause', 'Sleep Moves Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Conkeldurr', 'Deoxys-Attack', 'Eternatus', 'Greninja', 'Kingambit', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Koraidon', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Rayquaza',
			'Regieleki', 'Reshiram', 'Rillaboom', 'Scizor', 'Shaymin-Sky', 'Spectrier', 'Sneasler', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Arena Trap', 'Moody', 'Neutralizing Gas', 'Shadow Tag', 'Speed Boost', 'Stench', 'Sturdy', 'Swift Swim', 'King\'s Rock', 'Leppa Berry', 'Razor Fang', 'Starf Berry',
			'Baton Pass', 'Extreme Speed', 'Last Respects',
		],
		unbanlist: ['Arceus-Bug', 'Arceus-Dragon', 'Arceus-Fire', 'Arceus-Ice'],
		restricted: [
			'Armor Tail', 'Chlorophyll', 'Comatose', 'Contrary', 'Dazzling', 'Fur Coat', 'Gale Wings', 'Good as Gold', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter',
			'Magic Bounce', 'Magic Guard', 'Magnet Pull', 'Mold Breaker', 'Multiscale', 'Poison Heal', 'Prankster', 'Protosynthesis', 'Psychic Surge', 'Pure Power',
			'Quark Drive', 'Queenly Majesty', 'Quick Draw', 'Quick Feet', 'Regenerator', 'Sand Rush', 'Simple', 'Slush Rush', 'Stakeout', 'Stamina', 'Surge Surfer',
			'Technician', 'Tinted Lens', 'Triage', 'Unaware', 'Unburden', 'Water Bubble',
		],
		onValidateRule() {
			if (this.format.gameType !== 'singles') {
				throw new Error(`Shared Power currently does not support ${this.format.gameType} battles.`);
			}
		},
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (pokemon.battle.ruleTable.isRestricted(`ability:${ally.baseAbility}`)) continue;
				if (ally.previouslySwitchedIn > 0) {
					if (pokemon.battle.dex.currentMod !== 'sharedpower' && ['trace', 'mirrorarmor'].includes(ally.baseAbility)) {
						sharedPower.add('noability');
						continue;
					}
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.formats.get('gen9sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + this.toID(ability);
				pokemon.volatiles[effect] = this.initEffectState({ id: effect, target: pokemon });
				if (!pokemon.m.abils) pokemon.m.abils = [];
				if (!pokemon.m.abils.includes(effect)) pokemon.m.abils.push(effect);
			}
		},
	},
	{
		name: "[Gen 9] STABmons",
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		mod: 'gen9',
		ruleset: ['Standard OMs', 'STABmons Move Legality', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Arceus', 'Azumarill', 'Baxcalibur', 'Basculegion-M', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin',
			'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Garchomp', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Gyarados', 'Ho-Oh',
			'Iron Bundle', 'Komala', 'Koraidon', 'Kyogre', 'Kyurem-Base', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lugia', 'Lunala', 'Magearna', 'Meloetta', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia', 'Palkia-Origin', 'Porygon-Z', 'Raging Bolt', 'Rayquaza',
			'Reshiram', 'Roaring Moon', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Thundurus-Therian', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Urshifu', 'Urshifu-Rapid-Strike',
			'Walking Wake', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom', 'Zoroark-Hisui', 'Arena Trap', 'Moody', 'Shadow Tag', 'Damp Rock', 'King\'s Rock', 'Razor Fang',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Ceaseless Edge', 'Clangorous Soul', 'Combat Torque', 'Dire Claw', 'Dragon Energy', 'Electro Shot', 'Esper Wing', 'Extreme Speed', 'Fillet Away',
			'Final Gambit', 'Flower Trick', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Surging Strikes', 'Torch Song', 'Triple Arrows',
			'V-create', 'Victory Dance', 'Water Shuriken', 'Wicked Blow', 'Wicked Torque',
		],
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		mod: 'gen6',
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},

	// National Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex",
	},
	{
		name: "[Gen 9] National Dex",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Terastal Clause'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 8] National Dex",
		mod: 'gen8',
		ruleset: ['Standard NatDex', 'Dynamax Clause'],
		banlist: ['ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
	},

	// National Dex Other Tiers
	///////////////////////////////////////////////////////////////////

	{
		section: "National Dex Other Tiers",
	},
	{
		name: "[Gen 9] National Dex Ubers",
		mod: 'gen9',
		ruleset: ['Standard NatDex', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Shedinja', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex UU",
		mod: 'gen9',
		ruleset: ['[Gen 9] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
	},
	{
		name: "[Gen 9] National Dex RU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Slowbronite'],
	},
	{
		name: "[Gen 9] National Dex LC",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Little Cup'],
		banlist: [
			'Aipom', 'Basculin-White-Striped', 'Clamperl', 'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Dunsparce', 'Duraludon', 'Flittle', 'Girafarig',
			'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Qwilfish-Hisui', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Sneasel-Hisui',
			'Stantler', 'Swirlix', 'Tangela', 'Voltorb-Hisui', 'Woobat', 'Yanma', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Eevium Z', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Aurora Veil', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
		],
	},
	{
		name: "[Gen 9] National Dex Monotype",
		mod: 'gen9',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Terastal Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Chien-Pao', 'Darkrai',
			'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Kangaskhan-Mega', 'Kartana', 'Kingambit', 'Koraidon', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Palafin', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram',
			'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Moody', 'Shadow Tag', 'Power Construct', 'Booster Energy', 'Damp Rock',
			'Focus Band', 'Icy Rock', 'King\'s Rock', 'Leppa Berry', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles",
		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin', 'Espathra', 'Eternatus', 'Genesect', 'Gengar-Mega',
			'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shedinja',
			'Solgaleo', 'Stakataka', 'Terapagos', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Commander', 'Power Construct', 'Shadow Tag', 'Eevium Z', 'Assist', 'Coaching', 'Dark Void', 'Swagger',
		],
	},
	{
		name: "[Gen 9] National Dex Doubles Ubers",
		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'NatDex Mod', '!Gravity Sleep Clause'],
		banlist: ['Shedinja', 'Assist'],
	},
	{
		name: "[Gen 9] National Dex 1v1",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod', 'Nickname Clause', 'Evasion Moves Clause', 'OHKO Clause', 'Species Clause', 'Sleep Moves Clause', 'Terastal Clause', 'Accuracy Moves Clause', 'Picked Team Size = 1', 'Max Team Size = 3'],
		banlist: [
			'Arceus', 'Archaludon', 'Blastoise-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Deoxys-Normal', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Dialga-Origin', 'Dragonite',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Gouging Fire', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kangaskhan-Mega', 'Koraidon', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Melmetal', 'Metagross-Mega', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Cornerstone', 'Palkia',
			'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Solgaleo', 'Terapagos', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta',
			'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Custap Berry', 'Focus Band', 'Focus Sash', 'Fightinium Z + Detect', 'Perish Song',
		],
	},
	{
		name: "[Gen 9] National Dex AG",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod'],
	},
	{
		name: "[Gen 9] National Dex AAA",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', '!Obtainable Abilities', 'Ability Clause = 2', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause', 'Z-Move Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Archeops', 'Baxcalibur', 'Bisharp', 'Blacephalon', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Ceruledge', 'Darkrai', 'Deoxys-Attack',
			'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Enamorus-Incarnate', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Gouging Fire', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Iron Valiant', 'Kangaskhan-Mega', 'Kartana', 'Keldeo', 'Kingambit', 'Koraidon', 'Kyogre', 'Kyurem', 'Kyurem-Black',
			'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Noivern',
			'Palkia', 'Palkia-Origin', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Sneasler', 'Solgaleo', 'Spectrier', 'Urshifu',
			'Urshifu-Rapid-Strike', 'Weavile', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Zygarde-50%', 'Arena Trap', 'Comatose', 'Contrary', 'Fur Coat', 'Good as Gold',
			'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Magic Bounce', 'Magnet Pull', 'Moody', 'Neutralizing Gas',
			'Orichalcum Pulse', 'Parental Bond', 'Poison Heal', 'Pure Power', 'Shadow Tag', 'Simple', 'Speed Boost', 'Stakeout', 'Triage', 'Unburden', 'Water Bubble', 'Wonder Guard', 'King\'s Rock',
			'Light Clay', 'Assist', 'Baton Pass', 'Electrify', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] National Dex BH",
		desc: `Balanced Hackmons with National Dex elements mixed in.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: [
			'Standard AG', 'NatDex Mod', '!Obtainable',
			'Forme Clause', 'Sleep Moves Clause', 'Ability Clause = 2', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'CFZ Clause', 'Terastal Clause', '-CAP',
		],
		banlist: [
			'Cramorant-Gorging', 'Calyrex-Shadow', 'Darmanitan-Galar-Zen', 'Eternatus-Eternamax', 'Greninja-Ash', 'Groudon-Primal', 'Rayquaza-Mega', 'Shedinja', 'Terapagos-Stellar', 'Arena Trap',
			'Contrary', 'Gorilla Tactics', 'Hadron Engine', 'Huge Power', 'Illusion', 'Innards Out', 'Magnet Pull', 'Moody', 'Neutralizing Gas', 'Orichalcum Pulse', 'Parental Bond', 'Pure Power',
			'Shadow Tag', 'Stakeout', 'Water Bubble', 'Wonder Guard', 'Berserk Gene', 'Gengarite', 'Baton Pass', 'Belly Drum', 'Bolt Beak', 'Ceaseless Edge', 'Chatter', 'Double Iron Bash',
			'Electrify', 'Imprison', 'Last Respects', 'Octolock', 'Rage Fist', 'Revival Blessing', 'Shed Tail', 'Shell Smash', 'Sleep Talk',
		],
		restricted: ['Arceus'],
		onValidateTeam(team, format) {
			// baseSpecies:count
			const restrictedPokemonCount = new this.dex.Multiset<string>();
			for (const set of team) {
				const species = this.dex.species.get(set.species);
				if (!this.ruleTable.isRestrictedSpecies(species)) continue;
				restrictedPokemonCount.add(species.baseSpecies);
			}
			for (const [baseSpecies, count] of restrictedPokemonCount) {
				if (count > 1) {
					return [
						`You are limited to one ${baseSpecies} forme.`,
						`(You have ${count} ${baseSpecies} forme${count === 1 ? '' : 's'}.)`,
					];
				}
			}
		},
	},
	{
		name: "[Gen 9] National Dex Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a God (Restricted Pok&eacute;mon) depending on its position in the team. If there is no restricted Pok&eacute;mon, it uses the Pok&eacute;mon in the first slot.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Terastal Clause', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Godly Gift Mod', 'Mega Rayquaza Clause'],
		banlist: [
			'Blissey', 'Calyrex-Shadow', 'Chansey', 'Deoxys-Attack', 'Groudon-Primal', 'Koraidon', 'Miraidon', 'Shuckle', 'Xerneas',
			'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Swift Swim', 'King\'s Rock', 'Quick Claw', 'Assist',
			'Baton Pass', 'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Chi-Yu', 'Chien-Pao', 'Darmanitan-Galar', 'Deoxys-Normal', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Dialga-Origin', 'Dracovish',
			'Dragapult', 'Espathra', 'Eternatus', 'Flutter Mane', 'Genesect', 'Gengar Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hawlucha', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega', 'Kingambit',
			'Kyogre', 'Kyogre-Primal', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marowak-Alola', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Melmetal', 'Metagross-Mega',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Pheromosa', 'Pikachu', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Serperior', 'Shaymin-Sky', 'Smeargle', 'Solgaleo', 'Spectrier', 'Swellow', 'Toxapex', 'Ursaluna', 'Ursaluna-Bloodmoon', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned',
			'Zekrom', 'Power Construct',
		],
	},
	{
		name: "[Gen 9] National Dex Monoletter",
		desc: `All Pok&eacute;mon on a team must have names starting with the same letter.`,
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex', 'Same Letter Clause'],
		banlist: ['Light Clay'],
		unbanlist: ['Ogerpon-Hearthflame', 'Ursaluna-Bloodmoon', 'Walking Wake', 'Yveltal', 'Urshifu', 'Naganadel'],
	},
	{
		name: "[Gen 9] National Dex STABmons",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard NatDex', 'STABmons Move Legality', '!Sleep Clause Mod', 'Sleep Moves Clause', 'Terastal Clause'],
		banlist: [
			'Araquanid', 'Arceus', 'Azumarill', 'Baxcalibur', 'Blastoise-Mega', 'Blaziken-Mega', 'Basculegion', 'Basculegion-F', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chien-Pao', 'Chi-Yu',
			'Cloyster', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack', 'Deoxys-Normal', 'Dialga', 'Dialga-Origin', 'Dracovish', 'Dragapult', 'Dragonite', 'Enamorus-Incarnate', 'Espathra',
			'Eternatus', 'Flutter Mane', 'Garchomp', 'Gengar-Mega', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Gouging Fire', 'Ho-Oh', 'Iron Bundle', 'Kangaskhan-Mega',
			'Kartana', 'Koraidon', 'Komala', 'Kyogre', 'Kyurem', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Incarnate', 'Lilligant-Hisui', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Manaphy', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Miraidon', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Ogerpon-Hearthflame', 'Ogerpon-Wellspring', 'Palkia',
			'Palkia-Origin', 'Porygon-Z', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Silvally', 'Solgaleo', 'Spectrier', 'Tapu Koko', 'Tapu Lele', 'Terapagos',
			'Thundurus-Therian', 'Ursaluna-Bloodmoon', 'Urshifu-Single-Strike', 'Walking Wake', 'Xerneas', 'Xurkitree', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta-Crowned', 'Zekrom',
			'Zoroark-Hisui', 'Zygarde-50%', 'Arena Trap', 'Moody', 'Shadow Tag', 'Power Construct', 'Damp Rock', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass',
			'Last Respects', 'Shed Tail',
		],
		restricted: [
			'Astral Barrage', 'Belly Drum', 'Bolt Beak', 'Chatter', 'Clangorous Soul', 'Dire Claw', 'Double Iron Bash', 'Dragon Energy', 'Electrify', 'Extreme Speed',
			'Fillet Away', 'Final Gambit', 'Fishious Rend', 'Geomancy', 'Gigaton Hammer', 'No Retreat', 'Rage Fist', 'Revival Blessing', 'Shell Smash', 'Shift Gear', 'Thousand Arrows',
			'Trick-or-Treat', 'Triple Arrows', 'V-create', 'Victory Dance', 'Wicked Blow', 'Wicked Torque',
		],
	},
	{
		name: "[Gen 8] National Dex Ubers",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Mega Rayquaza Clause', 'Dynamax Clause'],
		banlist: ['ND AG', 'Ultranecrozium Z', 'Moody', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 9] National Dex Ubers UU",
		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] National Dex Ubers'],
		banlist: [
			'Alomomola', 'Arceus-Normal', 'Arceus-Dark', 'Arceus-Ground', 'Calyrex-Ice', 'Deoxys-Attack', 'Deoxys-Speed', 'Ditto', 'Dondozo', 'Eternatus',
			'Giratina-Origin', 'Groudon-Primal', 'Ho-Oh', 'Kyogre-Primal', 'Lunala', 'Marshadow', 'Mewtwo-Mega-Y', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra',
			'Salamence-Mega', 'Smeargle', 'Yveltal', 'Zacian-Crowned', 'Zygarde-50%',
			// UUBL
			'Arceus-Dragon', 'Arceus-Fairy', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Water', 'Blaziken-Mega', 'Chi-Yu', 'Chien-Pao', 'Dracovish', 'Flutter Mane', 'Groudon',
			'Kyogre', 'Kyurem-Black', 'Rayquaza', 'Shaymin-Sky', 'Zacian', 'Zekrom', 'Power Construct', 'Light Clay', 'Ultranecrozium Z', 'Last Respects',
		],
	},
	{
		name: "[Gen 8] National Dex UU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
	},
	{
		name: "[Gen 8] National Dex RU",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] National Dex UU'],
		banlist: ['ND UU', 'ND RUBL'],
	},
	{
		name: "[Gen 8] National Dex Doubles",
		mod: 'gen8',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'NatDex Mod', 'Evasion Abilities Clause', 'Dynamax Clause'],
		banlist: [
			'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Magearna', 'Melmetal', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base',
			'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Complete', 'Power Construct', 'Shadow Tag',
			'Beat Up', 'Dark Void', 'Eevium Z', 'Guard Split', 'Swagger',
		],
	},
	{
		name: "[Gen 8] National Dex Monotype",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex', 'Same Type Clause', '!Evasion Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Dynamax Clause'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Normal', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja-Bond', 'Greninja-Ash', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Moltres-Galar',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier',
			'Urshifu-Single-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-50%', 'Zygarde-Complete', 'Battle Bond',
			'Power Construct', 'Moody', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8 DLC 1] National Dex AG",
		mod: 'gen8dlc1',
		searchShow: false,
		ruleset: ['Standard AG', 'NatDex Mod'],
	},

	// Past Gens OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens OU",
		column: 4,
	},
	{
		name: "[Gen 8] OU",
		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Sand Veil', 'Shadow Tag', 'Snow Cloak', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 7] OU",
		mod: 'gen7',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 6] OU",
		mod: 'gen6',
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Soul Dew', 'Baton Pass', 'Swagger'],
	},
	{
		name: "[Gen 5] OU",
		mod: 'gen5',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Moves Clause', 'Gems Clause', 'Baton Pass Stat Clause'],
		banlist: ['Uber', 'Arena Trap', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Rush', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Soul Dew', 'Assist', 'Swagger'],
	},
	{
		name: "[Gen 4] OU",
		mod: 'gen4',
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Baton Pass Stat Trap Clause', 'Freeze Clause Mod', 'Sleep Moves Clause', '!Sleep Clause Mod'],
		banlist: ['AG', 'Uber', 'Arena Trap', 'Quick Claw', 'Soul Dew', 'Swagger'],
	},
	{
		name: "[Gen 3] OU",
		mod: 'gen3',
		ruleset: ['Standard', 'One Boost Passer Clause', 'Accuracy Trap Clause', 'Freeze Clause Mod', 'Speed Pass Clause'],
		banlist: ['Uber', 'Smeargle + Ingrain', 'Sand Veil', 'Soundproof', 'Quick Claw', 'Assist', 'Baton Pass + Block', 'Baton Pass + Mean Look', 'Baton Pass + Spider Web', 'Swagger'],
	},
	{
		name: "[Gen 2] OU",
		mod: 'gen2',
		ruleset: ['Standard'],
		banlist: ['Uber', 'Mean Look + Baton Pass', 'Spider Web + Baton Pass'],
	},
	{
		name: "[Gen 1] OU",
		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},

	// Past Gens Doubles OU
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Gens Doubles OU",
		column: 4,
	},
	{
		name: "[Gen 8] Doubles OU",
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag', 'Swagger'],
	},
	{
		name: "[Gen 7] Doubles OU",
		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Power Construct', 'Eevium Z', 'Dark Void', 'Swagger'],
	},
	{
		name: "[Gen 6] Doubles OU",
		mod: 'gen6',
		gameType: 'doubles',
		ruleset: ['Standard Doubles'],
		banlist: ['DUber', 'Soul Dew', 'Dark Void', 'Swagger'],
	},
	{
		name: "[Gen 5] Doubles OU",
		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause', 'Sleep Clause Mod'],
		banlist: ['DUber', 'Shadow Tag', 'Soul Dew', 'Dark Void', 'Gravity', 'Swagger'],
	},
	{
		name: "[Gen 4] Doubles OU",
		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', 'Evasion Abilities Clause'],
		banlist: ['AG', 'Uber', 'Soul Dew', 'Explosion', 'Dark Void', 'Self-Destruct', 'Swagger', 'Thunder Wave'],
		unbanlist: ['Machamp', 'Manaphy', 'Mew', 'Salamence', 'Wobbuffet', 'Wynaut'],
	},
	{
		name: "[Gen 3] Doubles OU",
		mod: 'gen3',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard', '!Switch Priority Clause Mod'],
		banlist: ['Uber', 'Quick Claw', 'Soul Dew', 'Explosion', 'Self-Destruct', 'Swagger'],
		unbanlist: ['Wobbuffet', 'Wynaut'],
	},
];