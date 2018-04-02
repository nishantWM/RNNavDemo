import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {styles} from "./styles";

export default class UserDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image}>
                    <Icon name={"people"} size={70}/>
                </View>
                <Text style={styles.fields}>
                    {this.props.navigation.state.params.detail.name}
                </Text>
                <Text style={styles.fields}>
                    {this.props.navigation.state.params.detail.mobile}
                </Text>
                <Text style={styles.fields}>
                    {this.props.navigation.state.params.detail.city}
                </Text>
                <Text style={styles.fields}>
                    {this.props.navigation.state.params.detail.role}
                </Text>
            </View>
        );
    }
};
