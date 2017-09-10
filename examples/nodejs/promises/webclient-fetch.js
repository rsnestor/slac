const fetch = require("node-fetch");
const url = "http://localhost:8080/";

fetch(url)
  .then(response => {
    response.json().then(json => {
      console.log(
        `Loan Type: ${json.loan.type}\n`,
        `Loan Amt: ${json.loan.upb}\n`,
        `Primary Borrower: ${json.loan.borrower[0].name}\n`
      );
    });
  })
  .catch(error => {
    console.log(error);
  });