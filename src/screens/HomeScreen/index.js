import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {NavigationActions} from 'react-navigation'

import {styles} from "./styles";

export default class HomeScreen extends Component {

    resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({routeName: 'Contact'}),
        ],
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Contact List App</Text>
                <View style={styles.controls}>
                    <TouchableOpacity activeOpacity={0.5}
                                      style={styles.button}
                                      onPress={() => {
                                          this.props.navigation.dispatch(this.resetAction);
                                      }}
                    >
                        <Text style={styles.button_text}>Open Contacts</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

