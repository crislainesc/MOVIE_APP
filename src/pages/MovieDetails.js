import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
} from 'react-native';

import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import Rating from './Rating';

const WIDTH = Dimensions.get('window').width;


export default function MovieDetails ({ navigation, route }){
    const { title, cover, releaseDate, genre, rating, synopsis, duration, cast } = route.params.movie;
    function goBack() {
        navigation.goBack();
    }


    return (
        <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 25}}>
            <Image source={{ uri: cover }} style={styles.backgroundImage}/>
            <StatusBar hidden={true}/>
            <View  style={styles.header}>
                <TouchableOpacity 
                style={styles.headerButtom}
                onPress={goBack}
                >
                    <Feather 
                    name="chevron-left" 
                    size={21} 
                    color="white"
                    style={{ marginLeft: -2 }}
                />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerButtom}>
                    <Feather name="bookmark" size={18} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <LinearGradient
                    colors=
                    {[
                        'rgba(17,24,32,0)', 
                        'rgba(17,24,32,0.7)',
                        'rgba(17,24,32,1)'
                    ]}
                    style={{ width: '100%', height: 100}}
                />
                <View style={styles.content}>
                    <View style={styles.movieInfoContainer}>
                        <Text 
                        style={styles.movieTitle}
                        numberOfLines={2}
                        >{title}</Text>
                        <Text style={styles.movieInfoText}>
                        {releaseDate} · {genre} · {duration}
                        </Text>
                        <Rating value={rating}/>
                    </View>
                    <View style={styles.movieDetailsContainer}>
                        <View style={styles.synopsisContainer}>
                        <Text style={styles.movieDetailsTitle}>Sinope</Text>
                        <Text style={styles.synopsis}>{synopsis}</Text>
                        </View>
                        <View style={styles.castContainer}>
                            <Text style={styles.movieDetailsTitle}>
                                Elenco
                            </Text>
                            <FlatList
                            horizontal={true}
                                data={cast}
                                keyExtractor={(item) => item.id.toString()}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <View style={styles.castItem}>
                                        <Image source={{ uri: item.image}} style={styles.castItemImage}/>
                                        <Text style={styles.castItemName} numberOfLines={1}>{item.name}</Text>
                                        <Text style={styles.castItemCharacter} numberOfLines={1}>{item.character}</Text>
                                        
                                    </View>
                                )}

                            />
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111820',
    },
    backgroundImage: {
        position: 'absolute',
        width: WIDTH,
        aspectRatio: 0.6
    },
    header: {
        padding: 20,
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerButtom: {
        backgroundColor: '#1D242B',
        width: 30,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#111820',
        flex: 1,
        paddingHorizontal: 20
    },
    wrapper: {
        flex: 1,
        marginTop: '80%'
    },
    movieInfoContainer: {
        width: '100%',
        paddingHorizontal: 50,
        alignItems: 'center',
        marginTop: -55
    },
    movieTitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_800ExtraBold',
        fontSize: 26,
        textAlign: 'center'

    },
    movieInfoText: {
        color: '#888B8F',
        fontFamily: 'Poppins_400Regular',
        marginTop: -5,
        marginBottom: 6
    },
    movieDetailsContainer: {
        paddingTop: 30,
    },
    synopsisContainer: {
        paddingBottom: 30,
    },
    movieDetailsTitle: {
        color: '#FFFFFF',
        fontFamily: 'Poppins_500Medium',
        paddingBottom: 5,
        fontSize: 16
    },
    synopsis: {
        color: '#888B8F',
        fontFamily: 'Poppins_400Regular',
    },
    castItem: {
        width: 100,
        alignItems: 'center',
        marginRight: 15
    },
    castItemName: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'Poppins_500Medium'
    },
    castItemCharacter: {
        color: '#888B8F',
        fontSize: 12,
        fontFamily: 'Poppins_500Medium'
    },
    castItemImage: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginBottom: 5
    }
});