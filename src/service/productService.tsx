import { get, post } from '../util/request'

export interface LoginParamsType {
  username: string
  password: string
}

export function getUserContext(params) {
  return post('/user/getUserContext', params)
}

export function login(params) {
  return post('/user/login', params)
}
