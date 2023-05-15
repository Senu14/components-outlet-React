import React from 'react';

const BasicScriptComponent = () => {
  const numbers = [5, 8, 2, 9, 1, 3, 7, 4, 6];
  const fruits = ["kiwi", "cherry", "banana", "apple", "orange"];

  // Opretter en ny array med alle elementer, der består en given test.
  const filteredNumbers = numbers.filter((number) => number > 2);

  // Opretter en ny array ved at kalde en givet funktion på hvert element i den kaldende array.
  const doubledNumbers = numbers.map((number) => number * 5);

  // Anvender en funktion på en akkumulator og hvert element i arrayet for at reducere det til en enkelt værdi.
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // Tester om alle elementer i arrayet består af den givne funktions test.
  const allEven = numbers.every((number) => number % 2 === 0);

  // Tester om mindst ét element i arrayet består af den givne funktions test.
  const hasEven = numbers.some((number) => number % 2 === 0);

  // Returnerer det første element i arrayet, der opfylder den givne testfunktion.
  const firstEven = numbers.find((number) => number % 2 === 0);

  // Returnerer indekset for det første element i arrayet, der opfylder den givne testfunktion.
  const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);

  // Afgør om en array indeholder et bestemt element.
  const includesThree = numbers.includes(7);

  //eksempel på chaining sort og map
  const randomMap = fruits.sort(() => Math.random() - 0.5).map((fruit) => fruit);

  return (
    <div>
      <p>Filtered Numbers: {filteredNumbers.join(', ')}</p>
      <p>Doubled Numbers: {doubledNumbers.join(', ')}</p>
      <p>Sum: {sum}</p>
      <p>All Even: {allEven.toString()}</p>
      <p>Has Even: {hasEven.toString()}</p>
      <p>First Even: {firstEven}</p>
      <p>First Even Index: {firstEvenIndex}</p>
      <p>Includes Three: {includesThree.toString()}</p>

      <h2>Random Map here:</h2>
      <p>Random Map: {randomMap.join(', ')}</p>
    </div>
  );
};

export default BasicScriptComponent;