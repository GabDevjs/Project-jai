import React, { useState } from "react";
import axios from "axios";
import {
    ProductsContainer,
    ImageConatiner,
} from "./styles";

const Products = () => {
    const [image, setImage] = useState("");
    const clientId = "412862363959448ea131ec1e9cd400e3";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
    };
    const handleSubmit = () => {
        console.log(image);
        const url = `https://myceliademo.blob.core.windows.net/fashion-imgs/images/Auth_Key: ${clientId} `;
        axios.get(url).then((response) => {
            console.log(response);
            setResult(response.data.results);
        });
    };

    return (
        <ProductsContainer>
            <ImageConatiner>
                <input onChange={handleChange} type="text" name="image" placeholder="Search for images" />
                <button onClick={handleSubmit} type="submit">Search</button>
                {result.map((image) => (
                    <>
                        <div>
                            <img src={image.urls.thumb} />
                            <p> Photo by {image.user.name}</p>
                            <p>👍 {image.likes}</p>
                        </div>
                    </>
                ))}
            </ImageConatiner>
        </ProductsContainer>
    );
};

export default Products;