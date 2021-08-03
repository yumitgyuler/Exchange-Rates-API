class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = "https://api.exchangerate.host/latest?base=";

    this.amount = null;
  }

  exchange() {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.exchangerate.host/convert?from=${this.firstCurrency}&to=${this.secondCurrency}&amount=${this.amount}`
      )
        .then((response) => response.json())
        .then((data) => resolve(Number(data.result)))
        .catch((err) => reject(err));
    });
  }
  changeAmount(amount) {
    this.amount = amount;
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }

  static allCurrency() {
    return new Promise((resolve, reject) => {
      fetch("https://api.exchangerate.host/latest")
        .then((response) => response.json())
        .then((data) => resolve(Object.keys(data["rates"])))
        .catch((err) => reject(err));
    });
  }
}
