import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Image} from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {typography} from '../theme/typography';
import {palette} from '../theme/palette';

const ProfileScreen = () => {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/user_profile.png')}
        style={{
          height: 288,
          flex: 1,
        }}
        resizeMode="cover">
        <View style={styles.header}>
          <View>
            <Text style={typography.heading2}>PROFILE</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.circle}>
              <Icon name="notifications-outline" size={24} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{flex: 2, backgroundColor: palette.background}}>
        <View></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 67,
    marginHorizontal: 28,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 22,
    padding: 10,
  },
  line: {
    color: '#8B8B8B',
  },
});

export default ProfileScreen;
