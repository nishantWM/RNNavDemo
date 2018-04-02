import {StyleSheet} from "react-native";
import {COLOR} from '../../utils/color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: COLOR.SECONDARY,
    },
    fields: {
        flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        borderRadius: 10,
        color: COLOR.BLACK,
        padding: 10,
        margin: 5,
        elevation: 3,
        backgroundColor: COLOR.WHITE
    },
    image: {
        flex: 5,
        justifyContent:'center',
        alignItems:'center'
    }
});