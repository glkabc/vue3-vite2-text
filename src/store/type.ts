export interface User {
  name: string;
  timeOut: number;
  id: string;
  token: string;
}

export interface StoreDataType {
  user: User;
  count: number;
}

