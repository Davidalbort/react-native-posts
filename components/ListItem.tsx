import { TouchableOpacity, Text, StyleSheet} from 'react-native'
import { spacing } from '../themes'


interface PropsListItem {
    title: string
	onPress: () => void
}

export const ListItem = ({title, onPress}: PropsListItem) => {
	return(
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		borderBottomColor: '#eeee',
		borderBottomWidth: 1,
		height: 60,
		paddingHorizontal: spacing.medium,
	},
	text: {
		fontSize: 18,
	}
})