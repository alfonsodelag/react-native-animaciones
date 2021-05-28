import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function Animacion2() {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 450, // Al valor al que llega
            duration: 1000, // Cantidad de tiempo en llegar
        }
        ).start(); // Iniciar la animación
    }, [])

    return (
        <Animated.View style={[styles.caja, {
            width: animacion,
            height: animacion
        }]}>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: "cornflowerblue",
    }
});

// style={styles. }
