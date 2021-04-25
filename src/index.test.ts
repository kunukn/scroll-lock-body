import { enable, disable, isEnabled } from './';

describe('bodyScrollLock', () => {
  test('enable is a function', () => {
    expect(typeof enable).toBe('function');
  });
  test('disable is a function', () => {
    expect(typeof disable).toBe('function');
  });
  test('isEnabled is a function', () => {
    expect(typeof isEnabled).toBe('function');
  });
});
