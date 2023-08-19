// In the Random Winner Form component:
// Create a controlled component with:
// A single input field that allows a User to type a name
// Do not let a user enter more than 15 characters in the input field
// A Submit button

// When a User submits the form:
// Render that name to a list of "Contestants"
// Clear the form
// If the name does not have at least two characters, do not add it to the list of "Contestants" and do not clear the form

// Create a button with the text "Select Winner"
// When a User clicks that button, randomly select one of the names as the winner and render the winner to the page
// The winner's name should be in ALL CAPS when rendered to the page
// If there is one name or less, render a message: Please add more contestants
// If the User clicks the button again, the Winner should update

import React, {useState} from 'react'

function WinnerForm() {
    const [formName, setFormName] = useState("")
    const [contestants, setContestants] = useState([])
    const [displayWinner, setDisplayWinner] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (formName.length === 2) {
            window.alert("Add more characters")
        }
        else {
            setContestants([...contestants, formName])
            setFormName("") 
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }

    function selectWinner() {
        const numOfContestants = contestants.length
        if (numOfContestants === 1) {
            setDisplayWinner("Please add more contestants")
        }
        else {
            const winnerIndex = getRandomInt(0, numOfContestants)
            setDisplayWinner(contestants[winnerIndex].toUpperCase())
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Please type in a name: (min:3 max:15) </label>
            <input type="text" name="name" maxLength={15} value={formName} onChange={(e)=>setFormName(e.target.value)}/>
            <input type ="submit" />
        </form>
        <h3> Contestants List: </h3>
        {contestants.map(contestant => <ul key={contestant}>{contestant}</ul>)}
        <button onClick={selectWinner}> Select Winner </button>
        <h3>{displayWinner}</h3>
    </div>
  )
}

export default WinnerForm