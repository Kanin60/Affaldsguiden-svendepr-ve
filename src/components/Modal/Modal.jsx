import style from './Modal.module.scss'
import { useState } from 'react';
import { IoIosUnlock } from "react-icons/io";

//https://github.com/Kanin60/Mediesuset/blob/main/src/pages/Frontpage/Frontpage.jsx , https://github.com/Kanin60/Mediesuset/blob/main/src/components/Modal/Modal.jsx 

export const Modal = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    // Function to close the modal when clicking outside
    const handleOutsideClick = (e) => {
        if (modalOpen && e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <IoIosUnlock onClick={openModal} />
            {modalOpen && (
                <>
                    <div className={style.modalOverlay} onClick={closeModal}></div>
                    <dialog open/* ={modalOpen} */ className={style.modal} onClick={handleOutsideClick}>
                        <span className={style.close} onClick={closeModal}>&times;</span>
                        <div className={style.modalContent}>
                            {props.children}
                        </div>
                    </dialog>
                </>
            )}
        </>
    );
};
