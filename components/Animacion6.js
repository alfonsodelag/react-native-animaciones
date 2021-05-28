import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Animacion6 = () => {
    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animacion2, {
                toValue: 10,
                duration: 500
            }),
            Animated.timing(animacion1, {
                toValue: 0,
                duration: 500
            }),
            Animated.timing(animacion2, {
                toValue: 0,
                duration: 500
            }),
            Animated.timing(animacion1, {
                toValue: 0,
                duration: 500
            }),
            Animated.timing(animacion2, {
                toValue: 0,
                duration: 500
            }),
        ]).start()
        // Animated.loop()
    }, [])

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 },
        ]
    }


    return (
        <View style={{ alignItems: 'center' }}>
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            >
            </Animated.View>
        </View>
    )
}

// style={styles. }
const styles = StyleSheet.create({
    caja: {
        width: 10,
        height: 10,
        backgroundColor: "cornflowerblue"
    }
});

export default Animacion6
