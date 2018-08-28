import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { ScrollView } from 'react-native';
import ListaItens from './src/components/ListaItens';

class app4 extends Component {
	render() {
		return(
			<ScrollView style={{backgroundColor: '#1e73bd'}}>
				<ListaItens />
			</ScrollView>
		);
	}
}

AppRegistry.registerComponent('app4', () => app4);
