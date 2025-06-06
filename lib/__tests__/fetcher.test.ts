import { fetcher } from '../fetcher';

describe('fetcher', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    jest.resetAllMocks();
  });

  it('returns json on ok response', async () => {
    const data = { message: 'ok' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(data),
    } as any);

    await expect(fetcher('https://example.com')).resolves.toEqual(data);
  });

  it('throws with message from body on error', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: () => Promise.resolve('bad request'),
    } as any);

    await expect(fetcher('https://example.com')).rejects.toThrow('bad request');
  });
});
