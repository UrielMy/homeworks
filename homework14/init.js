class Burger {
  static SIZES = {
    small: "small",
    average: "average",
    big: "big",
  };
  static TOPPINGS = {
    cheese: { price: 10, kcal: 20 },
    salad: { price: 20, kcal: 5 },
    potato: { price: 15, kcal: 10 },
    spice: { price: 15, kcal: 0 },
    mayo: { price: 20, kcal: 5 },
  };
  toppings = [];
  constructor(size) {
    this.size = size;
    this.toppings = [];
    this.properties = {
      [Burger.SIZES.small]: {
        price: 50,
        kcal: 20,
      },
      [Burger.SIZES.average]: {
        price: 75,
        kcal: 30,
      },
      [Burger.SIZES.big]: {
        price: 100,
        kcal: 40,
      },
    };
    this._init();
  }
  _init() {
    let burgerProperties = this.properties[this.size];
    this.price = burgerProperties ? burgerProperties.price : 0;
    this.kcal = burgerProperties ? burgerProperties.kcal : 0;
  }
  getPrice() {
    let toppingsPrice = 0;
    this.toppings.forEach((e) => {
      toppingsPrice = toppingsPrice + e.price;
    });
    return toppingsPrice + this.price;
  }
  getKcal() {
    let kcalSum = 0;
    this.toppings.forEach((e) => {
      kcalSum = kcalSum + e.kcal;
    });
    return kcalSum + this.kcal;
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }
}
class BigMaс extends Burger {
  constructor(size) {
    super();
    this.size = size;
    this.properties = {
      [Burger.SIZES.small]: {
        price: 50,
        kcal: 20,
      },
      [Burger.SIZES.average]: {
        price: 75,
        kcal: 30,
      },
      [Burger.SIZES.big]: {
        price: 100,
        kcal: 40,
      },
    };
    this._init();
  }
}
let eatBurger = new BigMaс(Burger.SIZES.small);
eatBurger.addTopping(Burger.TOPPINGS.cheese);
eatBurger.addTopping(Burger.TOPPINGS.mayo);

console.log(`Price for this burger is: ${eatBurger.getPrice()}`);
console.log(`Kcal in this burger: ${eatBurger.getKcal()}`);
