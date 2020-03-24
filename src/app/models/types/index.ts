export interface ISize {
    rows: number;
    columns: number;
}

export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface IPosition {
    x: number;
    y: number;
    direction: Direction;
}
export type TurnCommand = 'LEFT' | 'RIGHT';
export type SimpleCommand = 'MOVE' | 'REPORT' | TurnCommand; // PLACE 0,0,NORTH
