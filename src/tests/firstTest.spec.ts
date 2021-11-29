import { User } from '@entities/User';

describe('Sum test', () => {
  it('Should be return a name', () => {
    const response = User('Renan');

    expect(response).toBe('Renan');
  });
});
