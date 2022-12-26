import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import { usePosts } from '../hooks/usePosts'
import { AppStackParamList } from '../navigators/AppNavigator'
import { ListItem } from '../components'

type PostProps = NativeStackScreenProps<AppStackParamList,'post'>


export const PostScreen = ({route,navigation}:PostProps) => {
	const {user_id} = route.params
	const { loading, posts} = usePosts()
	return(
		<View style={styles.center}>
			{loading ? <Text>Loading...</Text>
				:
				<FlatList 
					data={posts.filter(post => post.userId===user_id)}
					keyExtractor={item => String(item.id)}
					renderItem={({item}) => 
						<ListItem 
							title={item.title} 
							onPress={() => 
								navigation.navigate('detail',{title: item.title,body:item.body})
							}
						/>
					}
					style={styles.list}
					
				/>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	center:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	list: {
		alignSelf: 'stretch'
	}
})

