import { renderHook } from '@testing-library/react';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  it.skip('should make fetch call', () => {
    const { result } = renderHook(() =>
      useFetch('http://example.com/user.json'),
    );

    console.log(result);
  });
});
