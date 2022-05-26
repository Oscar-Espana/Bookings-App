import { ImageSourcePropType } from 'react-native';
export interface ITimeline {
    id: number,
    hour: string,
    location: string
    img: ImageSourcePropType
}