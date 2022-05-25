import { elementAt, fromEvent, concatMap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { FRIENDS } from './friends';

// IIFE
(() => {})();

// Gof - Observer Pattern and Iterator Pattern missing part

// Arrays(consumer in control-Iterator)
// Observable (stop-producer in control-Observer)
// Node Streams(pause - both in control)

// Differences between loops: forEach, map, filter, ... (Higher-order functions)

// Implement drag and drop --- Enforce order
// const block = document.getElementById('block');
// const mouseDowns$ = fromEvent(block, 'mousedown');
// const mouseMoves$ = fromEvent(block, 'mousemove');
// const mouseUps$ = fromEvent(block, 'mouseup');
// const drags$ = mouseDowns$.pipe(concatMap((mouseMoves$),takeUntil(mouseUps$)
// ))

// Problem 1: Print all the names in an array
// (() => {
//   const friends = [
//     'Craig',
//     'Khaled',
//     'Chris H.',
//     'Charlie',
//     'Curtis',
//     'Matthew',
//     'Jonathan',
//     'James',
//     'Tom',
//     'Saraj',
//   ];

//   for (let counter = 0; counter < friends.length; counter++) {
//     console.log(friends[counter]);
//   }
// })();

// Problem 2: Use forEach to print all the names in an array
// (() => {
//   const friends = [
//     'Craig',
//     'Khaled',
//     'Chris H.',
//     'Charlie',
//     'Curtis',
//     'Matthew',
//     'Jonathan',
//     'James',
//     'Tom',
//     'Saraj',
//   ];

//   friends.forEach((name) => {
//     console.log(name);
//   });
// })();

// Problem 3: Project an array of friends into an array of {id,name} pairs using forEach()
// (() => {
//   const friends = [
//     {
//       id: uuidv4(),
//       name: 'Craig',
//       favouriteMovies: [' The Shawshank Redemption'],
//       favouriteFoods: ['Gyro'],
//     },
//     {
//       id: uuidv4(),
//       name: 'Curtis',
//       favouriteMovies: ['The Godfather'],
//       favouriteFoods: ['Spekulaas'],
//     },
//     {
//       id: uuidv4(),
//       name: 'Matthew',
//       favouriteMovies: ['The Dark Knight'],
//       favouriteFoods: ['Bouillabaisse'],
//     },
//   ];

//   const friendsIdAndNamePairs = [];

//   friends.forEach((friend) =>
//     friendsIdAndNamePairs.push({ id: friend.id, name: friend.name })
//   );

//   console.log(friendsIdAndNamePairs);
// })();

// Problem 4: Implement map()
Array.prototype.map = function (projectionFunction) {
  const results = [];

  this.forEach((item) => results.push(projectionFunction(item)));
  return results;
};

// Problem 5: Use forEach() (not filter) to collect only those friends with a spaceAge of 15
// (() => {
//   const friends = [
//     {
//       id: uuidv4(),
//       name: 'Craig',
//       spaceAge: 17,
//       favouriteMovies: [' The Shawshank Redemption'],
//       favouriteFoods: ['Gyro'],
//     },
//     {
//       id: uuidv4(),
//       name: 'Curtis',
//       spaceAge: 15,
//       favouriteMovies: ['The Godfather'],
//       favouriteFoods: ['Spekulaas'],
//     },
//     {
//       id: uuidv4(),
//       spaceAge: 15,
//       name: 'Matthew',
//       favouriteMovies: ['The Dark Knight'],
//       favouriteFoods: ['Bouillabaisse'],
//     },
//   ];

//   const results = [];

//   friends.forEach((friend) => {
//     if (friend.spaceAge === 15) {
//       results.push(friend);
//     }
//   });

//   console.log(results);
// })();

// Problem 6: Implement filter()
Array.prototype.filter = function (predicateFunction) {
  const results = [];
  this.forEach((item) => {
    if (predicateFunction(item)) {
      results.push(item);
    }
  });
  return results;
};

// Problem 7: Chain filter and map to collect the ids of friends that have a spaceAge of 15
// (() => {
//   const friends = [
//     {
//       id: uuidv4(),
//       name: 'Craig',
//       spaceAge: 17,
//     },
//     {
//       id: uuidv4(),
//       name: 'Curtis',
//       spaceAge: 15,
//     },
//     {
//       id: uuidv4(),
//       spaceAge: 15,
//       name: 'Matthew',
//     },
//   ];

//   const results = friends
//     .filter((friend) => friend.spaceAge === 15)
//     .map((friend) => friend.id);

//   console.log(results);
// })();

// Problem 8: Flatten friends array into an array of pets' ids - concatAll
// (() => {
//   const allFriendIdsInFriends = [];

//   FRIENDS.forEach((friend) =>
//     friend.pets.forEach((pet) => {
//       allFriendIdsInFriends.push(pet.id);
//     })
//   );

//   console.log(allFriendIdsInFriends);
// })();

// Problem 9: Implement concatAll
Array.prototype.concatAll = function () {
  if (this.length < 1) return;
  const results = [];
  this.forEach((subArray) =>
    subArray.forEach((element) => results.push(element))
  );
  return results;
};
// console.log([[1, 2, 3], [], [2, 3], [3, 4, 5]].concatAll());
// console.log([[1, 2, 3], [], [2, 3, [7, 8]], [3, 4, 5, [2, 3]]].concatAll());

// Problem 10: Use map() and concatAll() to project and flatten friends array into an array of pets' ids
// (() => {
//   const resultsWithoutConcatMap = FRIENDS.map((friend) =>
//     friend.pets.map((pet) => pet.id)
//   );

//   const resultsWithConcatMap = FRIENDS.map((friend) =>
//     friend.pets.map((pet) => pet.id)
//   ).concatAll();

//   // console.log(resultsWithoutConcatMap);
//   console.log(resultsWithConcatMap);
// })();

// Problem 11: Retrieve id, name and favourite food's name with price of 150 and amount of 200 for every pet - concatMap
// (() => {
//   const results = FRIENDS.map((friend) =>
//     friend.pets
//       .map((pet) =>
//         pet.favouriteFoods
//           .filter(
//             (favouriteFood) =>
//               favouriteFood.price === 150 && favouriteFood.amount === 200
//           )
//           .map((favouriteFood) => ({
//             petId: pet.id,
//             petName: pet.name,
//             favouriteFoodName: favouriteFood.name,
//           }))
//       )
//       .concatAll()
//   ).concatAll();

//   console.log(results);
// })();

// Problem 12: Implement concatMap()
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this.map((item) =>
    projectionFunctionThatReturnsArray(item)
  ).concatAll();
};

