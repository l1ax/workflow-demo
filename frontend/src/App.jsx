import React, { useState, useEffect } from 'react';

const App = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('/api/list')
            .then(res => res.json())
            .then(data => setList(data.message));
    }, []);
    return (
        <div>
            {list.map(item => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};

export default App;