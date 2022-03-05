const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    fname: 'Al',
    lname: 'Esmonde',
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    address1: '123 Somewhere Lane',
    city: 'New Orleans',
    state: 'LA',
    zip: '11111'
  },
  {
    fname: 'Jill',
    lname: 'Willow',
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    address1: '111 Other Lane',
    city: 'New Orleans',
    state: 'LA',
    zip: '11111'
  },
  {
    fname: 'Jill',
    lname: 'Willow',
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    address1: '111 Other Lane',
    city: 'New Orleans',
    state: 'LA',
    zip: '11111'
  },
  {
    fname: 'Jill',
    lname: 'Willow',
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    address1: '111 Other Lane',
    city: 'New Orleans',
    state: 'LA',
    zip: '11111'
  },
  {
    fname: 'Donna',
    lname: 'Jiri',
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'Weather',
    address1: '11 Carhart Drive',
    city: 'Sacramento',
    state: 'CA',
    zip: '77711'
  },
  {
    fname: 'Jill',
    lname: 'Larnout',
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    address1: '99 Brick Lane',
    city: 'New York',
    state: 'NY',
    zip: '22222'
  },
  {
    fname: 'Henry',
    lname: 'Napleton',
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: '$3@tt1#123!',
    address1: '1919 Seahawk Drive',
    city: 'Seattle',
    state: 'WA',
    zip: '44444'
  },
  {
    fname: 'Tim',
    lname: 'Penniell',
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'Chin@4Eva',
    address1: '18 Xi Lane',
    city: 'ShinLi',
    state: 'HK',
    zip: '99999'
  },
  {
    fname: 'Missy',
    lname: 'Sabbin',
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
    address1: '11 Demway Rd.',
    city: 'Washington',
    state: 'DC',
    zip: '11111'
  },
  {
    fname: 'Jazmin',
    lname: 'McCarthur',
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'p@ssword1983',
    address1: '99 Hightower',
    city: 'Chicago',
    state: 'IL',
    zip: '61111'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
