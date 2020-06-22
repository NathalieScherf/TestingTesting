import { multiply, substract, divide } from './functions';

describe('calculator functions', () => {
  describe('multiplies', () => {
    it('1 and 2', () => {
      let result = multiply(1,2);    
      expect(result).toEqual(2);
    })
    it('2 and 2', () => {
      let result = multiply(2,2)
      expect(result).toEqual(4)
    })
  })

  describe('substracts', () => {
    it('1 from 1', () => {
      let result = substract(1,1)
      expect(result).toEqual(0)
    })
    it('1 from 0', () => {
      let result = substract(0,1)
      expect(result).toEqual(-1)
    })
  })
  describe('divides', () => {
    it('1 by 1', () => {
      let result = divide(1,1)
      expect(result).toEqual(1)
    })

    it('does not divide 1 by 0', () => {
      document.body.innerHTML =
      `<div id="display">test</div>`

      let display = document.getElementById("display");

      divide(1,0)
      expect(display.innerHTML).toEqual("do not divide by 0, dummy!")
    })
  })
})






