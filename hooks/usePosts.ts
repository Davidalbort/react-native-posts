import { useState, useEffect } from 'react'
import { getPosts, getUsers } from '../services'
import { PostFromApi } from '../types/service'


export const usePosts = () => {
	const [posts, setPosts]= useState<PostFromApi[]>([])
	const [loading, setLoading]= useState<boolean>(false)
    
	useEffect(() => {
		setLoading(true)
		getPosts()
			.then(response => {
				setPosts(response)
				setLoading(false)
			})
	},[])
	return { loading, posts}
}