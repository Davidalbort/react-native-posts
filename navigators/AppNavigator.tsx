
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { UsersScreen, PostScreen, DetailScreen } from '../screens'

export type AppStackParamList = {
    users: undefined
    post: {user_id: number}
    detail: {title: string, body: string}
}


const Stack = createNativeStackNavigator<AppStackParamList>()
export const AppStack = () => {
	return (
		<Stack.Navigator initialRouteName='users'>
			<Stack.Screen name='users' component={UsersScreen} />
			<Stack.Screen name='post' component={PostScreen} />
			<Stack.Screen name='detail' component={DetailScreen} />
		</Stack.Navigator>
	)
}

