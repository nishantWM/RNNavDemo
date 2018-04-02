import {StyleSheet} from "react-native";
import {COLOR} from '../../utils/color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: COLOR.PRIMARY,
    },
    header: {
        flex: 2,
        fontSize: 20,
        fontWeight: '500',
        fontFamily: '',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: COLOR.BLACK
    },
    controls: {
        flex: 3,
        margin: 10,
        padding: 10
    },
    button: {
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        backgroundColor:COLOR.AQUA,
        elevation:5,
    },
    button_text:{
        color:COLOR.WHITE
    }
});
