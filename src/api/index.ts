import request from "@/utils/request";
import { AxiosResponse } from "axios";

async function getDataList() {
  interface ListType {
    name: string,
    age: number,
  }
  const res: AxiosResponse<ListType[]> = await request({
    method: 'post',
    url: '/getList',
    data: {
      name: '小',
      age: 10,
    }
  })
  return res.data
}

export {
  getDataList,
}