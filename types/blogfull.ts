type User = {
    image: string,
    email:string
    name:string
}

export type SingleBLog = {
    title: string,
    user: User,
    url: string,
    content: string
}