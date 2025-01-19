import { createContext, useContext, useState } from "react";

const ModalContext = createContext()

export const ModalProvider = ({children}) => {

    const [modalCourse, setModalCourse] = useState({})

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = (id, image, course_name, creator, discounted_price, category) => {
        const course = {
            id, image, course_name, creator, discounted_price, category
        }
        setModalCourse({...course})
        setModalOpen(true)
        
        
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <ModalContext.Provider value={{modalOpen, openModal, modalCourse, closeModal}}>{children}</ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}