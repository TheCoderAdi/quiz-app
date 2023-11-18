import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors, { containerStyle } from "../constants/colors"

const LoginScreen = ({ navigation }) => {
    return (
        <View style={[containerStyle, { ...styles.container }]}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Registration Number"
                placeholderTextColor={Colors.textDark}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={Colors.textDark}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.text}>Create an account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: Colors.text,
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        backgroundColor: Colors.secondary,
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        color: Colors.text,
    },
    button: {
        backgroundColor: Colors.accent,
        padding: 15,
        borderRadius: 8,
        width: '70%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: Colors.text,
        fontSize: 18,
    },
    text: {
        color: Colors.text,
        marginTop: 20,
    },
});

export default LoginScreen;
