import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors, { containerStyle } from '../constants/colors';

const StudentProfile = () => {
    const studentData = {
        name: 'Aditya SwayamSiddha',
        regNo: '2241019447',
        branch: 'CSE',
    };

    return (
        <View style={styles.card}>
            <Image source={{
                uri: 'https://avatars.githubusercontent.com/u/56132780?v=4',
            }} style={styles.profileImage} />
            <View style={{ backgroundColor: Colors.accent, height: 100, width: 1 }} />
            <View style={styles.content}>
                <Text style={styles.text}>{studentData.name}</Text>
                <Text style={styles.text}>{studentData.regNo}</Text>
                <Text style={styles.text}>{studentData.branch}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        borderRadius: 10,
        padding: 15,
        margin: 20,
        alignItems: 'center',
        elevation: 5,
        gap: 10,
        width: "100%",
        shadowColor: Colors.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    text: {
        color: Colors.text,
        fontSize: 16,
        marginBottom: 5,
        textAlign: "left"
    },
});

export default StudentProfile;
