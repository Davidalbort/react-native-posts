import {useState} from 'react'
import { View, StyleSheet,FlatList, Text  } from "react-native"
import { ListItem } from "../components"
import { useUsers } from '../hooks/useUsers'
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParamList } from '../navigators/AppNavigator'
import { getMeals } from '../services/get'

const users = [
	{
		id: 1,
		name: 'chanchito Feliz'
	},
	{
		id: 2,
		name: 'chanchito Triste'
	},
]

type UserProps = NativeStackScreenProps<AppStackParamList,'users'>

export const UsersScreen = ({navigation}: UserProps) => {
	getMeals().then(response => console.log(response))
	const { users, loading} = useUsers()
	return(
		<View style={styles.container}>
			{loading ? <Text>Loading...</Text>
				:
				<FlatList 
					data={users}
					keyExtractor={item => String(item.id)}
					renderItem={({item}) => 
						<ListItem 
							title={item.name} 
							onPress={() => navigation.navigate('post',{user_id: item.id})}/>}
					style={styles.list}
					
				/>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	list: {
		alignSelf: 'stretch'
	}
})
