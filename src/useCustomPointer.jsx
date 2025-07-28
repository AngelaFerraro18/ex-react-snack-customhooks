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

        document.addEventListener('mousemove', handlePositionMuose);



        return () => {
            document.removeEventListener('mousemove', handlePositionMuose);
        }

    }, [])

    return (
        <div style={{
            position: "fixed",
            left: position.x,
            top: position.y,
            cursor: "none",
            transform: "translate(-50%, -50%)",
            fontSize: "24px"
        }}>
            {initialValue}
        </div>
    );;
}

export default useCustomPointer;