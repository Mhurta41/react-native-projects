import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'Marj';
	return (
		<View>
			<Text style={styles.textStyle}>Getting started with react native!</Text>
			<Text style={styles.subheaderStyle}>My name is {name}!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45,
	},
	subheaderStyle: {
		fontSize: 20,
	},
});

export default ComponentsScreen;
