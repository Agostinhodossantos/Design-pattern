import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Arroz", 10);
    const beans = new Beans("Feijao", 10);
    this._meal.add(rice, beans);
    return this;
  }
  //   makeBeverage(): this {
  //     const beverage = new Beverage("Bebida", 40);
  //     this._meal.add(beverage);
  //     return this;
  //   }
  //   makeDesert(): this {
  //     const desert = new Dessert("sobremesa", 10);
  //     this._meal.add(desert);
  //     return this;
  //   }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
