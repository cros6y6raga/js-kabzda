export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = copy.hair / power
    return copy
}


export function moveUser(u: UserWithLaptopType, city: string) {
    const copy = {
        ...u
    }
    copy.address === u.laptop
    return copy
}