import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const initialState = {
  category: null,
  assignee: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "category/clicked":
      return { ...state, category: action.payload };
    case "assignee/clicked":
      return { ...state, assignee: action.payload };
    case "clear/clicked":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

export function FilterProvider({ children }) {
  const [{ category, assignee }, dispatch] = useReducer(reducer, initialState);

  function setFilter(filterBy, clicked) {
    if (filterBy === "category") {
      dispatch({ type: "category/clicked", payload: clicked });
    } else if (filterBy === "assignee") {
      dispatch({ type: "assignee/clicked", payload: clicked });
    }
  }

  function clearFilter() {
    dispatch({ type: "clear/clicked" });
  }

  return (
    <FilterContext.Provider
      value={{ category, assignee, setFilter, clearFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  return context;
}
