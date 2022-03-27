import React, { useState } from 'react';
import './style.scss'

ColorBox.propTypes = {

};
function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log('initColor', initColor)
        return initColor;
    });
    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }
    return (
        <div className='color-box' onClick={handleBoxClick} style={{ backgroundColor: color }}>
        </div>
    );
}

export default ColorBox;