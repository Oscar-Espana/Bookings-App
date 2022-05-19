import {Box, Center, Input, Text} from 'native-base';
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

const DIGIT_POS_0 = 0;
const DIGIT_POS_1 = 1;
const DIGIT_POS_2 = 2;
const DIGIT_POS_3 = 3;
const DIGIT_POS_4 = 4;
const DIGIT_POS_5 = 5;
const DIGIT_POS_6 = 6;
const DIGIT_POS_7 = 7;
const LAST_POS = 7;
const CODE_LEN = 8;

const TypeYourCode = () => {
  const [currentDigit, setCurrentDigit] = useState(0);
  const [codeDigits, setCodeDigits] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

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

  const handleFifthDigitFocus = () => {
    setCurrentDigit(4);
  };

  const handleSixthDigitFocus = () => {
    setCurrentDigit(5);
  };

  const handleSeventhDigitFocus = () => {
    setCurrentDigit(6);
  };

  const handleEighthDigitFocus = () => {
    setCurrentDigit(7);
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

  return (
    <BackgroundwithGradient>
      <Text style={typography.heading1}>TYPE YOUR CODE</Text>
      <TextSection>
        On the email you got with the link to download this app, we gave you a
        keyword to type in order to a access your reservation.
      </TextSection>

      <Box>
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
      </Box>
    </BackgroundwithGradient>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  codeinput: {
    fontSize: 30,
    fontFamily: 'Analogue',
  },
});

export default TypeYourCode;
