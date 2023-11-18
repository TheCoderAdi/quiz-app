import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Colors, { containerStyle } from '../constants/colors';
import StudentProfile from '../components/StudentProfile';
import EnterQuiz from '../components/EnterQuiz';

const HomeScreen = ({ navigation }) => {

    const enterQuiz = () => {
        navigation.navigate('EnterQuiz');
    };

    return (
        <ScrollView>
            <View style={[{ ...containerStyle }, styles.container]}>
                <StudentProfile />
                <EnterQuiz />
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    button: {
        backgroundColor: Colors.secondary,
        padding: 15,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: Colors.text,
        fontSize: 18,
    },
});

export default HomeScreen;
