import { IPosition, Direction } from '../types';

export interface IMoveableObjectProps {
    position?: IPosition;
}

class MoveableObject {
    public constructor (props?: IMoveableObjectProps) {
        if (props?.position) {
            this.position = props.position;
        }
    }

    public position: IPosition | null = null;

    public setPosition (newPosition: IPosition) {
        this.position = newPosition;
    };

    public report () {
        const {position} = this;
        if (position) {
            const { x, y, direction } = position;
            console.log(`Output: ${x},${y},${direction}`);
        } else {
            console.warn('Object has no position yet');
        }
    }
}

export default MoveableObject;