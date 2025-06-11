export function optional(): void {
    type User = {
        name: string,
        age: number,
        email?: string
    }

    const user1 = {name: "User1", age:1, email: "none@email.com"}
    const user2 = {name: "User2", age:2}
    console.log(user1.name+"\n"+user2.name);
}