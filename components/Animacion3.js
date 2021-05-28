import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function Animacion3() {
    const [animacion] = useState(new Animated.Value(14));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 40, // Al valor al que llega
            duration: 1000, // Cantidad de tiempo en llegar
        }
        ).start(); // Iniciar la animación
    }, [])

    return (
        <View>
            <Animated.Text
                style={[styles.texto, { fontSize: animacion }]}
            >
                Animacion3
                </Animated.Text>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});

// style={styles. }
