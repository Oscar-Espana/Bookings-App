import {Box, Center, HStack, Input, Text} from 'native-base';
import React, {useRef, useState} from 'react';
import BackgroundwithGradient from '../../../components/NativeBase/BackgroundwithGradient';
import TextSection from '../../../components/NativeBase/TextSection';
import {typography} from '../../../theme/typography';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import {palette} from '../../../theme/palette';

const DIGIT_POS_0 = 0;
const DIGIT_POS_1 = 1;
const DIGIT_POS_2 = 2;
const DIGIT_POS_3 = 3;
const DIGIT_POS_4 = 4;
const DIGIT_POS_5 = 5;
const DIGIT_POS_6 = 6;
const DIGIT_POS_7 = 7;
const LAST_POS = 3;
const CODE_LEN = 4;

const TypeYourCode = () => {
  const [currentDigit, setCurrentDigit] = useState(0);
  const [codeDigits, setCodeDigits] = useState(['', '', '', '']);

  const refFirstInput = useRef<TextInput>(null);
  const refSecondInput = useRef<TextInput>(null);
  const refThirdInput = useRef<TextInput>(null);
  const refFourthInput = useRef<TextInput>(null);
  const refFifthInput = useRef<TextInput>(null);
  const refSixthInput = useRef<TextInput>(null);
  const refSeventhInput = useRef<TextInput>(null);
  const refEighthInput = useRef<TextInput>(null);

  const refs = [
    refFirstInput,
    refSecondInput,
    refThirdInput,
    refFourthInput,
    refFifthInput,
    refSixthInput,
    refSeventhInput,
    refEighthInput,
  ];

  const handleKeyPressed = ({
    nativeEvent: key,
  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (currentDigit > 0) {
      if (key.key === 'Backspace' && codeDigits[currentDigit] === '') {
        refs[currentDigit - 1].current?.focus();
      }
    }
  };

  const handleFirstDigitFocus = () => {
    setCurrentDigit(0);
  };

  const handleSecondDigitFocus = () => {
    setCurrentDigit(1);
  };

  const handleThirdDigitFocus = () => {
    setCurrentDigit(2);
  };

  const handleFourthDigitFocus = () => {
    setCurrentDigit(3);
  };

  const handleNextDigit = (text: string, currentPosition: number) => {
    const inputText = text.toUpperCase().replace(/[^[A-Z0-9]/g, '');
    console.log('inputText', inputText);
    setCodeDigits(state =>
      state.map((digit, index) =>
        index === currentPosition ? inputText : digit,
      ),
    );
    if (inputText === '') {
      return;
    }
    if (currentPosition !== LAST_POS) {
      refs[currentPosition + 1].current?.focus();
    }
  };

  const isDisabled = codeDigits.join('').length !== CODE_LEN;

  console.log(codeDigits);
  return (
    <>
      <BackgroundwithGradient>
        <Text style={typography.heading2} mb={28}>
          TYPE YOUR CODE
        </Text>
        <TextSection>
          On the email you got with the link to download this app, we gave you a
          keyword to type in order to a access your reservation.
        </TextSection>

        <Center p={5} w={'30%'} flexDir={'row'} ml={'35%'}>
          <Input
            ref={refFirstInput}
            m={1}
            maxLength={1}
            color={'cream.400'}
            variant="underlined"
            style={styles.codeinput}
            keyboardType="numeric"
            value={codeDigits[DIGIT_POS_0]}
            onChangeText={text => handleNextDigit(text, DIGIT_POS_0)}
            onFocus={handleFirstDigitFocus}
            onKeyPress={handleKeyPressed}
          />
          <Input
            ref={refSecondInput}
            m={1}
            maxLength={1}
            color={'cream.400'}
            variant="underlined"
            style={styles.codeinput}
            keyboardType="numeric"
            value={codeDigits[DIGIT_POS_1]}
            onChangeText={text => handleNextDigit(text, DIGIT_POS_1)}
            onFocus={handleSecondDigitFocus}
            onKeyPress={handleKeyPressed}
          />
          <Input
            ref={refThirdInput}
            m={1}
            maxLength={1}
            variant="underlined"
            color={'cream.400'}
            style={styles.codeinput}
            keyboardType="numeric"
            value={codeDigits[DIGIT_POS_2]}
            onChangeText={text => handleNextDigit(text, DIGIT_POS_2)}
            onFocus={handleThirdDigitFocus}
            onKeyPress={handleKeyPressed}
          />
          <Input
            ref={refFourthInput}
            m={1}
            maxLength={1}
            variant="underlined"
            color={'cream.400'}
            style={styles.codeinput}
            keyboardType="numeric"
            value={codeDigits[DIGIT_POS_3]}
            onChangeText={text => handleNextDigit(text, DIGIT_POS_3)}
            onFocus={handleFourthDigitFocus}
            onKeyPress={handleKeyPressed}
          />
        </Center>
      </BackgroundwithGradient>
      <Box p={30} bottom={0} position={'absolute'}>
        <ButtonBig
          name={'NEXT'}
          onPress={() => console.warn('Submited code', codeDigits)}
        />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  codeinput: {
    fontSize: 30,
    color: palette.primary,
    fontFamily: 'Analogue',
    width: 150,
    height: 50,
  },
});

export default TypeYourCode;
