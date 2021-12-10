import React from "react";
import styled from "styled-components";




const CharacterCard = (props) => {
    console.log(props);
    const {data} = props;
    //console.log(data[0].name);
    const newData = data.map(person => person.name)
    console.log(newData)
    return(
        <div className="contents" >
            <div className="personDetails">
                  {newData[0]}
            </div>       
        </div>
    )
}



export default CharacterCard;

//{data.map(person =><div className="person">{person.name}</div>)}  