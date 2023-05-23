import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './ListStyles';

import { useStateContext } from '../../context/StateContext';


const List = () => {
	const { list, fetchData } = useStateContext();

	// Si les éléments de la liste on la même date, on les regroupe dans un même tableau
	const groupBy = (array: any[], key: string) => {
		return array.reduce((result, currentValue) => {
			(result[currentValue[key]] = result[currentValue[key]] || []).push(
				currentValue
			);
			return result;
		}, {});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const groupedList = groupBy(list, 'day');

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Historique des trajets</Text>
				<ScrollView style={{ width: '100%', marginBottom: 40 }}>
					<View style={styles.content}>
						{Object.keys(groupedList).map((key, index) => (
							<View key={index} style={styles.divResult}>
								<Text style={styles.day}>{key}</Text>
								{groupedList[key].map((item: any, index: number) => (
									<View key={index} style={styles.divRow}>
										<Text style={styles.resultText}>{item.titre}</Text>
										<Text style={styles.resultText}>{item.heure}</Text>
										<Text style={styles.resultText}>{item.kilometre} km</Text>
									</View>
								))}
							</View>
						))}
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default List;
