import { createContext, useContext, useState } from "react";

const ToastContext = createContext()

export const ToastProvider = ({children}) => {

    const courseToast = (name) => {
        let newTitle = name.split(" ")
        return newTitle.slice(0, 7).join(" ")
    }

    const [isToastOpen, setToastOpen] = useState(false);
    
    const [message, setMessage] = useState("")

    const handleCartandToast = (course_name) => {
        setMessage(`${courseToast(course_name)}`)
        setToastOpen(true); 
    };

    const closeToast = () => {
       setToastOpen(false); 
    };

    return (
        <ToastContext.Provider value={{isToastOpen, message, closeToast, handleCartandToast}}>{children}</ToastContext.Provider>
    )
}

export const useToastContext = () => {
    return useContext(ToastContext);
}