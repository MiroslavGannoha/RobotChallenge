import MoveableObject from '../base/MoveableObject';
import {
    ISize,
    SimpleCommand,
    Direction,
    IPosition,
    TurnCommand
} from '../types';

interface IPlayGroundProps {
    objects: MoveableObject[];
    size: ISize;
}

const directionsOrdered: Direction[] = ['WEST', 'SOUTH', 'EAST', 'NORTH'];

class Playground {
    public constructor(props?: IPlayGroundProps) {
        if (props) {
            if (props.objects) {
                this.objectsPool = props.objects;
            }
            if (props.size) {
                this.size = props.size;
            }
        }
    }
    public objectsPool: MoveableObject[] = [];
    public size: ISize = { rows: 1, columns: 1 };

    public exec(commands: string) {
        commands.split('\n').forEach(command => this.singleExec(command));
    }

    private singleExec(
        command: SimpleCommand | string,
        object?: MoveableObject
    ) {
        const target = object || this.objectsPool[0];
        if (!target) {
            throw new Error('Executing object not found');
        }

        switch (command) {
            case 'MOVE':
                this.execMove(target);
                break;
            case 'LEFT':
                this.execTurn(target, 'LEFT');
                break;
            case 'RIGHT':
                this.execTurn(target, 'RIGHT');
                break;
            case 'REPORT':
                console.log('Object reporting: ', target);
                target.report();
                break;
            default:
                // PLACE
                this.execPlace(target, command);
        }
    }

    private validatePosition(position: IPosition) {
        const { rows, columns } = this.size;
        const { x, y, direction } = position;
        return new Promise((resolve, reject) => {
            x <= rows && y <= columns && directionsOrdered.includes(direction)
                ? resolve()
                : reject();
        });
    }

    private checkPlaced(object: MoveableObject) {
        return object && object.position && this.objectsPool.includes(object);
    }

    private execMove(object: MoveableObject) {
        if (object?.position && this.checkPlaced(object)) {
            const { position } = object;
            const { direction } = position;
            const newPosition = { ...position };
            switch (direction) {
                case 'WEST':
                    newPosition.x -= 1;
                    break;
                case 'EAST':
                    newPosition.x += 1;
                    break;
                case 'NORTH':
                    newPosition.y -= 1;
                    break;
                case 'SOUTH':
                    newPosition.y += 1;
                    break;
                default:
                    throw new Error('Direction not recognized');
            }

            this.validatePosition(newPosition)
                .then(() => object.setPosition(newPosition))
                .catch(() =>
                    console.warn('Move command prevented - beyond map size')
                );
        } else {
            console.warn('Object not yet placed');
        }
    }

    private execTurn(object: MoveableObject, turnCommand: TurnCommand) {
        if (object?.position && this.checkPlaced(object)) {
            const { position } = object;
            const { direction } = position;
            const directionIndex = directionsOrdered.indexOf(direction);
            const orderedLastIndex = directionsOrdered.length - 1;
            if (directionIndex < 0) {
                throw new Error('Direction not recognized - ' + direction);
            }
            const newPosition = { ...position };
            switch (turnCommand) {
                case 'LEFT':
                    {
                        newPosition.direction =
                            directionIndex > 0
                                ? directionsOrdered[directionIndex - 1]
                                : directionsOrdered[orderedLastIndex];
                    }
                    break;
                case 'RIGHT': {
                    newPosition.direction =
                        directionIndex < orderedLastIndex
                            ? directionsOrdered[directionIndex + 1]
                            : directionsOrdered[0];
                }
            }
            this.validatePosition(newPosition)
                .then(() => object.setPosition(newPosition))
                .catch(() =>
                    console.warn(
                        'Turn command prevented, command invalid - ' +
                            turnCommand
                    )
                );
        } else {
            console.warn('Object not yet placed');
        }
    }

    private execPlace(target: MoveableObject, command: string) {
        if (command.includes('PLACE ')) {
            const [placeX, placeY, placeDirection] = command
                .slice(6, -1)
                .split(',');

            target.setPosition({
                x: parseInt(placeX, 10),
                y: parseInt(placeY, 10),
                direction: placeDirection as Direction
            });

            if (!this.objectsPool.includes(target)) {
                this.objectsPool.push(target);
            }
        } else {
            throw new Error('Command is incorrect - ' + command);
        }
    }
}

export default Playground;
