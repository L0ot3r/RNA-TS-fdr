import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './EntryStyles';

import { Form } from '../../components';

const Entry = () => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.title}>
					Ajouter une entrée
				</Text>
				<View style={styles.content}>
					<Form />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Entry;