import Robot from './models/Robot';
import Playground from './models/Playground';

export function App() {
    const robot = new Robot({ robotName: 'Mr.Robot' });
    const layout = new Playground({
        objects: [robot],
        size: { rows: 5, columns: 5 },
    });

    console.log(layout);
}
