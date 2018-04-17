import reducer from "./visibilityFilter";
import { VisibilityFilters } from "../actions";

describe(`the visibilityFilter reducer`, () => {
  it(`should return the default state`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = VisibilityFilters.SHOW_ALL;
    expect(reducer(state, action)).toEqual(expectedOutput);
  });
});
