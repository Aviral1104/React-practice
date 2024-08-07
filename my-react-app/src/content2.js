import React, { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Aviral');
    const [count, setCount] = useState(0);

    const nameChange = () => {
        const names = ["Aviral", "Avi", "sheesh"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    };
    
    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    };

    const handleClick2 = () => {
        console.log(count);
    };

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    };

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello, {name}!
            </p>
            <button onClick={nameChange}>Change Name!</button>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleClick2}>Click me</button>
        </main>
    );
};

export default Content;
