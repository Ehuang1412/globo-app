import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image,
          ActivityIndicator, FlatList, TouchableWithoutFeedback } from 'react-native';

export default function Homepage({navigation}) {
  const [dataLoading, finishLoading] = useState(true);
  const [newsData, setData] = useState([]);
  
  const storyItem = ({item}) =>{
    return(
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('NewsDetail', {url: item.url})
        }
      >
        <View style={styles.listings}>
          <Text style={styles.title}>{item.title}</Text>
          <Image  
            style={styles.thumbnail}
            source={{uri: item.urlToImage}}
          />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  useEffect(() =>{
    fetch('https://newsapi.org/v2/everything?q=tech&apiKey=3bb568eef22e4da99c50e6651ff0d423')
    .then((response) => response.json())
    .then((json) =>(setData(json.articles),console.log('hi'+json)) )
    .catch((error) => console.error(error))
    .finally(() => finishLoading(false))
  }, []);

  return (
      <View style={styles.container}>
          <Text> is the hompage</Text>

          {dataLoading ? <ActivityIndicator/> : (
            <View>
            <FlatList
              data={newsData}
              renderItem={storyItem}
              keyExtractor={(item) => item.url}
            />
            <Text> data</Text>
            </View>
          )}
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    thumbnail: {
      height: 100,
      width: '98%',
    },
    listings: {
      paddingTop: 15,
      paddingBottom: 25,
      borderBottomColor: 'black',
      borderBottomWidth: 1
    },
    title: {
      paddingBottom: 10,
      // fontFamily: 'OpenSans',
      fontWeight: 'bold'
    
    },
    blurb: {
      // fontFamily: 'OpenSans',
      fontStyle: 'italic'
    }
});
