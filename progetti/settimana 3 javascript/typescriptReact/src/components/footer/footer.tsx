import { Children, FC } from "react";

// Fc e il tipo della funzione che accetta dei paramentri , e una funzione di un componente 
export const Footer:FC<{children:any}> = (props) => {
    const {children} = props;
    return <footer> {children} </footer> // questo html vuoto viene chiamata fragment in react 
}