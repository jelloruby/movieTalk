import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function SlickNextBotton(props) {
    const { className, onClick } = props;
    return (
            <IoIosArrowForward
                className={className} onClick={onClick}
                style={{ fontSize: '20px' }}
            />
    )
}

export default SlickNextBotton;
