import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    ProductsContainer,
    ImageConatiner,
    Image,
    ImagemItem,
    SemelantyContainer,
    ScrollConatiner,
    SearchContainer,
    SearchIcon,
    ContainerItems,
} from "./styles";

//icons
import {
    AiOutlineSearch,
} from "react-icons/ai";

const Products = () => {
    const [idtext, setIdtext] = useState("10000");
    const [results, setResults] = useState([]);

    var config = {
        method: 'get',
        url: `https://mycelia.azure-api.net/similar/id/productimages?id=${idtext}&top_k=15`,
        headers: {
            'Auth': '412862363959448ea131ec1e9cd400e3',
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        setResults([]);
        axios(config)
            .then(function (response) {
                setResults(response.data.similarity[0].results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [idtext]);

    console.log(results);
    return (
        <ProductsContainer>
            <ImageConatiner>
                <SearchContainer>
                    <input
                        placeholder="Search"
                        onChange={(e) => setIdtext(e.target.value)}
                    />
                    <SearchIcon>
                        <AiOutlineSearch />
                    </SearchIcon>
                </SearchContainer>
                <Image>
                    <img
                        src={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${idtext}.jpg`}
                        alt="product"
                    />
                </Image>
            </ImageConatiner>
            <SemelantyContainer>
                <h1>Produtos similares</h1>
                <ScrollConatiner>
                    {results && (
                        <>
                            {results.map(({ id, distance }) => {
                                return (
                                    <ContainerItems>
                                        <ImagemItem>
                                            <img
                                                src={`https://myceliademo.blob.core.windows.net/fashion-imgs/images/${id}.jpg`}
                                                alt="product"
                                            />
                                        </ImagemItem>
                                    </ContainerItems>
                                );
                            })}
                        </>
                    )}
                </ScrollConatiner>
            </SemelantyContainer>
        </ProductsContainer>
    );
};

export default Products;