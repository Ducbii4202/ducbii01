import React from 'react'
import { useEffect, useState } from 'react'
import './style.css';
import { Films } from './Film_list';

export default function NewSlider() {
    const colors = ["#0088FE", "#00C49F", "#FFBB28", "", "", "", ""];
    const delay = 2500;

    const [index, setIndex] = useState(0);
    const timeoutRef: any | null = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {Films.map((film) => (
                    <img
                        src={film.Image}
                        className="slide"
                    ></img>
                ))}
            </div>
        </div >
    )
}
