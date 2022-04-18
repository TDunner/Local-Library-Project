// 1. Find Account by ID - done using .find()
function findAccountById(accounts, id){
  let findAccount = accounts.find((account) => account.id === id);
    return findAccount;
}

// 2. Sort Account by Last Name - done using .sort() & turnary operators
function sortAccountsByLastName(accounts){
    let sortedAccounts = accounts.sort((accountA, accountB) => 
    accountA.name.last < accountB.name.last ? -1 : 1);
  return sortedAccounts;
}

// 3. Get Total Number of Borrows - done using .reduce(), .some() & turnary operators
function getTotalNumberOfBorrows({id}, books){
  let theTotal = books.reduce((account, book) => {
    (book.borrows.some(user => user.id === id)) ? account++ : account+= 0;
    return account;
  }, 0);
  return theTotal;
}

// 4. Get Books Possessed by Account - done using .filter(), .some(), .forEach() & .find()
function getBooksPossessedByAccount(account, books, authors){
  const booksPossessed = books.filter(book => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned));
    booksPossessed.forEach(book => book.author = authors.find(author => book.authorId === author.id));
   return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
