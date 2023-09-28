export interface SpaceAstronautModel {
   
    people: Array<People>;
    number: number;
    message: string;
}

export interface People{
    craft: string;
    name: string; 
}