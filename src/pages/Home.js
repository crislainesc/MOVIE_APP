import React from 'react';
import {
    ScrollView,
    View, 
    Text, 
    Image, 
    FlatList, 
    StatusBar,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';

import profileImg from '../assets/profile.png';

import Constants from 'expo-constants';

import MovieItem from '../components/MovieItem';

import featuredMovies from '../assets/featuredMovies';
import movies from '../assets/movies';

const WIDTH = Dimensions.get('window').width;

export default function Home({ navigation }) {

    function goToMovieDetailsPage(movie){ 
        navigation.navigate('MovieDetails', { movie });

    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingTop: 15 }}
        >
            <StatusBar style="light" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.message}>Olá,</Text>
                    <Text style={styles.name}>Crislâine Santos</Text>
                </View>
                <Image source={profileImg} style={styles.image} />
            </View>
            <FlatList
                data={featuredMovies}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                snapToInterval={WIDTH - 20}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    style={styles.bannerBottom}
                    onPress={() => goToMovieDetailsPage(item)}
                    >
                        <Image source={{ uri: item.banner }} style={styles.bannerImage} />
                    </TouchableOpacity>
                )}
            />
            <View style={styles.moviesList}>
                <Text style={styles.moviesListTitle}>Lançamentos</Text>
                {
                    movies.map((item) => (
                        <MovieItem
                            key={item.id.toString()}
                            cover={item.cover}
                            title={item.title}
                            synopsis={item.synopsis}
                            rating={item.rating}
                            onPress={() => goToMovieDetailsPage(item)}


                        />
                    ))
                }
            </View>
        </ScrollView >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111820',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 35,
    },
    message: {
        color: '#64696E',
        fontSize: 18,
        fontFamily: 'Poppins_400Regular'

    },
    name: {
        color: '#FFFFFF',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Poppins_600SemiBold'
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    bannerBottom: {
        width: WIDTH - 40,
        aspectRatio: 1.78
    },
    bannerImage: {
        height: '100%',
        width: '100%',
        borderRadius: 5
    },
    moviesList: {
        padding: 20
    },
    moviesListTitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        marginBottom: 15
    },
});