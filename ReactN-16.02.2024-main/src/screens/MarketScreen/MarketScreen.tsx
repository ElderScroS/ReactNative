import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Card from "../../common/components/Card";
import Layout from "../../common/components/Layout";
import StyledTextInput from '../../common/components/StyledTextInput';

const MarketScreen = ({navigation}) => {
    const [search, setSearch] = useState('');
    const products = [
        { id: 1, title: "Product 1", description: "Description 1", price: 19.99 },
        { id: 2, title: "Product 2", description: "Description 2", price: 29.99 },
        { id: 3, title: "Product 3", description: "Description 3", price: 39.99 },
        { id: 4, title: "Product 4", description: "Description 4", price: 49.99 },
        { id: 5, title: "Product 5", description: "Description 5", price: 59.99 }
    ];

    return (
        <Layout title={"Market"}>
            <ScrollView style={styles.container}>
                <View style={styles.search}>
                    <StyledTextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Search"
                    />
                </View>
                <View>
                    <Text style={styles.text}>
                        Hot deals
                    </Text>
                </View>
                <View style={styles.itemsBox}>
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </View>
                <View style={styles.itemsBox}>
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </View>
                <View>
                    <Text style={styles.text}>Trending</Text>
                </View>
                <View style={styles.itemsBox}>
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </View>
                <View style={styles.itemsBox}>
                    {products.map(product => (
                        <Card key={product.id} product={product} />
                    ))}
                </View>
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    marketText: {
        fontSize: 20,
        lineHeight: 29.05
    },
    text: {
        color: "#5DB075",
        fontSize: 20
    },
    itemsBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    input: {
        marginBottom: 10,
    },
    search: {
        padding: 10,
        width: 370,
        borderRadius: 20,
        borderColor: '#bfbfbf',
        borderWidth: 2,
        marginTop: 40,
        marginBottom: 20,
    },
});

export default MarketScreen;