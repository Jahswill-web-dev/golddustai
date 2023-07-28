import React from 'react';
import Link from 'next/link';

function Button(props) {
    return ( 
    
            <Link href="/">
                    <div className="text-white text-xl text-center bg-primary rounded-md px-1 my-2 py-2.5">
                       {props.bcontent} 
                    </div>
                </Link>
);
}

export default Button;