const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const uix = new UIX(firstSelect, secondSelect);
const currency = new Currency("USD", "SEK");

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    uix.addAllCurrecy();
    exchangeCurrency();
  });
  amountElement.addEventListener("input", exchangeCurrency);
  firstSelect.onchange = function () {
    currency.changeFirstCurrency(
      firstSelect.options[firstSelect.selectedIndex].textContent
    );
    uix.changeFirst();
    exchangeCurrency();
  };
  secondSelect.onchange = function () {
    currency.changeSecondCurrency(
      secondSelect.options[secondSelect.selectedIndex].textContent
    );
    uix.changeSecond();
    exchangeCurrency();
  };
}

function exchangeCurrency() {
  currency.changeAmount(amountElement.value);
  currency
    .exchange()
    .then((result) => uix.displayResult(result))
    .catch((err) => console.error(err));
}
