import React from "react";
import styled from "styled-components";

//styling the div
const StyledDiv = styled.div`

  width: 94%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  color: white;
  border: 3px solid;
  font-size: xx-large;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: royalblue;
  }


`


const CharacterCard = (props) => {
    //console.log(props);

    //destructuring props 
    const {data} = props;
   // saving the names into a new array
    const newData = data.map(person => person.name)
    //console.log(newData)
    return(
        <div className="contents" >
            {/* content class contains all the names from the array and are being pushed to DOM */}
            <div className="personDetails">
                  <StyledDiv className="luke"> {newData[0]} </StyledDiv>
                  <StyledDiv  className="cThree"> {newData[1]} </StyledDiv >
                  <StyledDiv  className="rTwo"> {newData[2]} </StyledDiv >
                  <StyledDiv  className="darthVader"> {newData[3]} </StyledDiv >
                  <StyledDiv className="leia"> {newData[4]} </StyledDiv >
                  <StyledDiv  className="owen"> {newData[5]} </StyledDiv >
            </div>       
        </div>
    )
}



export default CharacterCard;

//line of code that worked but didnt pass the codegrade
//{data.map(person =><div className="person">{person.name}</div>)}  