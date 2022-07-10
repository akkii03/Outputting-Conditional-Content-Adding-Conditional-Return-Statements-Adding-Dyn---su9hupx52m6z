import React,{useState} from 'react'
import Town from './Town'

export default function City(props) {
    const [toggle,setToggle] = useState(false);

    function handler() {
        setToggle(!toggle);
        console.log("city is clicked ",toggle)
    }

  return (
    <li id={props.id} onClick={handler} ><h3>{props.city.name}</h3>
    {toggle&&<ul>{props.city.towns.map((item,index)=>{
        return <Town town={item} id={"town"+(index+1)} ></Town>
    })}</ul>}
    </li>
  )
}
