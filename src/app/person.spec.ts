import { Person } from './person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person('a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a')).toBeTruthy();
  });
});
