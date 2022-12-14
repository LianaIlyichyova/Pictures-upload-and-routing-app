import { createStore } from "redux";

const store = createStore(
  function (state = "", action) {
    switch (action.type) {
      case "CATEGORIES": {
        return {
          ...state,
          categories: {
            categories: action.payload.categories,
          },
        };
      }
      case "CURRENT_PAGE_ID": {
        return {
          ...state,
          currentPageId: {
            id: action.payload.id,
          },
        };
      }
      case "CATS": {
        return {
          ...state,
          cats: {
            cats: action.payload.cats,
          },
        };
      }
      case "LOAD_MORE": {
        return {
          ...state,
          picsCurrentCount: {
            picsCurrentCount: action.payload.picsCurrentCount,
          },
        };
      }

      default:
        return state;
    }
  },
  {
    categories: {
      categories: [],
    },
    currentPageId: {
      id: 0,
    },
    cats: {
      cats: [],
    },
    picsCurrentCount: {
      picsCurrentCount: 10,
    },
  }
);

export default store;
