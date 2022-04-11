import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import style from './Ingredients.style';
function Ingredients({route}) {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${route.params.mealName}`,
      )
      .then(response => {
        setIngredients(response.data.meals);
      });
  };
  function renderIngredient({item}) {
    return (
      <View style={style.contain}>
        <Image source={{uri: item.strMealThumb}} style={style.image} />
        <Text style={style.topic}>{item.strMeal}</Text>
        <Text style={style.tradition}>{item.strArea}</Text>
        <View
          style={{
            backgroundColor: 'gray',
            width: Dimensions.get('screen').width,
            height: 1,
          }}
        />
        <Text style={style.explanation}>{item.strInstructions}</Text>
        <TouchableOpacity
          style={style.watchButton}
          onPress={() => {
            Linking.openURL(item.strYoutube);
          }}>
          <Text style={{color: 'white'}}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return <FlatList renderItem={renderIngredient} data={ingredients} />;
}
export default Ingredients;
