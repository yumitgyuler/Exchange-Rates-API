class UIX {
  constructor(firstSelect, secondSelect) {
    this.firstSelect = firstSelect;
    this.secondSelect = secondSelect;

    this.outputFirst = document.getElementById("outputFirst");
    this.outputSecond = document.getElementById("outputSecond");
    this.outputResultFirst = document.getElementById("outputResultFirst");
    this.outputResultSecond = document.getElementById("outputResultSecond");
  }

  changeFirst() {
    this.outputFirst.textContent =
      this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
  }
  changeSecond() {
    this.outputSecond.textContent =
      this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
  }
  displayResult(result) {
    this.outputResultFirst.value = document.querySelector("#amount").value;
    this.outputResultSecond.value = result;
  }
  addAllCurrecy() {
    let currency = [];

    Currency.allCurrency()
      .then((data) => {
        currency = data;
        const length = Object.entries(currency).length;
        const firstCurrency = document.getElementById("firstCurrency");
        const secondCurrency = document.getElementById("secondCurrency");

        for (let i = 0; i <= length - 1; i++) {
          const opt = document.createElement("option");
          const opt2 = document.createElement("option");
          if (currency[i] === "USD") {
            opt.selected = "selected";
          }
          if (currency[i] === "SEK") {
            opt2.selected = "selected";
          }
          opt.innerHTML = currency[i];
          firstCurrency.appendChild(opt);
          opt2.innerHTML = currency[i];
          secondCurrency.appendChild(opt2);
        }
        var elems = document.querySelectorAll("select");
        var instances = M.FormSelect.init(elems);

        this.changeFirst();
        this.changeSecond();
      })
      .catch((err) => console.error(err));
  }
}
