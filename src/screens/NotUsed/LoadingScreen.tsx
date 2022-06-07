import React from 'react';
import {ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 20, fontSize: 18, color: palette.gray}}>
        Loading map, wait a momement please...
      </Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default LoadingScreen;
