import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native';

export default function Animacion7() {
    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animacion1, {
                toValue: 300,
                duration: 1000
            }),
            Animated.spring(animacion2, {
                toValue: 10
            }),
            Animated.spring(animacion2, {
                toValue: 1
            }),
            Animated.timing(animacion1, {
                toValue: 600,
                duration: 1000
            }),
        ]).start();
    }, [])

    // Lo que hará de 0 a 300
    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { scale: animacion2 },
        ]
    }

    return (
        <View>
            <Animated.View style={[styles.caja, estiloAnimacion]}>

            </Animated.View>
        </View>
    )
}

// style={styles. }
const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: "cornflowerblue"
    }
});
