import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './HomeStyles';

const Home = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Accueil</Text>
				<View style={styles.content}>
					<Text>Welcome</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Home;
