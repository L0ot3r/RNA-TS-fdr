import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './FormStyles';

import { useState } from 'react';
import { useStateContext, ClassEntry } from '../../context/StateContext';
import { set } from 'mongoose';

// import { createEntry } from '../../actions/entries'

const Form = () => {
	const navigation = useNavigation<any>();
	const {
		titre,
		heure,
		kilometre,
		today,
		formEntry,
		setTitre,
		setHeure,
		setKilometre,
		setToday,
		setFormEntry,
		list,
		setList,
	} = useStateContext();

	const [showResult, setShowResult] = useState<boolean>(false);

	const getTime = () => {
		const date = new Date();
		const hour = date.getHours();
		const minutes = date.getMinutes();
		return `${hour}h${minutes < 10 ? '0' + minutes : minutes}`;
	};

	const getToday = () => {
		const date = new Date();
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${day < 10 ? '0' + day : day}/${
			month < 10 ? '0' + month : month
		}/${year}`;
	};

	const handleShow = () => {
		if (titre && titre.length > 3) {
			setShowResult((prev) => !prev);
		}
		Keyboard.dismiss();
	};

	const handleReset = () => {
		setTitre('');
		setHeure('');
		setKilometre('');
		setShowResult(false);
	};

	const handleSave = () => {
		const entry = new ClassEntry(today, titre, heure, kilometre);
		setList([...list, entry]);
		setFormEntry(entry);
		// createEntry(entry);
		handleReset();
		navigation.navigate('List');
	};

	return (
		<View style={styles.container}>
			<View style={styles.divInput}>
				<Text style={styles.label}>Titre</Text>
				<TextInput
					placeholder='Maison'
					value={titre}
					keyboardType='default'
					style={styles.input}
					onChangeText={setTitre}
				/>
			</View>
			<View style={styles.divInput}>
				<Text style={styles.label}>Heure</Text>
				<TextInput
					placeholder='12h00'
					value={heure}
					keyboardType='default'
					style={styles.input}
					onFocus={() => setHeure(getTime())}
					onChangeText={setHeure}
				/>
			</View>
			<View style={styles.divInput}>
				<Text style={styles.label}>Kilomètrage</Text>
				<TextInput
					placeholder='Km'
					value={kilometre}
					keyboardType='numeric'
					style={styles.input}
					onChangeText={setKilometre}
				/>
			</View>

			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					handleShow();
					setToday(getToday());
				}}
			>
				<Text style={styles.buttonText}>Valider</Text>
			</TouchableOpacity>

			{showResult && (
				<View style={styles.divResult}>
					<Text style={styles.today}>{today}</Text>
					<View style={styles.divRow}>
						<Text style={styles.resultText}>{titre}</Text>
						<Text style={styles.resultText}>{heure}</Text>
						<Text style={styles.resultText}>{kilometre} km</Text>
					</View>
					<View style={styles.divValid}>
						<TouchableOpacity
							style={styles.btnValid}
							onPress={() => handleSave()}
						>
							<Text style={styles.buttonText}>Confirmer</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
};

export default Form;
