import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Display = (props) => {

    const { removeFromDom, peopleList, setPeopleList } = props;

   

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then(res => {
                setPeopleList(res.data.persons);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deletePerson = (_id) => {
        axios.delete(`http://localhost:8000/api/people/${_id}`)
            .then(res => {
                removeFromDom(_id);
                navigate("/home");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                peopleList.map((product, index) => {
                    return(
                        <div>
                            <p key={index}>{product.title}, {product.price}, {product.description}</p>
                            <p><Link to={`/product/${product._id}`}>Go to this product</Link> </p>
                            <button onClick={(e)=>{deletePerson(product._id)}}>
                            Delete
                            </button>
                        </div>
                )
            })
        }
        </div>
    )
}
export default Display;