export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}
type UsersType = {
    [key: string]: { id: number, name: string }
}
export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '494964': {id: 494964, name: 'Natasha'},
    '1223': {id: 1223, name: 'Valera'},
    '11111': {id: 11111, name: 'Katya'},
}
//users[1]
var user = {id: 100500, name: 'Igor'}
users[user.id] = user;
export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 494964, name: 'Natasha'},
    {id: 1223, name: 'Valera'},
    {id: 11111, name: 'Katya'},
]
// usersArray.push(user)
// var usersCopy=[...usersArray,user]