interface User {
    name: string,
    timeOut: number,
    id: string,
    token: string,
}

interface StoreDataType {
    user: User,
    count: number,
}

export type {
    User,
    StoreDataType,
}