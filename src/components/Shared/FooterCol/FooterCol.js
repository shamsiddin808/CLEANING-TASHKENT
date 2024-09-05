// FooterCol.js
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = ({ menuTitle, menuItems, children }) => {
    return (
        <div className="col-md-3">
            <h6 className="text-primary">{menuTitle}</h6>
            <ul className="list-unstyled mt-4">
                {
                    menuItems.map((item, index) =>
                        <li key={index}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a></li>
                    )
                }
            </ul>
            {children && <div>{children}</div>}
        </div>
    );
};

export default FooterCol;
