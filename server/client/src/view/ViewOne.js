import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";



const ViewOne = (props) => {
    const navigate = useNavigate();
    const { _id } = useParams();

    const [product, setProduct] = useState([{}]);

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

    const { removeFromDom, people, setPeople } = props;
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
            <p>Product Title {product.title}</p>
            <p>Product Price {product.price}</p>
            <p>Product Description {product.description}</p>
            <Link to={"/people/edit/" + product._id}>
                Edit
            </Link>


            
        </div>
    )
}
export default ViewOne;