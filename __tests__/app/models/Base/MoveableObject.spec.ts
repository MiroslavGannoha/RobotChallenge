import MoveableObject from '../../../../src/app/models/base/MoveableObject';

describe('MoveableObject', () => {
    it('should have no starting position', () => {
        const obj = new MoveableObject();
        expect(obj.position).toEqual(null);
    });
    it('should accept starting position in props', () => {
        const obj = new MoveableObject({
            position: { x: 2, y: 33, direction: 'SOUTH' }
        });
        expect(obj.position).toEqual({ x: 2, y: 33, direction: 'SOUTH' });
    });
    it('should change position from current to new one', () => {
        const obj = new MoveableObject();
        obj.setPosition({ x: 1, y: 3, direction: 'SOUTH' });
        expect(obj.position).toEqual({ x: 1, y: 3, direction: 'SOUTH' });
        obj.setPosition({ x: 2, y: 5, direction: 'NORTH' });
        expect(obj.position).toEqual({ x: 2, y: 5, direction: 'NORTH' });
    });
});
