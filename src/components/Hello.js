import React from "react";

const Hello = () => {
    // Hello function in JSX
    // return (
    //     <div>
    //         <h1>Hello Boo!</h1>
    //     </div>
    // );

    // without using JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Boo!')
    );
}

export default Hello;