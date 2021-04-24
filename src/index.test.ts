import { enable, disable } from './';

describe('bodyScrollLock', () => {
  test('enable is a function', () => {
    expect(typeof enable).toBe('function');
  });
  test('disable is a function', () => {
    expect(typeof disable).toBe('function');
  });
});
