import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import style from './Meal.style';
function Meal({route, navigation}) {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.categoryName}`,
      )
      .then(response => {
        setMeal(response.data.meals);
      });
  };
  function renderMeal({item}) {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Ingredients', {mealName: item.strMeal})
        }>
        <ImageBackground
          source={{uri: item.strMealThumb}}
          borderRadius={20}
          resizeMode={'cover'}
          style={style.image}>
          <Text style={style.mealName}>{item.strMeal}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList renderItem={renderMeal} data={meal} />
    </SafeAreaView>
  );
}
export default Meal;
