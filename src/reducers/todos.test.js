import reducer from "./todos";

describe(`the todos reducer`, () => {
  it(`should return the default state`, () => {
    const state = undefined;
    const action = {};
    const expectedOutput = [
      {
        text: "Consider using Redux",
        completed: true
      },
      {
        text: "Keep all state in a single tree",
        completed: false
      }
    ];
    expect(reducer(state, action)).toEqual(expectedOutput);
  });
});
