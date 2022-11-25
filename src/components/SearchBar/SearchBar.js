import React, { useState, useEffect } from "react";
import './SearchBar.css'
import BooksContainer from "../BooksContainer/BooksContainer";

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("")
    const [books, setBooks] = useState([])

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleSearchClick = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchValue)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setBooks(data.items)
            }
            )

           
    }


    const shouldSearch = searchValue.length >= 3
    const shouldShowBooks = books.length > 0 
    console.log(shouldSearch)
    // const buttonStyles = {
    //     background : props.buttonColor,
    //     borderRadius: "10px"
    // }

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="search-container">
                    <input type="text" placeholder="Search.." onChange={handleInputChange} value={searchValue} name="search" />
                    {shouldSearch && <button onClick={() => handleSearchClick()}><i class="fa fa-search" ></i></button>}
                    {shouldShowBooks && <BooksContainer booksArr ={books}/>}

            </div>
            {/* <input type="text" onChange={handleInputChange} value = {searchValue} placeholder="Search"  /> */}
            {/* <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
        <div className="count-display">{currntCount}</div> */}
        </div>
    )

}

export default SearchBar