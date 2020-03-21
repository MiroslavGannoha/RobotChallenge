import Robot, { defaultRobotName } from '../../../src/app/models/Robot';

describe('Robot', () => {
    it('should have default name', () => {
        const robot = new Robot();
        expect(robot.robotName).toEqual(defaultRobotName);
    });
});
