import Robot, { defaultRobotName } from '../../../src/app/models/Robot';

describe('Robot', () => {
    it('should have default name', () => {
        const robot = new Robot();
        expect(robot.robotName).toEqual(defaultRobotName);
    });
    it('should accept name prop', () => {
        const name = 'some robot name';
        const robot = new Robot({robotName: name});
        expect(robot.robotName).toEqual(name);
    });
});
