import React from 'react';

function Gate({isOpen}) {
return <div>
            <h3>Gate: {isOpen==true?"Open":"Closed"}</h3>
       </div>
}

export default Gate;
