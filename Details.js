import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Details extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.contact}>
                <View style={{flex:3}}>
                    <Text style={styles.fields}>
                        Name:{this.props.detail.name}
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.fields}>
                        Role:{this.props.detail.role}
                    </Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    contact: {
        flexDirection:'row',
        backgroundColor: 'skyblue',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
        margin: 5
    },
    fields: {
        flex: 1,
    }
});