// Problem 13: Use concatMap() to retrieve id, name and favourite food's name with price of 150 and amount of 200 for every pet
// (() => {
//   const results = FRIENDS.concatMap((friend) =>
//     friend.pets.concatMap((pet) =>
//       pet.favouriteFoods
//         .filter(
//           (favouriteFood) =>
//             favouriteFood.price === 150 && favouriteFood.amount === 200
//         )
//         .map((favouriteFood) => ({
//           petId: pet.id,
//           petName: pet.name,
//           favouriteFoodName: favouriteFood.name,
//         }))
//     )
//   );

//   console.log(results);
// })();

// REDUCING ARRAYS
// Problem 14: Use forEach to find the most expensive favourite food for every pet - reduce
// (() => {
//   const favouriteFoods = [
//     {
//       name: 'Kobe Beef',
//       price: 110,
//       amount: 180,
//     },
//     {
//       name: 'Lobster',
//       price: 110,
//       amount: 280,
//     },
//     {
//       name: 'Black Densuke Watermelons',
//       price: 220,
//       amount: 190,
//     },
//     {
//       name: 'Edible Gold Leaf',
//       price: 150,
//       amount: 210,
//     },
//     {
//       name: 'Angulas',
//       price: 180,
//       amount: 200,
//     },
//     {
//       name: 'Fugu',
//       price: 130,
//       amount: 110,
//     },
//   ];

//   let currentPrice;
//   let maxPrice = -1; // Math.max() = -Infinity???
//   let mostExpensiveFood;

//   favouriteFoods.forEach((favouriteFood) => {
//     currentPrice = favouriteFood.price * favouriteFood.amount;
//     if (currentPrice > maxPrice) {
//       mostExpensiveFood = favouriteFood;
//       maxPrice = currentPrice;
//     }
//   });

//   console.log(mostExpensiveFood);
// })();

// Problem 15: Implement reduce()
Array.prototype.reduce = function (combiner, initialValue) {
  let counter, accumulatedValue;

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  } else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    } else {
      throw 'Invalid arguments.';
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one function.
    while (counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter]);
      counter++;
    }

    return [accumulatedValue];
  }
};

// Problem 16: Retrieve the largest number with reduce
// (() => {
//   const numbers = [2, 3, 1, 4, 5];
//   const result = numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
//   console.log(result);
// })();

// // JS reduce function returns one value, but our custom reduce function return an array with one value inside it... why is this good? - find the answer in the next problem!
// (() => {
//   const numbers = [2, 3, 1, 4, 5];
//   const result = numbers.reduce((acc, curr) => (acc > curr ? acc : curr));
//   console.log(result);
// })();

