import { RenderHookResult, waitFor } from '@testing-library/react';

export const waitForUpdate = async <Result, Props>(
  result: RenderHookResult<Result, Props>['result'],
) => {
  /*current result */
  const currentResult = result.current;

  /* wait until result.current is update  */
  await waitFor(() => {
    expect(result.current).not.toBe(currentResult);
  });
};
