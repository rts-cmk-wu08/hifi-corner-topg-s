import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./SearchBar.css"
import axios from "axios"

// var data = require("http://localhost:4000/products")


const SearchBar = () => {


    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        navigate('/products?search='+event.target.search.value)
        event.target.reset()
    }


    return ( 
        <div className="App">

        <form onSubmit={handleSubmit} className="search-container">
            <div className="search-inner">
                <input type="text" className="Searchbar" name="search" placeholder="Search products..."  />
                
            </div>
        </form>
    </div>
     );




}
 
export default SearchBar;
