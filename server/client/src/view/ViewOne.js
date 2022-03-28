import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ViewOne = () => {
    const { _id } = useParams();

    const [product, setProduct] = useState([{}]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${_id}`)
            .then(res => {
                setProduct(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <p>Product Title {product.title}</p>
            <p>Product Price {product.price}</p>
            <p>Product Description {product.description}</p>
        </div>
    )
}
export default ViewOne;