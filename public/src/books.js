// 1. Find Author by Id* - done using .find()
function findAuthorById(authors, id){
  let findAuthor = authors.find((author) => author.id === id);
    return findAuthor;
}

// 2. Find Book by Id - done using .find()
function findBookById(books, id){
  let findBook = books.find((book) => book.id === id);
    return findBook;
}

// 3. Partition Books by Borrowed Status - done using .forEach(), .filter(), single line if statements & turnary operators 
function partitionBooksByBorrowedStatus(books){
  var [stillBorrowed,returnedBorrows] = [[], []];
    books.forEach((book) => {
      let currentStatus = book.borrows.filter((borrow) => {
        if(!borrow.returned) return borrow;
      })
      currentStatus.length > 0 ? stillBorrowed.push(book) : returnedBorrows.push(book)
    })
  return [stillBorrowed, returnedBorrows];
}

// 4. Get Borrowers for Books - done using .map(), helper function* & .slice()
function getBorrowersForBook(book, accounts){
  const allBorrows = book.borrows;
    let list = allBorrows.map((currentStatus) => {
      let borrower = findAuthorById(accounts, currentStatus.id); 
     borrower.returned = currentStatus.returned;
    return borrower;
   });
  return list.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
