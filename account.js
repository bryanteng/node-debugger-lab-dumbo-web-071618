module.exports = function account() {
  var signupBonus = 250
  var deposit = 1000
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }

  function setAccountType () {
    customerAccount.type = customerAccount.checking == '1' ? 'checking' : 'savings'
  }

  var openAccount = function(account, deposit) {
    account.balance += signupBonus
    output['New balance after signup bonus is '] = account.balance
    account.balance += deposit
  }

  output['Account before opening'] = customerAccount

  openAccount(customerAccount, deposit)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}