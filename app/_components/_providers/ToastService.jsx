import { createContext, useContext } from "react";



const ToastContext = createContext(undefined);

export const useToast = () => useContext(ToastContext);

export default ToastContext;
