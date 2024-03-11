import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const Card = ({ product }) => {
    const { title, description, price } = product;

    const handlePress = () => {
        Alert.alert(
            "Product Information",
            `Title: ${title}\nDescription: ${description}\nPrice: ${price}`
        );
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                <Image style={styles.box} source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} />
                <View style={{ flex: 1, flexDirection: "column", flexWrap: "wrap" }}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                    <Text style={styles.text}>
                        {description}
                    </Text>
                    <Text>${price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
    },
    text: {
        fontSize: 20
    },
    box: {
        width: 110,
        height: 110,
        backgroundColor: "#bfbfbf",
        borderRadius: 8,
    },
});

export default Card;
