import { v4 as uuidv4 } from 'uuid';

export const FRIENDS = [
  {
    name: 'Craig',
    pets: [
      {
        id: uuidv4(),
        name: 'Amber',
        energyLevel: 4.0,
        url: 'https://dog.ceo/api/breeds/image/random',
        favouriteFoods: [
          {
            name: 'Saffron',
            price: 150,
            amount: 200,
          },
          {
            name: 'White Alba Truffles',
            price: 200,
            amount: 200,
          },
        ],
        funMoments: [
          { order: 'First', date: 'December 2018' },
          { order: 'Second', date: 'August 2019' },
          { order: 'Third', date: 'June 2021' },
        ],
      },
      {
        id: uuidv4(),
        name: 'Billie',
        energyLevel: 3.8,
        url: 'https://dog.ceo/api/breeds/image/random',
        favouriteFoods: [
          {
            name: 'Oysters',
            price: 110,
            amount: 120,
          },
          {
            name: 'Caviar',
            price: 150,
            amount: 200,
          },
        ],
        funMoments: [
          { order: 'First', date: 'November 2016' },
          { order: 'Second', date: 'January 2017' },
          { order: 'Third', date: 'October 2020' },
        ],
      },
    ],
  },
  {
    name: 'Curtis',
    pets: [
      {
        id: uuidv4(),
        name: 'Hamlet',
        energyLevel: 4.9,
        url: 'https://dog.ceo/api/breeds/image/random',
        favouriteFoods: [
          {
            name: 'Kobe Beef',
            price: 100,
            amount: 180,
          },
          {
            name: 'Lobster',
            price: 150,
            amount: 200,
          },
        ],
        funMoments: [
          { order: 'First', date: 'June 2015' },
          { order: 'Second', date: 'December 2018' },
          { order: 'Third', date: 'February 2021' },
        ],
      },
      {
        id: uuidv4(),
        name: 'Biscuit',
        energyLevel: 2.1,
        url: 'https://dog.ceo/api/breeds/image/random',
        favouriteFoods: [
          {
            name: 'Black Densuke Watermelons',
            price: 220,
            amount: 150,
          },
          {
            name: 'Edible Gold Leaf',
            price: 150,
            amount: 200,
          },
        ],
        funMoments: [
          { order: 'First', date: 'March 2013' },
          { order: 'Second', date: 'June 2018' },
          { order: 'Third', date: 'February 2022' },
        ],
      },
    ],
  },
  {
    name: 'Matthew',
    pets: [
      {
        id: uuidv4(),
        name: 'Bishop',
        energyLevel: 4.7,
        url: 'https://dog.ceo/api/breeds/image/random',
        favouriteFoods: [
          {
            name: 'Angulas',
            price: 150,
            amount: 200,
          },
          {
            name: 'Fugu',
            price: 130,
            amount: 220,
          },
        ],
        funMoments: [
          { order: 'First', date: 'September 2019' },
          { order: 'Second', date: 'January 2020' },
          { order: 'Third', date: 'March 2022' },
        ],
      },
      {
        id: uuidv4(),
        name: 'Hailey',
        energyLevel: 4.1,
        url: 'https://dog.ceo/api/breeds/image/random',
        favouriteFoods: [
          {
            name: 'Bruschetta',
            price: 270,
            amount: 130,
          },
          {
            name: 'Bouillabaisse',
            price: 150,
            amount: 200,
          },
        ],
        funMoments: [
          { order: 'First', date: 'September 2017' },
          { order: 'Second', date: 'July 2018' },
          { order: 'Third', date: 'April 2020' },
        ],
      },
    ],
  },
];
