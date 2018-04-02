import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {styles} from './styles'
import Details from '../Details'

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [{
                id: 'user1',
                name: 'Username1',
                role: 'Admin',
                mobile: '123456',
                city: 'Ahmedabad'
            }, {
                id: 'user2',
                name: 'Username2',
                role: 'React',
                mobile: '456789',
                city: 'Mumbai'
            }, {
                id: 'user3',
                name: 'Username3',
                role: 'PHP',
                mobile: '987456',
                city: 'Delhi'
            }],
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                          data={this.state.values}
                    // extraData={this.state.test}
                          keyExtractor={(item) => item.id}
                          renderItem={
                              ({item}) =>
                                  <TouchableOpacity activeOpacity={0.5}
                                                    onPress={() => {
                                                        // Alert.alert(item.name);
                                                        this.props.navigation.navigate('UserDetails', {detail: item})
                                                    }}>
                                      <Details detail={item}/>
                                  </TouchableOpacity>
                          }
                />
            </View>
        );
    }
}



