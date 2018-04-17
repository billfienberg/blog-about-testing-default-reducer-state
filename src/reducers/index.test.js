import index from "./index";
import { VisibilityFilters } from "../actions";

describe(`the index reducer`, () => {
  it(`should return the default state for both`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = {
      todos: [],
      visibilityFilter: VisibilityFilters.SHOW_ALL
    };
    expect(index(state, action)).toEqual(expectedOutput);
  });
});
