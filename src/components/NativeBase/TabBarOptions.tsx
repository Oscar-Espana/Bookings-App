import {Box, useColorModeValue} from 'native-base';
import React from 'react';
import {Animated, Pressable} from 'react-native';
import {SceneRendererProps, NavigationState} from 'react-native-tab-view';
import {IRouteTab} from '../../interfaces/IRouteTab';
import {palette} from '../../theme/palette';

interface Props extends SceneRendererProps {
  navigationState: NavigationState<IRouteTab>;
  indexTab: number;
  onIndexChange: (index: number) => void;
}

export const TabBarOptions = (props: Props) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <Box flexDirection="row" mx={8} mb={8}>
      {props.navigationState.routes.map((route: any, i: any) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex: any) =>
            inputIndex === i ? 1 : 0.5,
          ),
        });
        const color =
          props.indexTab === i
            ? useColorModeValue(palette.primary, palette.neutral)
            : useColorModeValue(palette.neutral, '#a1a1aa');
        const borderColor =
          props.indexTab === i
            ? palette.secondary
            : useColorModeValue('transparent', 'gray.400');
        return (
          <Box
            key={route.key}
            borderBottomWidth="3"
            borderColor={borderColor}
            alignItems="center"
            pb="2"
            mr="30">
            <Pressable
              onPress={() => {
                props.onIndexChange(i);
              }}>
              <Animated.Text
                style={{
                  color,
                }}>
                {route.title}
              </Animated.Text>
            </Pressable>
          </Box>
        );
      })}
    </Box>
  );
};
