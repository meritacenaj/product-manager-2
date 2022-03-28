import React, { useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import Display from '../components/Display';
const Main = (props) => {
    
    const [peopleList, setPeopleList] = useState([]);
    
    return (
        <div>
           <PersonForm peopleList={peopleList} setPeopleList={setPeopleList} />
            <hr/>
           <Display/>
        </div>
    )
}
export default Main;