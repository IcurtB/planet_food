import React, {useContext, useState} from "react";
import "./modal.css"
import TypeContext from "../../context/TypeContext";
const Modal = ({name, children}) => {


    const [modalActive, setModalActive] = useState(false);
    return(
        <>
            <button onClick={() => setModalActive(true)}>{name}</button>
            <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </>
    )
};

export default Modal;