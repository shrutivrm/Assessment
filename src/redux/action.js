export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SET_CHECKBOX = "SET_CHECKBOX";

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});

export const setCheckbox = (checkboxName, isChecked) => ({
  type: SET_CHECKBOX,
  payload: { checkboxName, isChecked },
});
