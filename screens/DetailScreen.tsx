import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text, StyleSheet} from 'react-native'
import { AppStackParamList } from '../navigators/AppNavigator'

type DetailProps = NativeStackScreenProps<AppStackParamList,'detail'>


export const DetailScreen = ({route}:DetailProps) => {
	const{title,body} = route.params
	return(
		<View style={styles.center}>
			<Text>{title}</Text>
			<Text>{body}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	center:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})