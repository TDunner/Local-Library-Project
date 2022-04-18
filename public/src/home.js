// 1. Get Total Book Count - done using Object.keys & .length
function getTotalBooksCount(books){
  const totalBooks = Object.keys(books).length;
  return totalBooks;
}

// 2. Get Total Accounts Count - done using .reduce()
function getTotalAccountsCount(accounts){
  return accounts.reduce((account) => {
    return account + 1;
  },0);
}             

// 3. Get Books Borrowed Count - done using .forEach(), .filter(), single line if statements 
function getBooksBorrowedCount(books){
  var bookBorrCount = [];
    books.forEach(book => {
    let stillBorrowed = book.borrows.filter(borrow => {
      if(!borrow.returned) return borrow;
    });
      if(stillBorrowed.length > 0) bookBorrCount.push(book);
    });
  return bookBorrCount.length;
}

// Helper Function for 4, 5 & 6 - done using .sort(), turanary operators & .slice()*
function topFive(array) {
  let theTopFive = array.sort((itemA, itemB) => (itemA.count < itemB.count ? 1 : -1)).slice(0, 5);
    return theTopFive; 
}

// 4. Get Most Common Genres - done using .map(), .findIndex(), turnary opertors & helper function*
function getMostCommonGenres(books){
  const allGenres = books.map((book) => book.genre);
    var mostCommGenres = [];
      allGenres.map((genre) => {
     const theGenre = mostCommGenres.findIndex((item) => item.name === genre);
    theGenre >= 0 ? mostCommGenres[theGenre].count = mostCommGenres[theGenre].count + 1 : mostCommGenres.push({name: genre, count: 1});
  });
  return topFive(mostCommGenres);
}

// 5. Get Most Popular Books - done using .reduce() & helper function*
function getMostPopularBooks(books) {
  var mostPopBooks = [];
    const borrows = books.reduce((account, book) => {
      mostPopBooks.push({name: book.title, count: book.borrows.length});
    },[]);
  return topFive(mostPopBooks); 
}

// 6.Get Most Popular Authors - done using .forEach(), destructuring objects, temperal literals, single line if statments & helper function*
function getMostPopularAuthors(books, authors) {
  var mostPopAuth = [];
    authors.forEach((author) => {
     const {name:{first, last}, count} = author;
      let theAuthor = {name: `${first} ${last}`, count: 0};
       books.forEach((book) => {
        if(book.authorId === author.id) theAuthor.count += book.borrows.length;
          });
        mostPopAuth.push(theAuthor);
         });
     return topFive(mostPopAuth);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
