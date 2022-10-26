/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFoodInput = {
  id?: string | null,
  name: string,
  energy: string,
  protein: string,
  carbohydrate: string,
  DietaryFiber: string,
  checked: boolean,
};

export type ModelFoodConditionInput = {
  name?: ModelStringInput | null,
  energy?: ModelStringInput | null,
  protein?: ModelStringInput | null,
  carbohydrate?: ModelStringInput | null,
  DietaryFiber?: ModelStringInput | null,
  checked?: ModelBooleanInput | null,
  and?: Array< ModelFoodConditionInput | null > | null,
  or?: Array< ModelFoodConditionInput | null > | null,
  not?: ModelFoodConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Food = {
  __typename: "Food",
  id: string,
  name: string,
  energy: string,
  protein: string,
  carbohydrate: string,
  DietaryFiber: string,
  checked: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFoodInput = {
  id: string,
  name?: string | null,
  energy?: string | null,
  protein?: string | null,
  carbohydrate?: string | null,
  DietaryFiber?: string | null,
  checked?: boolean | null,
};

export type DeleteFoodInput = {
  id: string,
};

export type ModelFoodFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  energy?: ModelStringInput | null,
  protein?: ModelStringInput | null,
  carbohydrate?: ModelStringInput | null,
  DietaryFiber?: ModelStringInput | null,
  checked?: ModelBooleanInput | null,
  and?: Array< ModelFoodFilterInput | null > | null,
  or?: Array< ModelFoodFilterInput | null > | null,
  not?: ModelFoodFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFoodConnection = {
  __typename: "ModelFoodConnection",
  items:  Array<Food | null >,
  nextToken?: string | null,
};

export type CreateFoodMutationVariables = {
  input: CreateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type CreateFoodMutation = {
  createFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFoodMutationVariables = {
  input: UpdateFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type UpdateFoodMutation = {
  updateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFoodMutationVariables = {
  input: DeleteFoodInput,
  condition?: ModelFoodConditionInput | null,
};

export type DeleteFoodMutation = {
  deleteFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFoodQueryVariables = {
  id: string,
};

export type GetFoodQuery = {
  getFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFoodsQueryVariables = {
  filter?: ModelFoodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodsQuery = {
  listFoods?:  {
    __typename: "ModelFoodConnection",
    items:  Array< {
      __typename: "Food",
      id: string,
      name: string,
      energy: string,
      protein: string,
      carbohydrate: string,
      DietaryFiber: string,
      checked: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFoodSubscription = {
  onCreateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFoodSubscription = {
  onUpdateFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFoodSubscription = {
  onDeleteFood?:  {
    __typename: "Food",
    id: string,
    name: string,
    energy: string,
    protein: string,
    carbohydrate: string,
    DietaryFiber: string,
    checked: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
