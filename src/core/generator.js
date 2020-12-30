/**
 * generate a number between 0-{max}, include 0 but not include {max}
 * @param {number} max Max value excluded
 */
function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

/**
 * pick one random item in a list
 * @param {array} items list of items
 */
function pickOne(items) {
  return items[randomIndex(items.length)];
}

/**
 * generate a unique ID (local)
 */
function randomId() {
  const now = new Date().getTime();
  const rand = randomIndex(9999999);
  return `${now}-${rand}`;
}

function randomLevel(max) {
  return randomIndex(max) + 1;
}

export function generateContract() {
  const location = pickOne(locations);
  const prefix = pickOne(prefixes);
  const suffix = pickOne(suffixes);
  const name = `${prefix} ${location} ${suffix}`;
  const skill = pickOne(skills);
  const level = randomLevel(MAX_LEVEL);
  const target = pickOne(targets);
  return {
    id: randomId(),
    base: location,
    name,
    target,
    skills: {
      [skill]: level
    }
  };
}

export function formatSkills(bag) {
  return Object.keys(bag).map(key => {
    const sindex = skills.indexOf(key);
    return {
      skill: skillNames[sindex],
      level: bag[key]
    };
  });
}

const MAX_LEVEL = 5;

const targets = [
  "Abberathine Horns",
  "Admiral Proclar's Pipe",
  "Alchemical Chalice",
  "Ancient Seal",
  "Blood of Innocence",
  "Box of Tripyxis"
];

const skills = [
  "agility",
  "lockpicking",
  "perception",
  "bruteforce",
  "demolition",
  "engineering",
  "trapdisarmament",
  "counterthaumaturgy",
  "deception"
];

const skillNames = [
  "Agility",
  "Lockpicking",
  "Perception",
  "Brute Force",
  "Demolition",
  "Engineering",
  "Trap Disarmament",
  "Counter-Thaumaturgy",
  "Deception"
];

const locations = [
  "Bunker",
  "Laboratory",
  "Mansion",
  "Prohibited Library",
  "Records Office",
  "Repository",
  "Smuggler's Den",
  "Tunnels",
  "Underbelly"
];

const prefixes = [
  "Sleeping",
  "Waking",
  "Burning",
  "Freezing",
  "Shocking",
  "Blasting",
  "Painful",
  "Wailing",
  "Screaming"
];

const suffixes = [
  "of Hate",
  "of Hell",
  "of Pain",
  "of Ice",
  "of Fire",
  "of Lightning",
  "of Thunder",
  "of Storm",
  "of Silence",
  "of Darkness",
  "of Light"
];
