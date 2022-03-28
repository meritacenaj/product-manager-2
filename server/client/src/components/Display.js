import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Display = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then(res => {
                setPeoples(res.data.persons);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [peoples])

    return (
        <div>
            {
                peoples.map((product, index) => {
                    return(
                        <div>
                            <p key={index}>{product.title}, {product.price}, {product.description}</p>
                            <p><Link to={`/product/${product._id}`}>Go to this product</Link> </p>
                        </div>
                )
            })
        }
        </div>
    )
}
export default Display;