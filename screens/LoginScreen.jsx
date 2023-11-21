import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Colors, { containerStyle } from "../constants/colors"
import { Ionicons } from '@expo/vector-icons';


const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [regNo, setRegNo] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[containerStyle, { ...styles.container }]}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Registration Number"
                placeholderTextColor={Colors.textDark}
                keyboardType='numeric'
                value={regNo}
                onChangeText={text => setRegNo(text)}
            />
            <View style={styles.passwordInput}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={Colors.textDark}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={{ color: Colors.text }}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color={Colors.text} />
                </TouchableOpacity>
            </View>
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
    passwordInput: {
        backgroundColor: Colors.secondary,
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        color: Colors.text,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, passwordField: {
        flex: 1,
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
