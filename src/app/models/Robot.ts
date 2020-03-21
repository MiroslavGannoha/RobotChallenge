import MoveableObject, { IMoveableObjectProps } from './base/MoveableObject';

interface IRobotProps extends IMoveableObjectProps {
    robotName?: string;
}

export const defaultRobotName = 'Robot name';

class Robot extends MoveableObject {
    public constructor(props?: IRobotProps) {
        super(props);
        if (props) {
            const { robotName } = props;
            if (robotName) {
                this.robotName = robotName;
            }
        }
    }
    public robotName = defaultRobotName;
}

export default Robot;
