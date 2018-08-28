import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Itens extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.lista}>
				<View>
					<Image source={{uri: this.props.item.foto}} style={styles.foto} />
				</View>
				<View style={styles.detalhes}>
					<Text style={styles.titulo}>{this.props.item.titulo}</Text>
					<Text style={styles.valor}>R$ {this.props.item.valor},00</Text>
					<Text style={styles.endereco}>{this.props.item.local_anuncio}</Text>
					<Text style={styles.data}>{this.props.item.data_publicacao}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	data: {
		fontSize: 12,
	},
	detalhes: {
		flex: 1,
		flexWrap: 'nowrap',
		padding: 3,
		paddingLeft: 7,
		justifyContent: 'space-around',
	},
	endereco: {
		fontSize: 13,
	},
	foto: {
		height: 105,
		width: 105,
	},
	lista: {
		backgroundColor: '#90bde4',
		borderRadius: 4,
		borderWidth: 0.1,
		borderColor: 'blue',
		flex: 1,
		flexDirection: 'row',
		marginHorizontal: 3,
		marginVertical: 1.3,
		paddingVertical: 0.4,
	},
	titulo: {
		color: '#222',
		fontSize: 17,
		fontWeight: 'bold',
	},
	valor: {
		color: '#033158',
		fontSize: 14,
		fontWeight: 'bold',
	},
});
