// Create a controlled component with:
// A field for a user to type the name of their favorite food
// Do not let a user enter more than ten characters for the food
// A field for a user to type the food’s country of origin
// A Submit button
// When a User submits the form:
// The form should clear
// If the country of origin is American, render a h1 with the text Delicious!
// If the country of origin is Italy, render a h1 with the text Delizioso!
// If the country of origin is Mexico or Spain, render a h1 with the text Delicioso!
// If the country of origin is not one of those countries, render a h1 with the text Yummy!
// This message should not be displayed before a user submits the form
// If the User fills out the form again, the text should update

import React, {useState} from 'react'

function FoodForm() {
    const [formFood, setFormFood ] = useState("")
    const [formCountry, setFormCountry] = useState("")
    const [displayH1, setDisplayH1] = useState("")

    function handleName(e) {
        setFormFood(e.target.value)
    }

    function handleCountry(e) {
        setFormCountry(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        displayWords(formCountry)
        setFormFood("")
        setFormCountry("")
    }

    function displayWords(country) {
        switch (country) {
            case "America" :
                setDisplayH1("Delicious!");
                break;
            case "Italy" :
                setDisplayH1("Delizioso!");
                break;
            case "Mexico" :
            case "Spain" :
               setDisplayH1("Delicioso!");
               break;
            default :
                setDisplayH1("Yummy") 
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='food'>Favorite Food: (max of 10 characters) </label>
        <input type="text" name="food" maxLength={10} value={formFood} onChange={handleName}/> 
        <br/>
        <label htmlFor="country">Food's Country of Origin: </label>
        <input type="text" name="country" value={formCountry} onChange={handleCountry} /> 
        <br/>
        <input type="submit" />
    </form>
    <h1>{displayH1}</h1>
    </>
  )
}

export default FoodForm