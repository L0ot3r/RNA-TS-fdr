import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './ListStyles';

import { useStateContext } from '../../context/StateContext';

const List = () => {
	const { list } = useStateContext();

	console.log(list);
	

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Liste</Text>
				<View style={styles.content}>
					{list.map((item, index) => (
						<View key={index} style={styles.divResult}>
							<Text style={styles.today}>{item.today}</Text>
							<View style={styles.divRow}>
								<Text style={styles.resultText}>{item.titre}</Text>
								<Text style={styles.resultText}>{item.heure}</Text>
								<Text style={styles.resultText}>{item.kilometre} km</Text>
							</View>
						</View>
					))}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default List;