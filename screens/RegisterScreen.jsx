import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Keyboard, Animated } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Colors, { containerStyle } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { branchOptions, branchPlaceholder } from "../constants/data"

const RegistrationScreen = ({ navigation }) => {
    const [regNo, setRegNo] = useState('');
    const [name, setName] = useState('');
    const [branch, setBranch] = useState('');
    const [section, setSection] = useState('');
    const [batch, setBatch] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    const [animatedPadding] = useState(new Animated.Value(0));

    const disableBtn = !regNo || !name || !branch || !section || !batch || !password || !confirmPassword;
    const handleRegistration = () => {
        console.log(firstName, email, password, confirmPassword)
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardOpen(true);
            animatePadding(50);
        });

        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardOpen(false);
            animatePadding(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    const animatePadding = (value) => {
        Animated.timing(animatedPadding, {
            toValue: value,
            duration: 350,
            useNativeDriver: false,
        }).start();
    };

    return (

        <Animated.ScrollView style={[containerStyle, { paddingTop: animatedPadding }]}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text style={styles.title}>Registration</Text>
            <TextInput
                style={styles.input}
                placeholder="Registration Number"
                placeholderTextColor={Colors.textDark}
                value={regNo}
                onChangeText={text => setRegNo(text)}
                keyboardType='numeric'
                maxLength={10}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={Colors.textDark}
                value={name}
                onChangeText={text => setName(text)}
            />
            <View style={{ ...styles.input, padding: 1 }}>
                <RNPickerSelect
                    placeholder={branchPlaceholder}
                    items={branchOptions}
                    onValueChange={(value) => setBranch(value)}
                    style={{
                        inputAndroid: {
                            color: Colors.text,
                        },
                    }}
                    value={branch}
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Section"
                placeholderTextColor={Colors.textDark}
                value={section}
                onChangeText={text => setSection(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Batch"
                placeholderTextColor={Colors.textDark}
                value={batch}
                onChangeText={text => setBatch(text)}
                keyboardType='numeric'
            />
            <View style={styles.passwordInput}>
                <TextInput
                    style={styles.passwordField}
                    placeholder="Password"
                    placeholderTextColor={Colors.textDark}
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color={Colors.text} />
                </TouchableOpacity>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor={Colors.textDark}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={text => setConfirmPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegistration}
                disabled={disableBtn}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Already have an account?</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        color: Colors.text,
        fontSize: 24,
        marginVertical: 30,
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

export default RegistrationScreen;
