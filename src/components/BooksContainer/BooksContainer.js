import React, { useState, useEffect } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";


const BooksContainer = (props) => {

    const [chosenBookToDisplay, setBookToDisplay] = useState([])
    const [open, setOpen] = useState(false);
    const booksArr = props.booksArr

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOnBook = (event, booktitle) => {
        //console.log("the book title : " + booktitle)
        //console.log("props is :" + props.booksArr)
        const bookDisplayTmp = booksArr.filter(book => {
            //console.log("the book is : " + book.volumeInfo.title)
            return book.volumeInfo.title === booktitle
        })
        console.log("chosen book: " + bookDisplayTmp[0].volumeInfo.title)
        setBookToDisplay(bookDisplayTmp)
        handleClickOpen()
    }

    const isShowDialog = chosenBookToDisplay.length > 0
    console.log(props.booksArr)

    return (
        <div>
            <ul>
                {props.booksArr.map((book) => {
                    return (
                        <li key={book.volumeInfo.title} onClick={event => handleClickOnBook(event, book.volumeInfo.title)}>{book.volumeInfo.title}</li>
                    )
                })}

            </ul>
            {isShowDialog &&
                <div>
                    {/* <Button variant="outlined"
                        color="primary" onClick={handleClickOpen}>
                        Open My Custom Dialog
                    </Button> */}
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                           Book Details:
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            {chosenBookToDisplay[0].volumeInfo.title}
                            </DialogContentText>
                            <DialogContentText>
                            Author: {chosenBookToDisplay[0].volumeInfo.authors}
                            </DialogContentText>
                            <DialogContentText>
                                Published Date: {chosenBookToDisplay[0].volumeInfo.publishedDate}
                            </DialogContentText>
                            <DialogContentText>
                                language: {chosenBookToDisplay[0].volumeInfo.language}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                            {/* <Button onClick={handleClose} color="primary" autoFocus>
                                Yes
                            </Button> */}
                        </DialogActions>
                    </Dialog>
                </div> }
        </div>
    )

}

export default BooksContainer
