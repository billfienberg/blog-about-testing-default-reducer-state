import index from "./index";
import { defaultState as defaultTodosState } from "./todos";
import { defaultState as defaultVisibilityFilterState } from "./visibilityFilter";

describe(`the index reducer`, () => {
  it(`should return the default state for both`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = {
      todos: defaultTodosState,
      visibilityFilter: defaultVisibilityFilterState
    };
    expect(index(state, action)).toEqual(expectedOutput);
  });
});
