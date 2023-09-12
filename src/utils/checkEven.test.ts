import {checkEven} from './checkEven';

describe('checkEven', () => {
  it('should return true for even numbers', () => {
    expect(checkEven(2)).toBe(true);
    expect(checkEven(0)).toBe(true);
    expect(checkEven(-4)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(checkEven(1)).toBe(false);
    expect(checkEven(3)).toBe(false);
    expect(checkEven(-7)).toBe(false);
  });

  it('should return true for zero', () => {
    expect(checkEven(0)).toBe(true);
  });

  it('should return true for negative even numbers', () => {
    expect(checkEven(-2)).toBe(true);
    expect(checkEven(-10)).toBe(true);
  });

  it('should return false for negative odd numbers', () => {
    expect(checkEven(-1)).toBe(false);
    expect(checkEven(-3)).toBe(false);
  });
});
