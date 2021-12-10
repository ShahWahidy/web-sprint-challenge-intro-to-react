import React from "react";
import styled from "styled-components";




const CharacterCard = (props) => {
    console.log(props);
    const {data} = props;
   
    const newData = data.map(person => person.name)
    console.log(newData)
    return(
        <div className="contents" >
            <div className="personDetails">
                  <div className="luke"> {newData[0]} </div>
                  <div className="cThree"> {newData[1]} </div>
                  <div className="rTwo"> {newData[2]} </div>
                  <div className="darthVader"> {newData[3]} </div>
                  <div className="leia"> {newData[4]} </div>
                  <div className="owen"> {newData[5]} </div>
            </div>       
        </div>
    )
}



export default CharacterCard;

//{data.map(person =><div className="person">{person.name}</div>)}  