import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView from 'react-native-maps';

import { styles } from './MapStyles';



const MyMap = () => {

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.title}>Map View</Text>
				<View style={styles.content}>
					<MapView style={styles.map} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default MyMap;
