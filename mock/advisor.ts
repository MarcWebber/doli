import {request} from "@umijs/max";

export async function getAdvice(
  params: API.getAdviceParams,
  options?: { [key: string]: any }) {

  return request<API.getAdviceParams>('/advisor', {
    method: 'GET',
    params: {...params},
    ...(options || {}),
  });
}
