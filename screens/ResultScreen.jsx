import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Colors, { containerStyle } from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResultScreen = ({ route }) => {
    const { score, totalQuestions } = route.params;
    const scorePercentage = (score / totalQuestions) * 100;

    const animatedValue = useRef(new Animated.Value(0)).current;
    const deleteVars = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    }
    useEffect(() => {
        deleteVars();
    }, []);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [animatedValue]);

    return (
        <View style={[styles.container, containerStyle]}>
            <Animated.View
                style={[
                    styles.resultContainer,
                    {
                        opacity: animatedValue,
                        transform: [
                            {
                                translateY: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [100, 0],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Text style={styles.resultText}>Quiz Result</Text>
                <Text style={styles.scoreText}>
                    Score: {score} / {totalQuestions}
                </Text>
                <Text style={styles.scorePercentage}>{scorePercentage}%</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultContainer: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: Colors.secondary,
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: Colors.text,
    },
    scoreText: {
        fontSize: 18,
        marginBottom: 5,
        color: Colors.text,
    },
    scorePercentage: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.accent,
    },
});

export default ResultScreen;
