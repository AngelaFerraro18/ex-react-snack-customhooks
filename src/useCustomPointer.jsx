/* Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

Cosa deve fare?

Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
Posiziona il componente al posto del puntatore del mouse.
Il componente segue i movimenti del mouse. */

import { useEffect, useState } from "react";


function useCustomPointer(initialValue) {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        function handlePositionMuose(e) {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handlePositionMuose);
        document.body.style.cursor = "none";


        return () => {
            window.removeEventListener('mousemove', handlePositionMuose);
            document.body.style.cursor = '';
        }

    }, [])

    return (
        <div style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            userSelect: "none",
            zIndex: 9999,
            fontSize: "24px",
            lineHeight: 1,
        }}>
            {initialValue}
        </div>
    );;
}

export default useCustomPointer;