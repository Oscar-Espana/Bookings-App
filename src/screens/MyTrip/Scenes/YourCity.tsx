import {VStack, Box} from 'native-base';
import React from 'react';
import {ScrollView} from 'react-native';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextSection from '../../../components/NativeBase/TextSection';

export const YourCity = () => (
  <ScrollView>
    <VStack space={6}>
      <Box>
        <SectionTitle title={'Madrid'} upperTitle={'Mi ciudad'} />
        <TextSection>
          Es un municipio y una ciudad de España. La localidad, con categoría
          histórica de villa,9​ es la capital del Estado10​ y de la Comunidad de
          Madrid. En su término municipal, el más poblado de España.
        </TextSection>
      </Box>
      <Box>
        <SectionTitle title={'La latina'} upperTitle={'Mi barrio'} />
        <TextSection>
          El barrio de La Latina es una de las partes más antiguas de Madrid.
          Situado al sur de la magnífica Plaza Mayor, cuenta con muchas
          encantadoras callejuelas. El barrio de La Latina es una de las partes
          más antiguas de Madrid. Situado al sur de la magnífica Plaza Mayor,
          cuenta con muchas encantadoras callejuelas. El barrio de La Latina es
          una de las partes más antiguas de Madrid. Situado al sur de la
          magnífica Plaza Mayor, cuenta con muchas encantadoras callejuelas.
        </TextSection>
      </Box>
    </VStack>
  </ScrollView>
);
