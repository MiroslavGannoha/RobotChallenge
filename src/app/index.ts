import Robot from './models/Robot';
import Layout from './models/Layout';

export function App() {
    const robot = new Robot({ robotName: 'Mr.Robot' });
    const layout = new Layout({
        objects: [robot],
        size: { rows: 5, columns: 5 }
    });
    console.log(layout);
}
