import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import {styles} from './styles'

export default class Details extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.contact}>
                <View style={{flex:3}}>
                    <Text style={styles.fields}>
                        {this.props.detail.name}
                    </Text>
                    <Text style={styles.fields}>
                        {this.props.detail.mobile}
                    </Text>
                    <Text style={styles.fields}>
                        {this.props.detail.city}
                    </Text>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={styles.rightField}>
                        {this.props.detail.role}
                    </Text>
                </View>
            </View>
        );
    }
};

