/**
 * Default headers for all requests that requieres Authorization.
 */
export const headers = {
  Authorization: 'Bearer aSuperSecretKey',
  accept: 'application/json'
}

/**
 * Remote API BASE URL
 */
export const BASE_URL = 'https://echo-serv.tbxnet.com/v1'

/**
 * Remote API Endpoint List
 */
export const ENDPOINTS = {
  files: '/secret/files',
  fileName: '/secret/file'
}

/**
 * Current API PORT
 */
export const API_PORT = 5000
