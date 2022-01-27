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
  return await fetch(`${baseUrl}/test/post?id=1&names=asas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ name: "ss" }),
  }).then((res) => res.json());
}

async function axiosNestJsApisTest() {
  return await request({
    method: "POST",
    url: "/cats",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    data: {
      type: "POST",
      code: "0",
    },
  });
}

async function axiosNestJsApisGetTest() {
  return request({
    method: "GET",
    url: "/cats?name=ming",
    headers: {
      user: "admin",
    },
  });
}

async function axiosNestHomeApiTest() {
  return request({
    method: "GET",
    url: "/home",
  });
}

export {
  getDataList,
  nestJSApisTest,
  axiosNestJsApisTest,
  axiosNestJsApisGetTest,
  axiosNestHomeApiTest,
};
