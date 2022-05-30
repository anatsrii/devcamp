import React, {useState} from "react";





function EventFunc (){
  const [member, setMember] = useState({
    name: 'Alex',
    age: 25,
  
  })
  const [memberSkill, setMemberSkill] = useState({  skill: [
    {id: 1, skillName: 'NodeJS'},
    {id: 2, skillName: 'React'}
  ]})

  const editSkill = (id) => {
    alert(`you click ${id}`);
  }

  const changeAge = () => {
    setMember({ name: 'Alex',
    age: 35,
    skill: [
      {id: 1, skillName: 'NodeJS'},
      {id: 2, skillName: 'React'}
    ]});
  }

  return (<>
    <p>Name: {member.name}</p>
    <p>Age: {member.age}</p>
    <ul>
        {memberSkill.skill.map((obj)=> <li>{obj.skillName} <button onClick={()=>editSkill(obj.id)}>Edit Skill</button></li>)}
    </ul>

    <button onClick={()=>changeAge()}>Edit Age</button>
  </>)
}

export default EventFunc;