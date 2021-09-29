import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (item) => item.id === action.payload
      );

      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favoriteMeals];
        updateFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeals };
      } else {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find((item) => item.id === action.payload)
          ),
        };
      }

    default:
      return state;
  }
};

export default mealsReducer;
