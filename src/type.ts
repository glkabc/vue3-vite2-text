import { User, StoreDataType } from  './store/type'

interface RequestResponse<T> {
  message: string,
  code: number,
  data: T,
}
export type {
  RequestResponse,
}
