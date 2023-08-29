// Add a controlled input field that allows for a user to search for an item by category
    // This should be case insensitive
    // Also be mindful of not having two sources of truth. If I later want to add create or delete functionality, 
        // I shouldn't have to update state in two places


// Add the following buttons to allow a user to switch between viewing all items and only the cheap items
    // Add a button with the text "Cheap" that displays only the items with a price less than 5 when clicked. 
        // A user should still be able to use the search functionality in conjunction with this 
        // (For example, if a user searches for "Dairy" and clicks the "Cheap" button, they should only see the dairy products with a price less than 5)
    // Add a button with the text "All Prices" that displays items of any price

import React, { useState } from "react";

function ItemsContainer() {
  const [items, setItems] = useState([{id: 1, name: "Milk", category: "Dairy", price: 2}, {id: 2, name: "Banana", category: "Produce", price: 10}, {id: 3, name: "Vanilla Ice Cream", category: "Dairy", price: 4}, {id: 4, name: "Saffron Truffle Gold-Flecked Ice Cream", category: "Dairy", price: 14}, {id: 5, name: "Spinach", category: "Produce", price: 4}, {id: 6, name: "Pomegranates", category: "Produce", price: 11}])
  const [searchterm, setSearchterm] = useState("")

  function Item({ name, price, category}) {
    return (
        <ul>{name} costs ${price} and has a category of {category}.</ul>
    )
  }

  const displayItems = items.filter((item) => item.category.toLowerCase().includes(searchterm.toLowerCase()))

  return (
    <div>
        <label htmlFor="category">Search by Category</label>
        <input type="text" name="category" value={searchterm} onChange={(e)=>setSearchterm(e.target.value)}/>
        <button>All Items</button>
        <button>Cheap</button>
        <h3>Items go here:</h3>
        {displayItems.map((item) => <Item key={item.id} name={item.name} price={item.price} category={item.category}/>)}
        <ul>
        </ul>
    </div>
  );
}

export default ItemsContainer