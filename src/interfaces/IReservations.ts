import { ImageSourcePropType } from "react-native";

export interface IReservations {
        id: number,
        name: string,
        dateStart: string,
        dateEnd: string,
        time: string,
        people: number,
        status: string,
        createdAt: string,
        updatedAt: string,
        location: string,
        street: string,
        img: ImageSourcePropType
        guests: IGuest[]
}


export type IGuest = {
        name: string,
        lastname: string,
        id: number,
        img: ImageSourcePropType
}