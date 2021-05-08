import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

function SlickPrevBotton(props) {
    const { className, onClick } = props;
    return (
            <IoIosArrowBack
                className={className} onClick={onClick}
                style={{ fontSize: '20px' }}
            />
    )
}

export default SlickPrevBotton;
