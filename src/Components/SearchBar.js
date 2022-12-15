import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./SearchBar.css"
// import Table from "./Table"

var data = require("http://localhost:4000/products")




export default function App() {

    const navigate = useNavigate()

    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onSearch = (searchTerm) => {
        setValue(searchTerm)
        console.log('search', searchTerm)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        navigate('/products?search='+event.target.search.value)
    }

    // const search = (data) => {
    //     return data.filter(item => item.name.toLowerCase().includes(query))
    // }

    // const [query, setQuery] = useState("")

    return (
        <div className="App">

            <form onSubmit={handleSubmit} className="search-container">
                <div className="search-inner">
                    <input type="text" name="search" placeholder="Search products..." value={value} onChange={onChange} />
                    {/* <Table data={search()} /> */}
                </div>
            </form>
        </div>
    )
}