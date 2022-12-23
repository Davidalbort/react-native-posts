import { UserFromAPi } from "../types/service"

export const getUsers = async():Promise<UserFromAPi> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	return data
}