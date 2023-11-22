// @ts-ignore
/* eslint-disable */
import {request} from "@umijs/max";

export async function getAdvisorAgents(
  params: API.getAdvisorAgentsParams,
  options?: { [key: string]: any }) {
  return request<API.getAdvisorAgentsParams>('/advisor/agents', {
    method: 'GET',
    params: {...params},
    ...(options || {}),
  });
}

// TODO: 生成的类型需要根据实际情况修改
export async function getAdvice(
  params: API.getAdviceParams,
  options?: { [key: string]: any }) {

  return request<API.getAdviceParams>('/advisor', {
    method: 'GET',
    params: {...params},
    ...(options || {}),
  });
}
