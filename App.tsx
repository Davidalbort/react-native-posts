import { NavigationContainer } from "@react-navigation/native"
import { AppStack } from "./navigators/AppNavigator"
import { useColorScheme } from 'react-native'

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer >> {}

export default function App(props: NavigationProps) {
	const colorScheme = useColorScheme()


	return (
		<NavigationContainer
			{...props}
		>
			<AppStack />
		</NavigationContainer>
	)
}

