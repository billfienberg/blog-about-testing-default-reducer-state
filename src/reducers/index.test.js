import index from "./index";
import { VisibilityFilters } from "../actions";

describe(`the index reducer`, () => {
  it(`should return the default state for both`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = {
      todos: [
        {
          text: "Consider using Redux",
          completed: true
        },
        {
          text: "Keep all state in a single tree",
          completed: false
        }
      ],
      visibilityFilter: VisibilityFilters.SHOW_COMPLETED
    };
    expect(index(state, action)).toEqual(expectedOutput);
  });
});
