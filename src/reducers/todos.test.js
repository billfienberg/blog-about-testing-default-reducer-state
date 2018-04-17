import reducer from "./todos";

describe(`the todos reducer`, () => {
  it(`should return the default state`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = [];
    expect(reducer(state, action)).toEqual(expectedOutput);
  });
});
