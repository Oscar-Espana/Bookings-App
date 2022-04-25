import React from 'react';
import {Pressable, View} from 'native-base';
import {Animated, StyleSheet, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../theme/palette';

const SliderButton = () => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const startAnimation = (toValue: any) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 400,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const left = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '50%'],
    extrapolate: 'clamp',
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.9, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Animated.View style={[styles.slider, {left}]} />
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimation.bind(null, 0)}>
          <Animated.Text style={[styles.sliderText, {transform: [{scale}]}]}>
            <Icon name={'lock-closed-outline'} color={'#fff'} size={28} />
          </Animated.Text>
        </Pressable>
        <Pressable
          style={styles.clickableArea}
          onPress={startAnimation.bind(null, 1)}>
          <Animated.Text style={[styles.sliderText, {transform: [{scale}]}]}>
            <Icon name={'lock-open-outline'} color={'#fff'} size={28} />
          </Animated.Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  sliderContainer: {
    width: '90%',
    height: 82,
    borderRadius: 50,
    borderColor: palette.gray,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.background,
  },
  clickableArea: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    fontSize: 1,
    fontWeight: '500',
  },
  slider: {
    position: 'absolute',
    width: '52%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: palette.secondary,
  },
});

export default SliderButton;
