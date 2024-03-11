import { StyleSheet, Text, View } from 'react-native';
import MarketHeader from './MarketHeader';
import SearchBox from '../../sections/SearchBox';
import Category from '../../sections/Category';
import { books } from '../../data/books';
import { hotdeals } from '../../data/hotdeals';
import { trending } from '../../data/trending';

const MarketContent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <MarketHeader/>
            </View>

            <View style={styles.searchContainer}>
                <SearchBox/>
            </View>
 
            <View style={styles.categoriesContainer}>
                <Category categoryTitle="Hot Deals" categoryItems={hotdeals}/>
            </View>

            <View style={styles.categoriesContainer}>
                <Category categoryTitle="Trending" categoryItems={trending}/>
            </View>

            <View style={styles.categoriesContainer}>
                <Category categoryTitle="Books" categoryItems={books}/>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    headerContainer: {
        flex: 1
    },
    searchContainer: {
        flex: 1
    },
    categoriesContainer: {
        flex: 4
    }
});


export default MarketContent;