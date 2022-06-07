import { renderHook } from '@testing-library/react';
import { rest } from 'msw';
import { mswServer, waitForUpdate } from './test-utils';
import { useFetch } from './useFetch';

describe('useFetch', () => {
  it('should make fetch call', async () => {
    /* arrange */
    mswServer.use(
      rest.get('http://example.com/user.json', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            id: 'ppiyush13',
            name: 'Piyush Lodaya',
          }),
        );
      }),
    );

    /* act */
    const { result } = renderHook(() =>
      useFetch('http://example.com/user.json'),
    );

    /* assert */
    await waitForUpdate(result);
    expect(result.current).toEqual({
      id: 'ppiyush13',
      name: 'Piyush Lodaya',
    });
  });
});
