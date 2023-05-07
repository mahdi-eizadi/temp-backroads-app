import React from 'react';
import { pageLinks } from '../data';

const PageLinks = ({parentClass, itemClass}) => {
    return (
        <ul className={parentClass} id={parentClass}>
            {
                pageLinks.map(({ id, href, text }) => {
                    return (
                        <li key={id}>
                            <a href={href} className={itemClass}> {text} </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default PageLinks
