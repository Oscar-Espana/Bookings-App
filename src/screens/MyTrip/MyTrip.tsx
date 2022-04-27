import {
  Box,
  Center,
  StatusBar,
  Text,
  useColorModeValue,
  VStack,
} from 'native-base';
import React from 'react';
import {Dimensions, Pressable, Animated} from 'react-native';
import BackgroundwithGradient from '../../components/NativeBase/BackgroundwithGradient';
import TitleCentered from '../../components/NativeBase/TitleCentered';
import TitleWithIcon from '../../components/NativeBase/TitleWithIcon';
import {TabView, SceneMap} from 'react-native-tab-view';
import {palette} from '../../theme/palette';
import SectionTitle from '../../components/NativeBase/SectionTitle';
import TextSection from '../../components/NativeBase/TextSection';
import ListItem from '../../components/NativeBase/ListItem';
import {ScrollView} from 'react-native-gesture-handler';

const MyTrip = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'Tu ciudad',
    },
    {
      key: 'second',
      title: 'Manual de supervivencia',
    },
  ]);

  const FirstRoute = () => (
    <ScrollView>
      <VStack space={6}>
        <Box>
          <SectionTitle title={'Madrid'} upperTitle={'Mi ciudad'} />
          <TextSection>
            Es un municipio y una ciudad de España. La localidad, con categoría
            histórica de villa,9​ es la capital del Estado10​ y de la Comunidad
            de Madrid. En su término municipal, el más poblado de España.
          </TextSection>
        </Box>
        <Box>
          <SectionTitle title={'La latina'} upperTitle={'Mi barrio'} />
          <TextSection>
            El barrio de La Latina es una de las partes más antiguas de Madrid.
            Situado al sur de la magnífica Plaza Mayor, cuenta con muchas
            encantadoras callejuelas. El barrio de La Latina es una de las
            partes más antiguas de Madrid. Situado al sur de la magnífica Plaza
            Mayor, cuenta con muchas encantadoras callejuelas. El barrio de La
            Latina es una de las partes más antiguas de Madrid. Situado al sur
            de la magnífica Plaza Mayor, cuenta con muchas encantadoras
            callejuelas.
          </TextSection>
        </Box>
      </VStack>
    </ScrollView>
  );

  const SecondRoute = () => (
    <VStack space={30}>
      <ListItem name={'Documentacion'} />
      <ListItem name={'Propinas'} />
      <ListItem name={'Horarios de comida'} />
      <ListItem name={'Ocio Nocturno en la ciudad'} />
      <ListItem name={'Conversor de tallas de ropa'} />
      <ListItem name={'Medidas Covid en la ciudad'} />
      <ListItem name={'Conversor de divisas'} />
      <ListItem name={'Diccionation de frases unicas'} />
    </VStack>
  );

  const initialLayout = {
    width: Dimensions.get('window').width,
  };
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: any) => i);
    return (
      <Box flexDirection="row" m={8}>
        {props.navigationState.routes.map((route: any, i: any) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });
          const color =
            index === i
              ? useColorModeValue(palette.primary, palette.neutral)
              : useColorModeValue(palette.neutral, '#a1a1aa');
          const borderColor =
            index === i
              ? palette.secondary
              : useColorModeValue('transparent', 'gray.400');
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              pb="2">
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
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

  return (
    <BackgroundwithGradient>
      <TitleWithIcon title={'Mi viaje'} />

      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </BackgroundwithGradient>
  );
};

export default MyTrip;
