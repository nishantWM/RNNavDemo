import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

import {StackNavigator} from "react-navigation";
import {ContactListStack} from './ContactList';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Contact List App</Text>
                <Button style={styles.controls} title={'Open Contacts'}
                        onPress={() => {
                            this.props.navigation.navigate('Contact');
                        }}
                />
            </View>
        );
    }
}

export const HomeScreenStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
            }
        },
        Contact: {
            screen: ContactListStack,
            navigationOptions: {
                title: 'Contacts',
            }
        }
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
    },
    controls: {
        flex: 3,
        // flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        margin: 10,
        padding: 10
    }
});
