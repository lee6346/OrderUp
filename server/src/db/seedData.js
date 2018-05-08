const _ = require('lodash');
const faker = require('faker');
const { Db, MongoClient } = require('mongodb');
const MIN_CHEFS = 10;
const CHEFS_TO_ADD = 20;
const LATITUDE = 47.7546262;
const LONGITUDE = -122.1753378;

const ratingsRange = {
  min: 0,
  max: 5,
  precision: 1,
};

const SPECIALTIES = ['Italian', 'Greek', 'Seafood', 'Japanese', 'Vietnamese', 'American', 'Fast Food', 'Fusion'];

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log('failed connection: ' + err);
  }
  const db = client.db('ChefTank');
  const chefsCollection = db.collection('chefs');
  chefsCollection.count({}, function(err, count) {
    if (err) {
      console.log('failed to query count: ' + err);
    }
    if (count < MIN_CHEFS) {
      let chefs = [];
      for (let i = 0; i < CHEFS_TO_ADD; i++) {
        chefs.push(createChefs());
      }
      console.log(chefs);
      chefsCollection.insertMany(chefs, function(err, res) {
        if (err) {
          console.log('failed to insert data: ' + err);
        }

        client.close();
      });
    }
  });
});

function createChefs() {
  let id = getObjectId();
  return {
    name: faker.name.findName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCode(),
    },
    geoPoint: {
      type: 'Point',
      coordinates: [
        faker.random.number(generateRandomCoordinate(LONGITUDE)),
        faker.random.number(generateRandomCoordinate(LATITUDE)),
      ],
    },
    menuBook: [], //_.times(~~(Math.random() * 5), createMenus()),
    ratings: faker.random.number(ratingsRange),
    specialty: [], //generateSpecialties(),
  };
}

function createMenus() {
  return {
    name: faker.lorem.words(3),
    cuisineType: SPECIALTIES[~~(Math.random() * SPECIALTIES.length)],
    price: faker.random.number({ min: 5.99, max: 12.99, precision: 4 }),
    glutenFree: faker.random.boolean,
    description: faker.lorem.sentences(3),
  };
}

function generateRandomCoordinate(start) {
  return {
    min: start - 1,
    max: start + 1,
  };
}

function generateSpecialties() {
  let amount = 3;
  let specialties = [];
  for (let i = 0; i < amount; i++) {
    specialties.push(SPECIALTIES[~~(Math.random() * SPECIALTIES.length)]);
  }
  return specialties;
}
