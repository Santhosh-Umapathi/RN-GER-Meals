import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action) {
    // case value:
    //   break;

    default:
      return state;
  }
};

export default mealsReducer;
