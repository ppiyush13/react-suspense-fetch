import { RenderHookResult, waitFor } from '@testing-library/react';

/* https://github.com/testing-library/react-testing-library/pull/991 */

export const waitForUpdate = async <Result, Props>(
  result: RenderHookResult<Result, Props>['result'],
) => {
  /* current result */
  const currentResult = result.current;

  /* wait until result.current is updated */
  await waitFor(() => {
    expect(result.current).not.toBe(currentResult);
  });
};
