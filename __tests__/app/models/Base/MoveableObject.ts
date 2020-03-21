import MoveableObject, {
    defaultStartingPosition
} from '../../../../src/app/models/base/MoveableObject';

describe('MoveableObject', () => {
    it('should have default starting position', () => {
        const obj = new MoveableObject();
        expect(obj.position).toEqual(defaultStartingPosition);
    });
    it('should accept starting position in props', () => {
        const obj = new MoveableObject({
            position: { x: 2, y: 33 }
        });
        expect(obj.position).toEqual({ x: 2, y: 33 });
    });
    it('should change position from current to new one', () => {
        const obj = new MoveableObject();
        obj.changePosition({ x: 1, y: 3 });
        expect(obj.position).toEqual({ x: 1, y: 3 });
    });
});
