import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Rating from '../pages/Rating';



export default function MovieItem({ 
    cover, title, synopsis, rating, onPress
}) {
    return (
        <TouchableOpacity style={styles.movieItem} onPress={onPress}>
            <Image
                source={{ uri: cover }}
                style={styles.movieItemImage}
            />
            <View style={styles.movieContent}>
                <Text
                    style={styles.movieTitle}>{title}</Text>
                <Text
                    style={styles.movieSynopsis}
                    numberOfLines={2}
                >
                    {synopsis}
                </Text>
                <Rating value={rating}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movieItem: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    
    },
    movieItemImage: {
        width: 70,
        height: 110,
        borderRadius: 5,
        marginRight: 10
      },
    movieContent: {
        flex: 1
      },
    movieTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        height: 25,
        fontFamily: 'Poppins_500Medium',
      },
    movieSynopsis: {
        color: '#585D62',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
        marginVertical: 6
    
      },

});