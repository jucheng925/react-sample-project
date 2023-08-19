// In AnimalContainer:
// When a User clicks the button "Hungry Animals", display only the hungry animals
// When a User clicks the button "Full Animals", display only the animals who are not hungry
// The display should include the animal name and whether or not they are hungry. For example, "Andy is hungry"
// Also be mindful of not having two sources of truth. If I later want to add create or delete functionality, I shouldn't have to update state in two places

import React, { useState } from "react";

function AnimalContainer() {
  const [animals, setAnimals] = useState([{id: 1, name: "Ron", species: "Lion", hungry: true}, {id: 2, name: "Leslie", species: "Rabbit", hungry: false}, {id: 3, name: "Ann", species: "Koala", hungry: false}, {id: 4, name: "April", species: "Hyena", hungry: true}])

  return (
    <div>
      <button>Hungry Animals</button>
      <button>Full Animals</button>
      <h3>Animals go here:</h3>
      {animals.map((animal) => <ul key={animal.id}>{animal.name} {animal.hungry ? "is" : "is not"} hungry. </ul>)}
       <ul>
      </ul>
    </div>
  );
}

export default AnimalContainer