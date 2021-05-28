import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

export default function Animacion3() {
    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 360, // Al valor al que llega
            duration: 500, // Cantidad de tiempo en llegar
        }
        ).start(); // Iniciar la animación
    }, []);

    const interpolacion = animacion.interpolate({
        // ! inputRange: qué valores son los de entrada. Irá de 0  360 grados. Gracias a esto los numeros intermedios los generara automaticamente para la animacion, todo en medio segundo
        inputRange: [0, 360],
        // ! Los valores de salida que genera. Aqui le decimos que las salidas las queremos como unas strings, de 0 a 360 grados
        outputRange: ["0deg", "360deg"]
    })

    const estiloAnimacion = {
        // ! Qué es transform???
        transform: [{ rotate: interpolacion }]
    }

    return (
        <View>
            <Animated.View
                style={[styles.texto, estiloAnimacion]}
            >
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        width: 100,
        height: 100,
        backgroundColor: "cornflowerblue"

    }
});

// style={styles. }
