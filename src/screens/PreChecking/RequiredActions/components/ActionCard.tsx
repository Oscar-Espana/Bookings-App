import React from 'react';
import {Box, Image, Text} from 'native-base';
import usersMulti from '../../../../assets/icons/usersMulti.png';
import filepdf from '../../../../assets/icons/file-pdf.png';
import compass from '../../../../assets/icons/compassBig.png';
import Icon from 'react-native-vector-icons/Ionicons';
import {palette} from '../../../../theme/palette';
import {typography} from '../../../../theme/typography';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  status: 'Completado' | 'Pendiente';
  icon: 'usersMulti' | 'file-pdf' | 'compassBig';
  onPress: () => void;
}

const ActionCard = ({title, status, icon, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {status === 'Completado' ? (
        <Box
          position={'absolute'}
          bgColor={'red'}
          w={30}
          h={30}
          zIndex={1}
          right={0}
          top={-8}>
          <Icon name={'checkmark-circle'} size={30} color={palette.secondary} />
        </Box>
      ) : null}

      <Box
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
        }}
        flexDirection="row"
        alignItems={'center'}
        justifyContent={'space-between'}
        borderRadius={30}
        borderWidth={1}
        borderColor={
          status === 'Completado' ? palette.secondary : palette.background
        }
        backgroundColor={palette.background}>
        <Box flexDirection="row" alignItems="center" padding={25}>
          {icon === 'usersMulti' && (
            <Image
              source={usersMulti}
              style={{width: 70, height: 70}}
              alt={'icon-act'}
            />
          )}
          {icon === 'file-pdf' && (
            <Image
              source={filepdf}
              style={{width: 70, height: 70}}
              alt={'icon-act'}
            />
          )}
          {icon === 'compassBig' && (
            <Image
              source={compass}
              style={{width: 70, height: 70}}
              alt={'icon-act'}
            />
          )}

          <Box pl={25}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status}>{status}</Text>
          </Box>
        </Box>

        <Box px={25}>
          <Icon name="chevron-forward" size={30} color={palette.secondary} />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Trade Gothic LT Std',
    fontSize: 18,
    color: palette.primary,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 22,
  },
  status: {
    fontFamily: 'Trade Gothic LT Std',
    fontSize: 14,
    color: palette.secondary,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 24,
  },
});

export default ActionCard;
