import { useState } from 'react'
import Counter from './Counter'
import FunctionalCounter from './FunctionalCounter'

export default function ConditionalRendering() {
    const [display, setDisplay] = useState(true);

    if (display) {
        return (
            <div>
                <h1>Conditional Rendering</h1>
                <button onClick={() => setDisplay(false)}>Hide</button>
                <Counter />
                <FunctionalCounter />
            </div>
        );
    } else {
        return (
            <div>This component is hidden</div>
        )
    }
}