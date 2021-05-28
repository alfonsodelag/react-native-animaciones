import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function Animacion1() {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 1, // Al valor al que llega
            duration: 500, // Cantidad de tiempo en llegar
        }
        ).start(); // Iniciar la animación
    }, [])

    return (
        <Animated.View style={{ opacity: animacion }}>
            <Text style={styles.texto}>Animacion1</Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
});

// style={styles. }
