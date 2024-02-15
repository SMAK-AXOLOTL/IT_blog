import React from 'react';
import './App.css';
import HeaderComponent from "./components/Header Component/Header";
import AdComponent from "./components/Ad Component/Ad";
import NavBarComponent from "./components/NavBar Component/NavBar";

function App() {
    function Scrolldown() {
        window.scroll(0, 102);
    }

    window.onload = Scrolldown;

    return (
        <div className="container">
            <AdComponent/>
            <HeaderComponent/>
            <NavBarComponent/>
            <div className="ContentComponent">Starmagius (Starmie) @ Choice Specs
                Ability: Levitate
                Tera Type: Water
                Fusion: Mismagius
                EVs: 252 SpA / 4 SpD / 252 Spe
                Timid Nature
                IVs: 0 Atk
                - Moongeist Beam
                - Surf
                - Moonblast
                - Mystical Fire
                - Menacing Moonraze Maelstrom
                - Flamethrower
                - Thunderbolt
                - Power Gem
                - Extreme Evoboost

                Kingcario (Kingdra) @ Scope Lens
                Ability: Sniper
                Tera Type: Water
                Fusion: Lucario
                EVs: 252 SpA / 4 SpD / 252 Spe
                Modest Nature
                IVs: 0 Atk
                - Water Shuriken
                - Draco Meteor
                - Aura Sphere
                - Flash Cannon
                - Nasty Plot
                - Focus Energy

                Kangasnite (Kangaskhan) @ Life Orb
                Ability: Scrappy
                Tera Type: Normal
                Fusion: Dragonite
                Alt: a
                EVs: 252 Atk / 4 SpD / 252 Spe
                Jolly Nature
                - Extreme Speed
                - Drain Punch
                - Earthquake
                - Aqua Tail
                - Extreme Evoboost

                Latialix (Latias) (F) @ Leftovers
                Ability: Levitate
                Tera Type: Dragon
                Fusion: Steelix
                EVs: 252 HP / 4 Def / 252 SpD
                Calm Nature
                IVs: 0 Atk
                - Psychic Terrain
                - Defog
                - Earth Power
                - Draco Meteor
                - Genesis Supernova

                Pyukuclops (Pyukumuku) @ Eviolite
                Ability: Unaware
                Tera Type: Water
                Fusion: Dusclops
                EVs: 252 HP / 4 Def / 252 SpD
                Calm Nature
                - Recover
                - Night Shade
                - Toxic
                - Soak
                - Sticky Web
                - G-Max Cannonade
                - G-Max Vine Lash
                - G-Max Wildfire
                - G-Max Stonesurge
                - G-Max Volcalith
                - G-Max Centiferno
                - Aqua Ring
                - Baton Pass
                - Ingrain

                Yanpeon (Yanmega) @ Weakness Policy
                Ability: Tinted Lens
                Tera Type: Bug
                Fusion: Espeon
                EVs: 252 SpA / 4 SpD / 252 Spe
                Modest Nature
                IVs: 0 Atk
                - Endure
                - Quiver Dance
                - Bug Buzz
                - Stored Power
                - Protect
                - Flamethrower
                - Earth Power

                Garlosion (Garchomp) @ Rocky Helmet
                Ability: Rough Skin
                Tera Type: Dragon
                Fusion: Typhlosion
                EVs: 252 Atk / 4 SpD / 252 Spe
                Jolly Nature
                - V-create
                - Stealth Rock
                - Dragon Claw
                - Aqua Tail
                - Dragon Hammer
                - Heart Swap

                Flyvile (Flygon) @ Focus Sash
                Ability: Levitate
                Tera Type: Ground
                Fusion: Weavile
                EVs: 252 Atk / 4 SpD / 252 Spe
                Adamant Nature
                - Counter
                - Dragon Dance
                - Earthquake
                - Ice Punch
                - Mirror Coat

                Tyrangrowth (Tyranitar) @ Smooth Rock
                Ability: Sand Stream
                Shiny: Yes
                Tera Type: Rock
                Fusion: Tangrowth
                EVs: 252 HP / 4 Atk / 252 SpD
                Careful Nature
                - Stealth Rock
                - Leech Seed
                - Power Whip
                - Stone Edge
                - U-turn

                Dugroc (Dugtrio) @ Life Orb
                Ability: Sand Force
                Shiny: Yes
                Tera Type: Ground
                Fusion: Lycanroc
                EVs: 252 Atk / 4 SpD / 252 Spe
                Jolly Nature
                - Accelerock
                - Earthquake
                - Bulk Up
                - Iron Head
                - Bullet Punch
                - Double Iron Bash
                - Mighty Cleave

                Regicor (Registeel) @ Leftovers
                Ability: Clear Body
                Shiny: Yes
                Tera Type: Steel
                Fusion: Gliscor
                EVs: 2520 HP / 252 Atk / 252 Def / 252 SpD
                Sassy Nature
                IVs: -165 Spe
                - Curse
                - Defog
                - Roost
                - Steel Wing
                - Revival Blessing
                - Sappy Seed
                - Zippy Zap
                - Gyro Ball

                Kangasnite (Kangaskhan) @ Life Orb
                Ability: Scrappy
                Shiny: Yes
                Tera Type: Normal
                Fusion: Dragonite
                Alt: a
                EVs: 252 Atk / 4 SpD / 252 Spe
                Adamant Nature
                - Dragon Dance
                - Brick Break
                - Extreme Speed
                - Earthquake
                - Swords Dance

                Lucamime (Lucario) @ Life Orb
                Ability: Technician
                Tera Type: Fighting
                Fusion: Mr. Mime
                EVs: 252 SpA / 4 SpD / 252 Spe
                Timid Nature
                IVs: 30 Atk
                - Draining Kiss
                - Nasty Plot
                - Vacuum Wave
                - Hidden Power [Ice]
                - Tail Glow
                - Tachyon Cutter
                - twinbeams

                Regizing (Registeel) @ Black Sludge
                Ability: Levitate
                Shiny: Yes
                Tera Type: Steel
                Fusion: Weezing
                EVs: 2520 HP / 252 Atk / 252 Def / 252 SpD
                Serious Nature
                IVs: -117 Spe
                - Toxic
                - Gyro Ball
                - Hammer Arm
                - Curse
                - Revival Blessing
                - Sappy Seed
                - Zippy Zap
                - Steel Wing

                Clefblade (Clefable) @ Eviolite
                Ability: Unaware
                Shiny: Yes
                Tera Type: Fairy
                Fusion: Doublade
                EVs: 252 HP / 4 Atk / 252 SpD
                Sassy Nature
                - Spectral Thief
                - Play Rough
                - Protect
                - Zen Headbutt
                - Shadow Sneak
                - Detect
                - Combat Torque
                - Extreme Evoboost
                - Rage Fist
                - Last Respects
                - Bitter Blade

                Estile (Espeon) @ Weakness Policy
                Ability: Unburden
                Shiny: Yes
                Tera Type: Psychic
                Fusion: Sceptile
                EVs: 252 SpA / 4 SpD / 252 Spe
                Modest Nature
                IVs: 0 Atk
                - Stored Power
                - Endure
                - Energy Ball
                - Dazzling Gleam
                - Vacuum Wave
                - Protect
                - Recover

                Dewzor (Dewgong) @ Life Orb
                Ability: Technician
                Shiny: Yes
                Tera Type: Water
                Fusion: Scizor
                EVs: 252 HP / 252 Atk / 4 SpD
                Adamant Nature
                - Bullet Punch
                - Aqua Jet
                - Ice Shard
                - First Impression
                - Shadow Sneak
                - Mach Punch
                - Jet Punch

                Drifbcor (Drifblim) @ Toxic Orb
                Ability: Poison Heal
                Tera Type: Ghost
                Fusion: Gliscor
                EVs: 248 HP / 8 SpA / 252 SpD
                Calm Nature
                - Strength Sap
                - Trick
                - Shadow Ball
                - Stealth Rock
                - Toxic
                - G-Max Resonance

                Lankiss (Lanturn) @ Leftovers
                Ability: Volt Absorb
                Shiny: Yes
                Tera Type: Water
                Fusion: Togekiss
                EVs: 252 HP / 252 SpA / 4 SpD
                Modest Nature
                IVs: 0 Atk
                - Tail Glow
                - Surf
                - Thunderbolt
                - Air Slash
                - Aeroblast

                Ninetile (Ninetales) @ Heat Rock
                Ability: Drought
                Shiny: Yes
                Tera Type: Fire
                Fusion: Sceptile
                EVs: 252 SpA / 4 SpD / 252 Spe
                Timid Nature
                IVs: 0 Atk
                - Fire Blast
                - Solar Beam
                - Synthesis
                - Psyshock
                - Hydro Steam

                Poryvern (Porygon-Z) @ Choice Scarf
                Ability: Adaptability
                Shiny: Yes
                Tera Type: Normal
                Fusion: Noivern
                Alt: c
                EVs: 252 SpA / 4 SpD / 252 Spe
                Timid Nature
                IVs: 0 Atk
                - Boomburst
                - Clanging Scales
                - Flamethrower
                - Thunderbolt

                Sylnite (Sylveon) @ Pixie Plate
                Ability: Pixilate
                Shiny: Yes
                Tera Type: Fairy
                Fusion: Dragonite
                Alt: b
                EVs: 252 HP / 252 Atk / 4 SpD
                Adamant Nature
                - Extreme Speed
                - Aqua Jet
                - Brick Break
                - Earthquake
                - Shift Gear

                Tyranfeon (Tyranitar) @ Leftovers
                Ability: Chlorophyll
                Shiny: Yes
                Tera Type: Rock
                Fusion: Leafeon
                EVs: 252 Atk / 4 SpD / 252 Spe
                Adamant Nature
                - Focus Energy
                - Stone Edge
                - Leaf Blade
                - Power-Up Punch
                - Solar Blade
                - Mighty Cleave
                - G-Max Steelsurge
                - Spore

                Metareloom (Metagross) @ Life Orb
                Ability: Technician
                Tera Type: Steel
                Fusion: Breloom
                EVs: 252 Atk / 4 SpD / 252 Spe
                Jolly Nature
                - Bullet Punch
                - Mach Punch
                - Explosion
                - Stealth Rock
                - Shadow Sneak
                - Ice Shard
                - Jet Punch
                - Fell Stinger

                Keceus (Kecleon) @ Aguav Berry
                Ability: Protean
                Tera Type: Normal
                Fusion: Arceus-Ghost
                EVs: 252 HP / 252 Atk / 4 SpD
                Adamant Nature
                - Iron Head
                - Shadow Sneak
                - Shift Gear
                - Thousand Arrows
                - Extreme Speed
                - Sacred Sword
                - Light That Burns the Sky
                - Baneful Bunker
                - U-turn
                - V-create
                - Fell Stinger
            </div>
            <div className="FooterComponent">Footer</div>
        </div>
    );
}

export default App;
