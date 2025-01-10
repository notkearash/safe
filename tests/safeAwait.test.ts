import { safeAwait } from '../src/safeAwait'; 

describe('safeAsync', () => {
  it('should resolve and return [undefined, data] when the promise resolves', async () => {
    const mockPromise = Promise.resolve('success');
    const result = await safeAwait(mockPromise);
    expect(result).toEqual([undefined, 'success']);
  });

  it('should catch and return [error] when the promise rejects', async () => {
    const mockError = new Error('failure');
    const mockPromise = Promise.reject(mockError);
    const result = await safeAwait(mockPromise);
    expect(result).toEqual([mockError]);
  });

  it('should handle promises with non-Error rejection values', async () => {
    const mockPromise = Promise.reject('non-error');
    const result = await safeAwait(mockPromise);
    expect(result).toEqual(['non-error']);
  });
});

