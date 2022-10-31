import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type FoodMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Food {
  readonly id: string;
  readonly name: string;
  readonly energy: string;
  readonly protein: string;
  readonly carbohydrate: string;
  readonly DietaryFiber: string;
  readonly checked: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Food, FoodMetaData>);
  static copyOf(source: Food, mutator: (draft: MutableModel<Food, FoodMetaData>) => MutableModel<Food, FoodMetaData> | void): Food;
}