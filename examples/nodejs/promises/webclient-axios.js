const axios = require("axios");
const url =
  "http://localhost:8080";
axios
  .get(url)
  .then(response => {
    console.log(
        `Loan Type: ${response.loan.type}\n`,
        `Loan Amt: ${response.loan.upb}\n`,
        `Primary Borrower: ${response.loan.borrower[0].name}\n`
    );
  })
  .catch(error => {
    console.log(error);
  });