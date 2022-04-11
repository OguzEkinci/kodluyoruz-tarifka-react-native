import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import style from './Categories.style';
import axios from 'axios';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
function Categories({navigation}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = () => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      });
  };

  function renderCategories({item}) {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Meal', {categoryName: item.strCategory})
        }>
        <View style={style.categoryButton}>
          <Image
            style={style.image}
            source={{
              uri: item.strCategoryThumb,
            }}
          />
          <Text style={style.category}>{item.strCategory}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: 'orange', flex: 1}}>
      <FlatList renderItem={renderCategories} data={categories} />
    </SafeAreaView>
  );
}
export default Categories;
