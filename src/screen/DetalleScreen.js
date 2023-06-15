import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import librosData from "../components/libros-data";

const DetalleScreen = ({navigation, route}) => {

    return (
        <View style={styles.mainView}>
            <View style={styles.books}>
                {librosData.map(libro => (
                    <View key={libro.nombre} style={styles.book}>
                        <Text style={styles.text}>Nombre: {libro.nombre}</Text>
                        <Text style={styles.text}>Autor: {libro.autor}</Text>
                        <Image style={styles.img} source={libro.imagen} />
                    </View>
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '85%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    books: {
        width: '100%',
        height: '100%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    book: {
        width: '45%',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        marginBottom: 5,
        textAlign: 'center',
    },
    img: {
        width: '100%',
        height: 800,
        resizeMode: 'cover',
        borderRadius: 8,
    },
});

export default DetalleScreen;