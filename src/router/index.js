import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import {StackNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import HomeScreen from "../screens/HomeScreen";
import ContactList from "../screens/ContactList";
import UserDetails from "../screens/UserDetails";

import {styles} from './styles';
import {COLOR} from "../utils/color";

export const Router = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null
            }
        },
        Contact: {
            screen: ContactList,
            navigationOptions: {
                title: 'Contacts',
                headerStyle: styles.contact_header,
            }
        },
        UserDetails: {
            screen: UserDetails,
            navigationOptions: ({navigation}) => ({
                title: navigation.state.params.detail.name.toUpperCase(),
                headerStyle: styles.user_header,
                headerTitleStyle: styles.user_header_text,
                headerTintColor: COLOR.WHITE,
                headerRight: (
                    <View style={{flexDirection: 'row'}}>
                        <StatusBar backgroundColor={COLOR.AQUA}
                                   barStyle="default"
                                   animated={true}
                        />
                        <Icon name="heart"
                              size={21}
                              style={styles.icon}/>
                        <Icon name="options-vertical"
                              size={20}
                              style={styles.icon}/>
                    </View>
                )
            })
        }
    }
);

