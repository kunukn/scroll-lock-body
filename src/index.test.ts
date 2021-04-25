import { enableScrollLock, disableScrollLock, isScrollLockEnabled } from './';

describe('bodyScrollLock', () => {
  test('enable is a function', () => {
    expect(typeof enableScrollLock).toBe('function');
  });
  test('disable is a function', () => {
    expect(typeof disableScrollLock).toBe('function');
  });
  test('isEnabled is a function', () => {
    expect(typeof isScrollLockEnabled).toBe('function');
  });
});
