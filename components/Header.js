import { StyleSheet, Text, View } from "react-native";

export default function Header() {

   return (
        <View style={styles.header}>
            <Text style={styles.title}> Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 50,
    },
    title: {
        textAlign: 'center',
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold',
    },
});