
import { FC, Children } from 'react';

type HeaderProps = {
    items: string[]
    children: any
}
// Fc e il tipo della funzione che accetta dei paramentri , e una funzione di un componente 
export const Header: FC<HeaderProps> = (props) => {
    const { items, children } = props;
    console.log(items, props);
    return (<header>
        <div className="log">{children}</div>
        <nav className="menu">
            <ul>
                {
                    items.map((item,index) => {
                        return (<li key={index + item}><a href={"" + item}> {item} </a></li>)
                    })
                }
            </ul>
        </nav>

    </header>) // questo html vuoto viene chiamata fragment in react 
}