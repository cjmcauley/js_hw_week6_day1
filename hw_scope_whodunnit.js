 // Episode 1


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`; // Miss Scarlet
// }
//
// const verdict = declareMurderer();
// console.log(verdict); // Miss Scarlet
//

//  // Episode 2
//
// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer(); // Error as const already set
// const verdict = declareMurderer();
// console.log(verdict);

//  // Episode 3
//
// let murderer = 'Professor Plum'; // Professor Plum
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock'; // Mrs. Peacock - only within declareMurderer
//   return `The murderer is ${murderer}.`; // Mrs. Peacock
// }
//
// const firstVerdict = declareMurderer(); // Mrs. Peacock
// console.log('First Verdict: ', firstVerdict); // Mrs. Peacock
//
// const secondVerdict = `The murderer is ${murderer}.`; // Professor Plum
// console.log('Second Verdict: ', secondVerdict); // Professor Plum

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//  let suspectThree = 'Colonel Mustard';
//  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects); // Miss Scarlet, Professor Plum, Colonel Mustard replacing Mrs. Peacock
// console.log(`Suspect three is ${suspectThree}.`); // Mrs. Peacock

// Episode 5

// const scenario = {
//  murderer: 'Miss Scarlet',
//  room: 'Kitchen',
//  weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//  scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//  return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver'); // Weapon changed from Candle Stick to Revolver
// const verdict = declareWeapon(); // Revolver
// console.log(verdict); // Revolver

// Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//  murderer = 'Mr. Green';
//
//  const plotTwist = function() {
//    murderer = 'Mrs. White';
//  }
//
//  plotTwist();
// }
//
// const declareMurderer = function () {
//  return `The murderer is ${murderer}.`;
// }
//
// changeMurderer(); // Mrs. White from Mr. Green from Colonel Mustard
// const verdict = declareMurderer(); // Mrs. White
// console.log(verdict); // Mrs. White

// Episode 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//  murderer = 'Mr. Green';
//
//  const plotTwist = function() {
//    let murderer = 'Colonel Mustard';
//
//    const unexpectedOutcome = function() {
//      murderer = 'Miss Scarlet';
//    }
//
//    unexpectedOutcome();
//  }
//
//  plotTwist();
// }
//
// const declareMurderer = function() {
//  return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// Professor Plum to Mr. Green to Miss Scarlet to Colonel Mustard reverting to Mr. Green due to it's global scope

// Episode 8
//
// const scenario = {
//  murderer: 'Mrs. Peacock',
//  room: 'Conservatory',
//  weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//  scenario.murderer = 'Mrs. Peacock'; // Same as before, Mrs. Peacock
//  scenario.room = 'Dining Room'; // Room changed from Conservatory to Dining Room
//
//  const plotTwist = function(room) { // Dining Room
//    if (scenario.room === room) { // True
//      scenario.murderer = 'Colonel Mustard'; // Murderer now Colonel Mustard
//    }
//
//    const unexpectedOutcome = function(murderer) {
//      if (scenario.murderer === murderer) { // True
//        scenario.weapon = 'Candle Stick'; // Changed from Lead Pipe to Candle Stick
//      }
//    }
//
//    unexpectedOutcome('Colonel Mustard');
//  }
//
//  plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//  return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon(); // Candle Stick
// console.log(verdict);

// Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//  let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//  return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer(); // Professor Plum as Mrs. Peacock lives within the {} only.
// console.log(verdict);

// Extensions

// Make up your own episode!
