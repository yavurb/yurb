import qs from 'qs';

interface Props {
  endpoint: string;
  query?: Record<string, any>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, any>;
  defaultReturn?: any;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query = {},
  wrappedByKey,
  wrappedByList,
  method = "GET",
  body = {},
  defaultReturn,
}: Props): Promise<T | any> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  let url = `${import.meta.env.BACKEND_URL}/${endpoint}`;

  if (query) {
    url += `?${qs.stringify(query)}`;
  }

  const headers = new Headers();
  headers.set("x-api-key", import.meta.env.BACKEND_APIKEY)

  const options: RequestInit = {
    method,
    headers: headers,
  }

  if (method === "POST" || method === "PUT") {
    headers.set('Content-Type', 'application/json');
    options.body = JSON.stringify(body);
  }


  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      console.error(`Error fetching ${url}. Status: ${res.status}`);

      if (res.status === 404) {
        return defaultReturn;
      }

      // TODO: Handle error
      return defaultReturn;
    }

    let data = await res.json();

    if (wrappedByKey) {
      data = data[wrappedByKey];
    }
    if (wrappedByList) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.error(`Error fetching ${url}. ${error}`);

    return defaultReturn;
  }
}
