import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
const Update = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState([{}]); 

    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    
    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${_id}`)
            .then(res => {
                setProduct(res.data.person);
                console.log(res.data.person)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const updatePerson = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + _id, {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res);
                navigate("/home"); 
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>

                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;