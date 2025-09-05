import React, {useState} from "react";

export function StateAsArray () {

    const [fruits, setFruits] = useState(["apple", "mango", "grapes"])
    const [newFruit, setNewFruit] = useState("")
    
    // function updateFruits(){
    //     // fruits.push("Kiwi")
    //     // setFruits("Kiwi")
    //     setFruits([...fruits, "kiwi"])
    // }

    function updateNewFruit(e){
        setNewFruit(e.target.value)
    }

    function handleFruitList(){
        setFruits([...fruits, newFruit])
        setNewFruit("")
    }

    return(
        <div>
            <h1>State value as Array</h1>
            {fruits.map((value, index)=>{
                return(
                    <h2 key={index}>{value}</h2>
                )
            })}

            {/* <button onClick={updateFruits}>Click to updated Fruits List</button> */}

            <div>{newFruit}</div>
            <input type="text" value={newFruit} placeholder="Enter your value" onChange={updateNewFruit}/>

            <button onClick={handleFruitList}>Click to update fruit list</button>
        </div>
    )
}