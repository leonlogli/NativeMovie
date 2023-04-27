import env from './env';
import { MOVIE_API_URL } from './constants';

type HttpOptions = Parameters<typeof fetch>;

const headers: Record<string, string> = {
  Authorization: `Bearer ${env.THE_MOVIE_DB_API_KEY}`,
};

interface HttpResponse<T = any> extends Awaited<ReturnType<typeof fetch>> {
  json(): Promise<T>;
}

export type ID = string | number;

const http = async <T = any>(...opts: HttpOptions) => {
  let input = opts[0];

  if (typeof input === 'string') {
    if (input.startsWith('/')) {
      input = `${MOVIE_API_URL}${input}`;
    }
  }

  return fetch(input, {
    ...opts[1],
    headers: { ...headers, ...opts[1]?.headers },
  }) as Promise<HttpResponse<T>>;
};

const setRequestHeaders = (input: typeof headers) => {
  Object.keys(input).forEach((key) => {
    headers[key] = input[key];
  });
};

const get = async <T = any>(...opts: HttpOptions) => {
  return http<T>(...opts).then((res) => res.json());
};

export default { http, setRequestHeaders, get };
