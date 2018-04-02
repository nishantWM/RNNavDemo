import {StyleSheet} from "react-native";
import {COLOR} from '../utils/color';

export const styles = StyleSheet.create({
    contact_header: {
        elevation: 0,
    },
    user_header: {
        backgroundColor: COLOR.AQUA,
        elevation:5
    },
    user_header_text: {
        fontSize: 17,
        color: COLOR.WHITE
    },
    icon:{
        textAlignVertical: 'center',
        paddingRight: 15,
        color:COLOR.WHITE
    }
});