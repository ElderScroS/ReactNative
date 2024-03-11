import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Alert } from 'react-native';

const Category = ({ categoryTitle, categoryItems }) => {
  const handleProductPress = (product) => {
    Alert.alert(
      product.name,
      `Price: $${product.price}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>
      <View style={styles.itemsContainer}>
        {categoryItems.map((item, index) => (
          <Pressable key={index} onPress={() => handleProductPress(item)}>
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{`${item.price}$`}</Text>
              <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    maxHeight: 210,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    maxWidth: 200,
    marginHorizontal: 8,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 8,
  },
  itemName: {
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
  },
  itemPrice: {
    color: '#000',
    fontSize: 14,
    fontStyle: 'normal',
  },
  itemImage: {
    height: 110,
    width: 110,
    borderRadius: 8,
    borderWidth: 0,
  },
});

export default Category;
