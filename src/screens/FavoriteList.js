import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Rating} from 'react-native-ratings';
import Modal from 'react-native-modal';
import {Shadow} from 'react-native-shadow-2';

import {Header, Heart, Minus, Plus} from '../components';
import {SAFEAREAVIEW, favorite, COLORS, SIZES, FONTS} from '../constants';

export default function FavoriteList() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  function renderFavoriteList() {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 30,
          flexGrow: 1,
          paddingVertical: SIZES.paddingVertical,
        }}
        showsVerticalScrollIndicator={false}>
        {favorite.map((item, index) => {
          return (
            <Shadow
              startColor={COLORS.shadowStartColor}
              finalColor={COLORS.shadowFinalColor}
              distance={COLORS.shadowDistance}
              key={index}
              viewStyle={{
                width: '100%',
              }}>
              <TouchableOpacity
                key={index}
                style={{
                  width: '100%',
                  height: 100,
                  backgroundColor: COLORS.white,
                  borderRadius: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 15,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 100,
                    height: '100%',
                    resizeMode: 'cover',
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    marginRight: 16,
                  }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        ...FONTS.Roboto_500Medium,
                        fontSize: 16,
                        color: COLORS.black,
                        textTransform: 'capitalize',
                        marginBottom: 2,
                        lineHeight: 16 * 1.2,
                      }}
                      numberOfLines={1}>
                      {item.name}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setShowModal(!false)}
                      style={{
                        paddingHorizontal: 15,
                        paddingVertical: 2,
                      }}>
                      <Heart strokeColor="red" fillColor="red" />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 4,
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
                        ...FONTS.Roboto_500Medium,
                        fontSize: 12,
                        color: COLORS.black,
                        marginLeft: 5.5,
                        lineHeight: 12 * 1.2,
                      }}>
                      {item.rating}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: COLORS.gray2,
                      marginBottom: 6,
                      width: '80%',
                    }}
                    numberOfLines={1}>
                    {item.ingredients}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: COLORS.lightGreen_02,
                          borderRadius: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => console.log('minus')}>
                        <Minus />
                      </TouchableOpacity>
                      <Text
                        style={{
                          marginHorizontal: 6,
                          ...FONTS.Roboto_500Medium,
                          fontSize: 12,
                          lineHeight: 12 * 1.2,
                          color: COLORS.gray2,
                        }}>
                        1
                      </Text>
                      <TouchableOpacity
                        style={{
                          width: 20,
                          height: 20,
                          backgroundColor: COLORS.green,
                          borderRadius: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => console.log('plus')}>
                        <Plus />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        ...FONTS.Roboto_700Bold,
                        fontSize: 14,
                        color: COLORS.carrot,
                      }}>
                      Price: ${item.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Shadow>
          );
        })}
      </ScrollView>
    );
  }

  function UnfavoriteModal() {
    return (
      <Modal
        isVisible={showModal}
        onBackdropPress={setShowModal}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{margin: 0}}
        animationIn="zoomIn"
        animationOut="zoomOut">
        <View
          style={{
            width: SIZES.width - 60,
            backgroundColor: COLORS.white,
            marginHorizontal: 30,
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 34,
          }}>
          <Text
            style={{
              textAlign: 'center',
              ...FONTS.Roboto_700Bold,
              fontSize: 16,
              marginBottom: 35,
            }}>
            Are you sure you want to sign out ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 130,
                height: 40,
                backgroundColor: COLORS.lightRed,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 7.5,
              }}
              onPress={() => setShowModal(false)}>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.Roboto_700Bold,
                  fontSize: 16,
                  color: COLORS.red,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 130,
                height: 40,
                backgroundColor: COLORS.green,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 7.5,
              }}
              onPress={() => {
                setShowModal(false);
              }}>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.Roboto_700Bold,
                  fontSize: 16,
                }}>
                Sure
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={{...SAFEAREAVIEW.AndroidSafeArea}}>
      <Header title="Favorite List" onPress={() => navigation.goBack()} />
      {renderFavoriteList()}
      {<UnfavoriteModal />}
    </SafeAreaView>
  );
}
