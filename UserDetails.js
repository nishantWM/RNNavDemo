import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fields}>
                    Name:{this.props.navigation.state.params.detail.name}
                </Text>
                <Text style={styles.fields}>
                    Mobile:{this.props.navigation.state.params.detail.mobile}
                </Text>
                <Text style={styles.fields}>
                    Mobile:{this.props.navigation.state.params.detail.address}
                </Text>
                <Text style={styles.fields}>
                    Role:{this.props.navigation.state.params.detail.role}
                </Text>
            </View>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
    },
    fields:{
        flex:1,
        fontSize:20,
        margin:10,
        textAlignVertical:'center'
    }
});