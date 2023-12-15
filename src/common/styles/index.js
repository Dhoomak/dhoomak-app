import { StyleSheet } from "react-native"

const commonStyles = StyleSheet.create({
    shadow: {
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 7,
        shadowOpacity: 1,
    },
    flexRow:{
        display: 'flex',
        flexDirection: 'row',
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
    },
    flexRowSB:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    }

})

export default commonStyles