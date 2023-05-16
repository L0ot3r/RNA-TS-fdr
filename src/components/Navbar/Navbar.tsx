import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './NavbarStyles';

import { Icons } from '../../assets/Icons'


const Navbar = () => {

	const navigation = useNavigation<any>();

	return (
		<View style={styles.nav}>
			<TouchableOpacity
				onPress={() => {
					if (navigation.canGoBack()) {
						navigation.goBack();
					}
				}}
			>
				<Text style={styles.iconNav}>{Icons.Back}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Text style={styles.iconNav}>{Icons.Home}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('Entry')}>
				<Text style={styles.iconNav}>{Icons.addBox}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('List')}>
				<Text style={styles.iconNav}>{Icons.List}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Navbar;
