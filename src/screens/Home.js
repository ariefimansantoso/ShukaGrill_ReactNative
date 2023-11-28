import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {Rating, AirbnbRating} from 'react-native-ratings';

import {COLORS, FONTS, SAFEAREAVIEW, category, dummyData} from '../constants';
import {
  Basket,
  Search,
  Pin,
  Star,
  DeliveryMan,
  Clock,
  PinTwo,
  Filter,
  HeartTwo,
  Heading,
} from '../components';

export default function Home() {
  const navigation = useNavigation();
  const [selectCategory, setSelectCategory] = useState(1);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 38,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            height: 50,
            backgroundColor: COLORS.lightGreen,
            borderRadius: 10,
            flex: 1,
            marginRight: 22,
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 14,
          }}>
          {/* <Search /> */}
          <TextInput placeholder="Search" style={{flex: 1, paddingLeft: 7}} />
          <TouchableOpacity
            onPress={() => navigation.navigate('Filter')}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 15,
            }}>
            <Filter />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.lightGreen,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Basket />
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              borderRadius: 25,
              right: 7,
              top: 7,
            }}>
            <Text
              style={{
                paddingHorizontal: 6,
                paddingVertical: 3,
                ...FONTS.Roboto_700Bold,
                fontSize: 10,
                color: COLORS.white,
              }}>
              4
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderCategories() {
    function categories(item, index) {
      return (
        <TouchableOpacity onPress={() => setSelectCategory(item.id)}>
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor:
                selectCategory == item.id ? COLORS.green : COLORS.lightGreen,
              borderRadius: 35,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 7,
              marginLeft: index === 0 ? 0 : 7,
              marginBottom: 11,
            }}>
            <Image
              source={item.image}
              style={{
                height: 35,
                width: '100%',
                tintColor:
                  selectCategory == item.id ? COLORS.white : COLORS.gray2,
              }}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.Roboto_500Medium,
              fontSize: 14,
              textTransform: 'capitalize',
              color: selectCategory == item.id ? COLORS.green : COLORS.gray2,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={{marginBottom: 40}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
            paddingHorizontal: 30,
          }}>
          <Pin />
          <Text
            style={{
              marginLeft: 12,
              ...FONTS.Roboto_400Regular,
              fontSize: 14,
            }}>
            9 West 46th Street, Russian Federation
          </Text>
        </View>
        <View>
          <FlatList
            data={category}
            horizontal={true}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => categories(item, index)}
            contentContainerStyle={{paddingLeft: 30}}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderPopularRestaurants() {
    function renderFood(item, index) {
      return (
        <Shadow
          startColor={COLORS.shadowStartColor}
          finalColor={COLORS.shadowFinalColor}
          distance={COLORS.shadowDistance}
          viewStyle={{marginRight: 15}}>
          <TouchableOpacity
            style={{
              width: 266,
              height: 232,
              backgroundColor: COLORS.white,
              borderRadius: 15,
              marginRight: 15,
            }}
            onPress={() =>
              navigation.navigate('RestaurantMenu', {
                restaurant: item,
                dishes: item.dishes,
                restaurantName: item.name,
              })
            }>
            <ImageBackground
              source={item.image}
              style={{
                height: 136,
                width: '100%',
                flexDirection: 'row',
              }}
              imageStyle={{
                borderRadius: 15,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 8,
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                  flexDirection: 'row',
                  borderRadius: 15,
                  top: 10,
                  left: 10,
                  height: 24,
                }}>
                <Text
                  style={{
                    marginRight: 4,
                    ...FONTS.Roboto_400Regular,
                    fontSize: 12,
                    color: COLORS.black,
                  }}>
                  {item.rating}
                </Text>
                <View>
                  <Star />
                </View>
                <Text
                  style={{
                    marginLeft: 4,
                    ...FONTS.Roboto_400Regular,
                    fontSize: 12,
                    color: COLORS.gray2,
                  }}>
                  ({item.numberOfRatings})
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  right: 10,
                  position: 'absolute',
                  top: 10,
                }}>
                <HeartTwo />
              </TouchableOpacity>
            </ImageBackground>
            <View style={{padding: 12, flex: 1}}>
              <Text
                style={{
                  ...FONTS.Roboto_400Regular,
                  fontSize: 16,
                  textTransform: 'capitalize',
                  color: COLORS.black,
                  marginBottom: 8,
                  lineHeight: 16 * 1,
                }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                {item.freeDelivery && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <DeliveryMan />
                    <Text
                      style={{
                        marginLeft: 6,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        marginRight: 8,
                        textTransform: 'capitalize',
                        color: COLORS.gray2,
                      }}>
                      Free delivery
                    </Text>
                  </View>
                )}
                {item.timeOfDelivery && (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Clock />
                    <Text
                      style={{
                        marginLeft: 6,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        marginRight: 7,
                        textTransform: 'capitalize',
                        color: COLORS.gray2,
                      }}>
                      10-30 mins
                    </Text>
                  </View>
                )}
              </View>
              <View style={{flex: 1}} />
              <View style={{flexDirection: 'row'}}>
                {item.tags.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        backgroundColor: item.backgroundColor,
                        marginRight: 8,
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        borderRadius: 5,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          color: item.color,
                          opacity: 1,
                        }}>
                        {item.tag}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </TouchableOpacity>
        </Shadow>
      );
    }

    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              ...FONTS.Roboto_700Bold,
              fontSize: 20,
              textTransform: 'capitalize',
            }}>
            Popular Restaurants
          </Text>
        </View>
        <FlatList
          data={dummyData}
          horizontal={true}
          renderItem={({item, index}) => renderFood(item, index)}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 30,
            paddingTop: 17,
            paddingBottom: 40,
          }}
        />
      </View>
    );
  }

  function renderNearByYou() {
    return (
      <View style={{paddingHorizontal: 30}}>
        <Heading
          title="Near By You"
          containerStyle={{paddingHorizontal: 0, marginBottom: 21}}
        />

        {dummyData.map(
          (item, index) =>
            item.near == true && (
              <TouchableOpacity
                key={index}
                style={{
                  height: 100,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 15,
                }}
                onPress={() =>
                  navigation.navigate('RestaurantMenu', {
                    restaurant: item,
                    dishes: item.dishes,
                    restaurantName: item.name,
                  })
                }>
                <Image
                  source={item.image}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    marginRight: 20,
                  }}
                />
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      ...FONTS.Roboto_500Medium,
                      fontSize: 16,
                      marginBottom: 10,
                      lineHeight: 16 * 1,
                      textTransform: 'capitalize',
                    }}
                    numberOfLines={1}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 7,
                    }}>
                    <PinTwo />
                    <Text
                      style={{
                        marginLeft: 5,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        color: COLORS.gray2,
                        lineHeight: 12 * 1.2,
                        width: '85%',
                      }}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.address}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <Clock />
                    <Text
                      style={{
                        marginLeft: 5,
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        color: COLORS.gray2,
                        lineHeight: 12 * 1.2,
                      }}>
                      {item.timeOfDelivery}
                    </Text>
                    <View
                      style={{
                        width: 4,
                        height: 4,
                        backgroundColor: COLORS.green,
                        borderRadius: 2,
                        marginHorizontal: 4,
                      }}
                    />
                    <Text
                      style={{
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        color: COLORS.gray2,
                        lineHeight: 12 * 1.2,
                      }}>
                      {item.distance}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Rating
                      type="star"
                      count={5}
                      defaultRating={14}
                      imageSize={12}
                      showRating={false}
                      isDisabled={false}
                      readonly={true}
                      startingValue={item.rating}
                    />
                    <Text
                      style={{
                        ...FONTS.Roboto_400Regular,
                        fontSize: 12,
                        color: COLORS.gray2,
                        marginLeft: 10,
                        lineHeight: 12 * 1.2,
                      }}>
                      ({item.numberOfRatings})
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ),
        )}
      </View>
    );
  }

  return (
    <SafeAreaView style={{...SAFEAREAVIEW.AndroidSafeArea}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {renderHeader()}
        {renderCategories()}
        {renderPopularRestaurants()}
        {renderNearByYou()}
      </ScrollView>
    </SafeAreaView>
  );
}
