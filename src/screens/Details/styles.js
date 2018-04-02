import {StyleSheet} from "react-native";
import {COLOR} from '../../utils/color';

export const styles = StyleSheet.create({
    contact: {
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLOR.AQUA,
        padding: 10,
        margin: 5,
        elevation: 2
    },
    fields: {
        flex: 1,
        fontSize: 15,
        fontWeight:'bold',
        paddingLeft: 5,
        color: COLOR.GREY
    },
    rightField: {
        fontSize: 15,
        fontWeight:'bold',
        textAlign: 'right',
        paddingRight: 5,
        color: COLOR.GREY,
    }
});