interface IPosition {
    x: number;
    y: number;
}

export interface IMoveableObjectProps {
    position?: IPosition;
}

export const defaultStartingPosition = {x: 1, y: 1};

class MoveableObject {
    public constructor (props?: IMoveableObjectProps) {
        if (props?.position) {
            this.position = props.position;
        }
    }
    public position: IPosition = defaultStartingPosition;
    public changePosition (newPosition: IPosition) {
        this.position = newPosition;
    };
}

export default MoveableObject;