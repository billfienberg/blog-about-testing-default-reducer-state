import reducer, { defaultState } from "./visibilityFilter";

describe(`the visibilityFilter reducer`, () => {
  it(`should return the default state`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = defaultState;
    expect(reducer(state, action)).toEqual(expectedOutput);
  });
});
