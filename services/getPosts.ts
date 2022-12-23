import { PostFromApi } from "../types/service"

export const getPosts = async():Promise<Array<PostFromApi>> => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await response.json()
	return data
}