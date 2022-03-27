import { get, post } from '../util/request'

export interface LoginParamsType {
  username: string
  password: string
}

export function getList() {
  return get('/article/test', '')
}

export function login(params) {
  return post('/user/login', params)
}
