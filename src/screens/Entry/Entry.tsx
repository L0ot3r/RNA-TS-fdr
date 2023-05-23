import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './EntryStyles';

import { Form } from '../../components';

const Entry = () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.title}>Ajouter une étape</Text>
				<ScrollView style={styles.content}>
					<Form />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Entry;
