import React,{useState} from 'react'
import City from './City'


export default function StateData(props) {
    const [StateClicked,setClicked] = useState(false);

    function clickedHandler (event) {
        setClicked(!StateClicked)
        console.log("state is clicked",StateClicked) 
        event.stopPropagation();
    }

  return (
    <li id={props.id} onClick={clickedHandler} >
        <h2>{props.state.name}</h2>
        {StateClicked&&<ul>{props.state.cities.map((city,id)=>{
            return <City city={city} id={`city${id+1}`}></City>
        })}</ul>}

    </li>
  )
}
