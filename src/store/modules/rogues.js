export const state = [
  {
    id: "karst",
    name: "Karst, the Lockpick",
    skills: {
      lockpicking: 5,
      perception: 3,
      agility: 2
    }
  },
  {
    id: "tibbs",
    name: "Tibbs, the Giant",
    skills: {
      bruteforce: 5,
      demolition: 4
    }
  },
  {
    id: "isla",
    name: "Isla, the Engineer",
    skills: {
      engineering: 5,
      trapdisarmament: 4
    }
  },
  {
    id: "tullina",
    name: "Tullina, the Catburglar",
    skills: {
      agility: 5,
      lockpicking: 3,
      trapdisarmament: 2
    }
  },
  {
    id: "huck",
    name: "Huck, the Soldier",
    skills: {
      demolition: 3,
      bruteforce: 3,
      lockpicking: 3,
      engineering: 3
    }
  },
  {
    id: "niles",
    name: "Niles, the Interrogator",
    skills: {
      counterthaumuturgy: 5,
      deception: 4
    }
  },
  {
    id: "nenet",
    name: "Nenet, the Scout",
    skills: {
      counterthaumuturgy: 4,
      perception: 5
    }
  },
  {
    id: "vinderi",
    name: "Vinderi, the Dismantler",
    skills: {
      demolition: 5,
      trapdisarmament: 5,
      engineering: 2
    }
  },
  {
    id: "gianna",
    name: "Gianna, the Master of Disguise",
    skills: {
      deception: 5,
      counterthaumuturgy: 3,
      perception: 2
    }
  }
];

export const getters = {
  getRoguesForContract(state) {
    return contract => {
      const { skills } = contract;
      const list = Object.keys(skills).map(id => ({ id, level: skills[id] }));
      const filtered = state.filter(r =>
        list.every(l => r.skills[l.id] && r.skills[l.id] >= l.level)
      );
      return filtered;
    };
  }
};

export const mutations = {};

export const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
