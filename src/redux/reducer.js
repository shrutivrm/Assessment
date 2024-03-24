import { SET_SEARCH_TERM, SET_CHECKBOX } from "./action";
import CollegeData from "../CollegeData.json";

const initialState = {
  searchTerm: "",
  tableData: [CollegeData.collegeData],
  checkboxes: {
    popularity: false,
    highestFees: false,
    lowestFees: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_CHECKBOX:
      const { checkboxName, isChecked } = action.payload;
      const updatedCheckboxes = Object.keys(state.checkboxes).reduce(
        (acc, key) => {
          acc[key] = key === checkboxName ? isChecked : false;
          return acc;
        },
        {}
      );
      return {
        ...state,
        checkboxes: updatedCheckboxes,
      };
    default:
      return state;
  }
};

export default reducer;
