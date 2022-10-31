import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { createFood, deleteFood } from "./graphql/mutations";
import { listFoods } from "./graphql/queries";
import { ListFoodsQuery, CreateFoodInput as Food } from "./API";
import awsExports from "./aws-exports";
import { GraphQLResult } from "@aws-amplify/api";
// import { Food } from "./types/food";
Amplify.configure(awsExports);

const initialState: Food = {
  id: "",
  name: "",
  energy: "",
  protein: "",
  carbohydrate: "",
  DietaryFiber: "",
  checked: false,
};

const App: React.VFC = () => {
  const [formState, setFormState] = useState(initialState);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const setInput = (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const fetchFoods = async () => {
    try {
      const foodData = (await API.graphql(
        graphqlOperation(listFoods)
      )) as GraphQLResult<ListFoodsQuery>;
      if (foodData.data?.listFoods?.items) {
        const foods = foodData.data.listFoods.items as Food[];
        setFoods(foods);
      }
    } catch (err) {
      console.log("error fetching foods", err);
    }
  };

  const addFood = async () => {
    try {
      if (
        formState.id === "" ||
        formState.name === "" ||
        formState.energy === "" ||
        formState.protein === "" ||
        formState.carbohydrate === "" ||
        formState.DietaryFiber === ""
      ) {
        return;
      }
      const food: Food = { ...formState };
      setFoods([...foods, food]);
      setFormState(initialState);
      (await API.graphql(
        graphqlOperation(createFood, { input: food })
      )) as GraphQLResult<Food>;
    } catch (err) {
      console.log("error creating food:", err);
    }
  };
  // チェクボックスつけたらフラグも立てる
  const checkboxHandler = (checked: boolean, index: number) => {
    // indexをもとにフラグたてた後のFood配列を作成
    const newFoods: Food[] = foods.map((d, i) => {
      if (i === index) {
        return {
          id: d.id,
          name: d.name,
          energy: d.energy,
          protein: d.protein,
          carbohydrate: d.carbohydrate,
          DietaryFiber: d.DietaryFiber,
          checked: checked,
        } as Food;
      }
      return d;
    });
    setFoods(newFoods);
  };

  // 食べ物削除機能作る
  const removeFood = async () => {
    try {
      console.log("removeFood!");
      // チェックフラグ立ってるデータをフィルタリングして
      const checkFoods = foods.filter((food) => food.checked);
      // そのデータを除いたデータをStateにセット
      // フラグ立ってたデータをDynamoDBからも削除
      checkFoods.map(async (food) => {
        (await API.graphql(
          graphqlOperation(deleteFood, { input: food })
        )) as GraphQLResult<Food>;
      });
      // setFoods(foods.filter((food) => !food.checked));
    } catch (err) {
      console.log("error removing food:", err);
    }
  };
  console.log("render");
  return (
    <div style={styles.container}>
      <h2>Food Manager</h2>
      <input
        onChange={(event) => setInput("id", event.target.value)}
        style={styles.input}
        value={formState.id!}
        placeholder="Id: #XXX"
      />
      <input
        onChange={(event) => setInput("name", event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput("energy", event.target.value)}
        style={styles.input}
        value={formState.energy}
        placeholder="Energy: [kcal]"
      />
      <input
        onChange={(event) => setInput("protein", event.target.value)}
        style={styles.input}
        value={formState.protein}
        placeholder="Protein: [g]"
      />
      <input
        onChange={(event) => setInput("carbohydrate", event.target.value)}
        style={styles.input}
        value={formState.carbohydrate}
        placeholder="Carbohydrate: [g]"
      />
      <input
        onChange={(event) => setInput("DietaryFiber", event.target.value)}
        style={styles.input}
        value={formState.DietaryFiber}
        placeholder="DietaryFiber: [g]"
      />
      <button style={styles.button} onClick={addFood}>
        Create Food
      </button>
      <button style={styles.button} onClick={removeFood}>
        Delete Food
      </button>
      {foods.map((food, index) => (
        <div key={food.id ? food.id : index} style={styles.food}>
          <input
            type={"checkbox"}
            checked={food.checked}
            onChange={() => checkboxHandler(!food.checked, index)}
          />
          <p style={styles.foodId}>Id: {food.id}</p>
          <p style={styles.foodName}>Name: {food.name}</p>
          <p style={styles.foodData}>エネルギー: {food.energy}kcal</p>
          <p style={styles.foodData}>タンパク質: {food.protein}g</p>
          <p style={styles.foodData}>炭水化物: {food.carbohydrate}g</p>
          <p style={styles.foodData}>食物繊維: {food.DietaryFiber}g</p>
        </div>
      ))}
    </div>
  );
};

const styles: {
  [key: string]: React.CSSProperties;
} = {
  container: {
    width: "75%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  food: {
    flexDirection: "unset",
    justifyItems: "center",
    width: "100%",
  },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  foodId: { fontSize: 22, fontWeight: "bold" },
  foodName: { fontSize: 20, fontWeight: "bold" },
  foodData: { fontSize: 15 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default withAuthenticator(App);