// Problem 17: Retrieve name of the most expensive food - we can also have initial value for reduce function.
// (() => {
//   const favouriteFoods = [
//     {
//       name: 'Kobe Beef',
//       price: 110,
//       amount: 180,
//     },
//     {
//       name: 'Lobster',
//       price: 110,
//       amount: 280,
//     },
//     {
//       name: 'Black Densuke Watermelons',
//       price: 220,
//       amount: 190,
//     },
//     {
//       name: 'Edible Gold Leaf',
//       price: 150,
//       amount: 210,
//     },
//     {
//       name: 'Angulas',
//       price: 180,
//       amount: 200,
//     },
//     {
//       name: 'Fugu',
//       price: 130,
//       amount: 110,
//     },
//   ];

//   const results = favouriteFoods
//     .reduce((acc, curr) =>
//       acc.price * acc.amount > curr.price * curr.amount ? acc : curr
//     )
//     .map((favouriteFood) => favouriteFood.name);

//   console.log(results);
// })();

// Problem 18: Retrieve the id, name, and cheapest favourite food's name for every pet
// (() => {
//   const results = FRIENDS.concatMap((friend) =>
//     friend.pets.concatMap((pet) =>
//       pet.favouriteFoods
//         .reduce((acc, curr) =>
//           acc.price * acc.amount < curr.price * curr.amount ? acc : curr
//         )
//         .map((favouriteFood) => ({
//           friendName: friend.name,
//           petId: pet.id,
//           petName: pet.name,
//           cheapestFood: favouriteFood.name,
//         }))
//     )
//   );

//   console.log(results);
// })();

// Problem 19: Combine two array by index - favouriteFoods and funMoments - zip function
// (() => {
//   const favouriteFoods = [
//     {
//       name: 'Angulas',
//       price: 150,
//       amount: 200,
//     },
//     {
//       name: 'Fugu',
//       price: 130,
//       amount: 220,
//     },
//   ];
//   const funMoments = [
//     { order: 'First', date: 'September 2019' },
//     { order: 'Second', date: 'January 2020' },
//     { order: 'Third', date: 'March 2022' },
//   ];

//   let counter,
//     foodIdAndMomentIdPairs = [];

//   for (
//     counter = 0;
//     counter < Math.min(favouriteFoods.length, funMoments.length);
//     counter++
//   ) {
//     foodIdAndMomentIdPairs.push({
//       foodName: favouriteFoods[counter].name,
//       momentOrder: funMoments[counter].order,
//     });
//   }

//   // what happened to "momentOrder: 'Third'"???
//   console.log(foodIdAndMomentIdPairs);
// })();

// Problem 20: Implement zip (two arrays) - RXJS accepts n arrays - Difference between zip and map? with zip you can have n elements in scope - same with nested maps, also map go through ALL items
Array.zip = function (left, right, combinerFunction) {
  const results = [];

  for (
    let counter = 0;
    counter < Math.min(left.length, right.length);
    counter++
  ) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
};

// Problem 21: Combine two array by index using zip function- favouriteFoods and funMoments
// (() => {
//   const favouriteFoods = [
//     {
//       name: 'Angulas',
//       price: 150,
//       amount: 200,
//     },
//     {
//       name: 'Fugu',
//       price: 130,
//       amount: 220,
//     },
//   ];
//   const funMoments = [
//     { order: 'First', date: 'September 2019' },
//     { order: 'Second', date: 'January 2020' },
//     { order: 'Third', date: 'March 2022' },
//   ];

//   const results = Array.zip(favouriteFoods, funMoments, (food, moment) => ({
//     foodName: food.name,
//     momentOrder: moment.order,
//   }));

//   console.log(results);
// })();

// Problem 22: Retrieve each pet's id, name, Second fun moment date, and cheapest food's name - n parameters in scope in RXJS
// (() => {
//   const results = FRIENDS.concatMap((friend) =>
//     friend.pets.concatMap((pet) =>
//       Array.zip(
//         pet.favouriteFoods.reduce((acc, curr) =>
//           acc.price * acc.amount < curr.price * curr.amount ? acc : curr
//         ),
//         pet.funMoments.filter((funMoment) => funMoment.order === 'Second'),
//         (favouriteFood, funMoment) => {
//           return {
//             petId: pet.id,
//             petName: pet.name,
//             secondFunMomentDate: funMoment.date,
//             cheapestFavouriteFoodName: favouriteFood.name,
//           };
//         }
//       )
//     )
//   );

//   console.log(results);
// })();
