//  Q1: Map data to frontend format. The main element is location key
// and we need to map all data to it.

function solution(location, config) {
  const solution = [
    { config_key: 100, location_key: 32, autoassign: 1 },
    {
      config_key: 100,
      location_key: 22,
      autoassign: 1,
    },
  ];
  const all = [];

  for (let i = 0; i < location.length; i++) {
    const { location_key, autoassign } = location[i];
    for (let j = 0; j < location_key.length; j++) {
      const obj = {
        location_key: location_key[j],
        config_key: config[i].dataValues.config_key,
        autoassign: autoassign,
      };
      all.push(obj);
    }
  }
  return all;
}

const loc = [
  {
    /*
      za svaki objekat, da odradim for petlju za location_key
      gdje cu napraviti objekat 
      da config_key, bude element[i] i dodijeli tu vrijednost location elementu[i]
      */
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];
const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

console.log(solution(loc, bulkConfig));
