import { ImageSourcePropType } from 'react-native';
export interface IPlanServices {
        id: number,
        name: string,
        description: string,
        type: string,
        img: ImageSourcePropType
}