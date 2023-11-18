import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors, { containerStyle } from '../constants/colors';

const EnterQuiz = () => {
    const upcomingQuizzes = [
        { id: 1, title: 'Quiz 1', date: 'November 25, 2023' },
        { id: 2, title: 'Quiz 2', date: 'December 5, 2023' },
    ];

    const recentQuizzes = [
        { id: 3, title: 'Quiz A', date: 'November 15, 2023' },
        { id: 4, title: 'Quiz B', date: 'November 20, 2023' },
    ];

    const goToQuiz = (quizId) => {
        console.log(`Navigate to Quiz ${quizId}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Upcoming Quizzes</Text>
            {upcomingQuizzes.map((quiz) => (
                <TouchableOpacity
                    key={quiz.id}
                    style={styles.quizButton}
                    onPress={() => goToQuiz(quiz.id)}
                >
                    <Text style={styles.buttonText}>{quiz.title}</Text>
                    <Text style={styles.buttonText}>Date: {quiz.date}</Text>
                </TouchableOpacity>
            ))}

            <Text style={styles.heading}>Recent Quizzes</Text>
            {recentQuizzes.map((quiz, index) => (
                <TouchableOpacity
                    key={quiz.id}
                    style={[
                        styles.quizButton,
                        index === recentQuizzes.length - 1 && { marginBottom: 50 },
                    ]}
                    onPress={() => goToQuiz(quiz.id)}
                >
                    <Text style={styles.buttonText}>{quiz.title}</Text>
                    <Text style={styles.buttonText}>Date: {quiz.date}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 10
    },
    heading: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    quizButton: {
        backgroundColor: Colors.secondary,
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: Colors.text,
        fontSize: 16,
        marginBottom: 5,
    },
});

export default EnterQuiz;
