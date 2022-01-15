import request from "@/utils/request";
import { AxiosResponse } from "axios";
const baseUrl = import.meta.env.VITE_PATH;

async function getDataList() {
  interface ListType {
    name: string;
    age: number;
  }
  const res: AxiosResponse<ListType[]> = await request({
    method: "post",
    url: "/getList",
    data: {
      name: "小",
      age: 10,
    },
  });
  return res.data;
}

async function nestJSApisTest() {
  return await fetch(`${baseUrl}/test/post?id=1&name=asas`, {
    method: "POST",
    body: JSON.stringify({ name: "ss" }),
  });
}

export { getDataList, nestJSApisTest };
