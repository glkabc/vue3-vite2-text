import { RequestResponse } from "@/type"
import axios, { ResponseType, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

const request = axios.create({
  baseURL: 'http://10.7.109.142:3334',
  timeout: 2000,
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})

// 拦截请求返回的数据
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // TODO SOME
    console.log(response, '请求返回回来的拦截')
    return response
  },
  (error: AxiosError) => {
    console.log(error.toJSON())
  }
)

// 拦截请求时的数据
const requestInterceptor = request.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    // TODO SOME
    console.log(request, '请求发出前的拦截')
    const token = '2134567898765432'
    request.headers = {
      ...request.headers,
      token,
    }
    return request
  },
  (error: AxiosError) => {
    console.log(error.toJSON())
  }
)

function removeInterceptor () {
  request.interceptors.request.eject(requestInterceptor);
}

async function requestData<T = RequestResponse<any>>(config: AxiosRequestConfig<T>) {
  return request(config)
}

export default request
export { removeInterceptor, requestData }