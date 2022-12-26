import { useState, useEffect } from 'react'
import { getUsers } from '../services'
import { UserFromAPi } from '../types/service'
export interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export const useUsers = () => {
	const [users, setUsers]= useState<Users[]>([])
	const [loading, setLoading]= useState<boolean>(false)
    
	useEffect(() => {
		setLoading(true)
		const mapToFromGetUser = (responseUsers: UserFromAPi):Array<Users> => {
			return responseUsers.map( userFromApi => {
				const {
					id,
					name,
					email,
					phone,
					website,
					username,
				}= userFromApi
				return {
					id,
					name,
					phone,
					website,
					email,
					username,
				}
			})
		}
		getUsers()
			.then(mapToFromGetUser)
			.then(response => {
				setUsers(response)
				setLoading(false)
			})
	},[])
	return { loading, users}
}