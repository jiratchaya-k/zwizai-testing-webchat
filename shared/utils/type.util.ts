export type ObjectValueType<T> = T[keyof T]

//make partial some fields
export type MakeOptional<T, K extends keyof T> = Partial<Pick<T, K>> &
    Omit<T, K>

//make required some fields
export type MakeRequired<T, K extends keyof T> = Required<Pick<T, K>> &
    Omit<T, K>
