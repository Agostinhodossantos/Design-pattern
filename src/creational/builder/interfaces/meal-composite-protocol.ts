export interface MealCompositeProtocol {
  push(meal: MealCompositeProtocol);
  getPrice(): number;
}