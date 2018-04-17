import { ADD_TODO, TOGGLE_TODO } from "../actions";
export const defaultState = [
  {
    text: "Consider using Redux",
    completed: true
  },
  {
    text: "Keep all state in a single tree",
    completed: false
  }
];

function todos(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todos;
