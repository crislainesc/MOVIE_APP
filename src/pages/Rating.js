import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Rating({ value }) {
    return (
        <View style={styles.container}>
            <FontAwesome
                style={{ marginRight: 6 }}
                name="star"
                size={16}
                color={value >= 1 ? '#FF9F00' : '#57575B'}
            />
            <FontAwesome
                style={{ marginRight: 6 }}
                name="star"
                size={16}
                color={value >= 2 ? '#FF9F00' : '#57575B'}
            />
            <FontAwesome
                style={{ marginRight: 6 }}
                name="star"
                size={16}
                color={value >= 3 ? '#FF9F00' : '#57575B'}
            />
            <FontAwesome
                style={{ marginRight: 6 }}
                name="star"
                size={16}
                color={value >= 4 ? '#FF9F00' : '#57575B'}
            />
            <FontAwesome
                style={{ marginRight: 6 }}
                name="star"
                size={16}
                color={value >= 5 ? '#FF9F00' : '#57575B'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});