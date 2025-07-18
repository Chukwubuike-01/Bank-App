//Bank Account

function account() {
  // default acct bal
  let accountBal = 10000;

  // Updates the account balance in the HTML
  let display = document.getElementById("balanceDisplay");
  display.textContent = `Your account balance is: $${accountBal}`;

  // replace console.log with alert
  function getBalance() {
    alert(`Your account balance is: ${accountBal}`);
  }

  function deposit() {
    //? get input value for deposit
    const inputValue = document.getElementById("depositAmount").value;
    const amount = Number(inputValue);
    //? check if amount is a number, if the number is negetive
    if (Number.isFinite(amount) && amount > 0) {
      accountBal += amount;
      alert(`You have deposited ${amount}. Your new balance is ${accountBal}`);
      //? display the updated balance
      display.textContent = `Your account balance is: $${accountBal}`;

      // makes sure to clear the input field after deposit
      document.getElementById("depositAmount").value = "";
    } else if (amount <= 0) {
      alert("invalid input: number must be greter than 0");
    } else {
      alert("Invalid input");
    }


  }

  function withdraw() {
    //? get input value for withdraw
    let inputValue = document.getElementById("withdrawAmount").value;
    const amount = Number(inputValue);
    //? check if amount is a number, if the number is negetive and within the range
    if (Number.isFinite(amount) && amount <= accountBal && amount > 0) {
      accountBal -= amount;
      alert(`You have withdrawn ${amount}. Your new balance is ${accountBal}`);
      //? clear the input field after withdrawal

      document.getElementById("withdrawAmount").value = "";

      //? display the updated balance
      display.textContent = `Your account balance is: $${accountBal}`;
    } else if (amount > accountBal) {
      alert("Insufficient funds");
      document.getElementById("withdrawAmount").value = "";
    } else if (amount <= 0) {
      alert("invalid input: number must be greter than 0");
      document.getElementById("withdrawAmount").value = "";
    } else {
      alert("Invalid input");
      document.getElementById("withdrawAmount").value = "";
    }
    //   });

    // displays balance after withdrawal
    // getBalance();

    
  }

  return {
    deposit,
    withdraw,
    getBalance,
  };
}
let user = account();

document.getElementById("withdrawBtn").addEventListener("click", function () {
  user.withdraw();
});

document.getElementById("depositBtn").addEventListener("click", function () {
  user.deposit();
});
