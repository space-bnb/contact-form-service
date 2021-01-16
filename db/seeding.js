const seeder = require('mongoose-seed');
const db = "mongodb://localhost/workspace-capacity"

const generateRandomCapacity = () => {
  return 10 * Math.floor(Math.random() * 50);
};

const generateRandomOccupancy = (max) => {
  return Math.floor(Math.random() * max);
};

const data = [
  {
    'model': 'workspace-capacity',
    'documents': []
  }
];

for (let i = 0; i < 100; i ++) {

  const max = generateRandomCapacity();
  const current = generateRandomOccupancy(max);

  const workspace = {
    _id: i,
    isAvailable: max > current ? true : false,
    maxCapacity: max,
    currentCapacity: current
  }

  data[0].documents.push(workspace);

}

seeder.connect(db, () => {

  seeder.loadModels(['./db/index.js']);

  seeder.clearModels(['workspace-capacity'], () => {

    seeder.populateModels(data, () => {
      seeder.disconnect();
    });

  });

});