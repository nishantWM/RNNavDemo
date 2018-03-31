import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
    FlatList
} from 'react-native';
import Details from './Details'
import UserDetails from './UserDetails'
import {StackNavigator} from "react-navigation";

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [{
                id: 'user1',
                name: 'username1',
                role: 'admin',
                mobile: '12345',
                address: 'address1'
            }, {
                id: 'user2',
                name: 'username2',
                role: 'react',
                mobile: '456789',
                address: 'address2'
            }, {
                id: 'user3',
                name: 'username3',
                role: 'php',
                mobile: '987456',
                address: 'address3'
            }],
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={{backgroundColor: 'powderblue', padding: 10}}
                          data={this.state.values}
                    // extraData={this.state.test}
                          keyExtractor={(item) => item.id}
                          renderItem={
                              ({item}) =>
                                  <TouchableHighlight onPress={() => {
                                      // Alert.alert(item.name);
                                      this.props.navigation.navigate('UserDetail', {detail: item})
                                  }}>
                                      <Details detail={item}/>
                                  </TouchableHighlight>
                          }
                />
            </View>
        );
    }
}

export const ContactListStack = StackNavigator(
    {
        Contact:{
          screen:ContactList,
        },
        UserDetail: {
            screen: UserDetails,
            navigationOptions: ({navigation})=>({
                title: navigation.state.params.detail.name
            }),
        }
    }
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});
