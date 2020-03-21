import MoveableObject from "./base/MoveableObject";

interface ISize {
    rows: number;
    columns: number;
}

interface ILayoutProps {
    objects: MoveableObject[];
    size: ISize;
}

class Layout {
    public constructor(props?: ILayoutProps) {
        if (props) {
            if (props.objects) {
                this.objects = props.objects;
            }
            if (props.size) {
                this.size = props.size;
            }
        }
    }
    public objects: MoveableObject[] = [];
    public size: ISize = { rows: 1, columns: 1 };
}

export default Layout;
