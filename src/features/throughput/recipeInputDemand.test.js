import recipeInputDemand from "./recipeInputDemand";

describe('recipeInputDemand', () => {
  it('demand for most simplistic scenario', () => {
    const recipe = {inputs: [{count: 1}], products: 1}
    expect(recipeInputDemand(recipe, 60)).toEqual([{demand: 60}])
  })

  it('demand when more then one piece is required', () => {
    const recipe = {inputs: [{count: 2}], products: 1}
    expect(recipeInputDemand(recipe, 60)).toEqual([{demand: 120}])
  })

  it('demand for more then one input', () => {
    const recipe = {inputs: [{count: 2}, {count: 1}], products: 1}
    expect(recipeInputDemand(recipe, 60)).toEqual([{demand: 120}, {demand: 60}])
  })

  it(`duration doesn't matter`, () => {
    const recipe = {inputs: [{count: 2}, {count: 1}], products: 1}
    expect(recipeInputDemand(recipe, 60)).toEqual([{demand: 120}, {demand: 60}])
  })

  it(`more then one product at once`, () => {
    const recipe = {inputs: [{count: 2}, {count: 1}], products: 2}
    expect(recipeInputDemand(recipe, 60)).toEqual([{demand: 60}, {demand: 30}])
  })
})