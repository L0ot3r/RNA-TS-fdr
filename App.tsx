import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { StateContext } from './src/context/StateContext';

import { theme } from './src/utils/theme';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import { Home, Entry, List } from './src/screens';

//Components
import { FocusedStatusBar, Navbar } from './src/components';

const Stack = createStackNavigator();

export default function App() {
	return (
		<StateContext>
			<PaperProvider theme={theme}>
				<NavigationContainer>
					<FocusedStatusBar backgroundColor={theme.colors.primary} />
					<View style={styles.container}>
						<Stack.Navigator
							screenOptions={{
								headerShown: false,
							}}
						>
							<Stack.Screen name='Home' component={Home} />
							<Stack.Screen name='Entry' component={Entry} />
							<Stack.Screen name='List' component={List} />
						</Stack.Navigator>
					</View>
					<Navbar />
				</NavigationContainer>
			</PaperProvider>
		</StateContext>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
	},
});
