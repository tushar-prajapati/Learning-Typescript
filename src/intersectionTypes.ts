type User  = {
    name: string,
    age: number
}
type Employee  = {
    id: number,
    salary: number,
}

export const tushar: User & Employee ={
    name: "Tushar",
    id: 32,
    salary: 32000,
    age: 22
}