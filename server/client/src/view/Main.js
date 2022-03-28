import React, { useState } from 'react'
import PersonForm from '../components/PersonForm';
import Display from '../components/Display';
const Main = (props) => {
    
    const [peopleList, setPeopleList] = useState([]);

    const removeFromDom = _id => {
        setPeopleList(peopleList.filter(person => person._id !== _id));}

    return (
        <div>
           <PersonForm peopleList={peopleList} setPeopleList={setPeopleList} />
            <hr/>
           <Display peopleList={peopleList} setPeopleList={setPeopleList} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;