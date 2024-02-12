"use client";
import { useState } from "react";
import ToastContext from "./ToastService";

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const open = (component, timeout = 3000) => {
    const id = Date.now();

    setToasts((toasts) => [...toasts, { id, component }]);

    setTimeout(() => close(id), timeout);
  };

  const close = (id) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-x-2 absolute  top-[30%] left-[40%] md:top-[30%] md:left-[40%]">
        {toasts.map(({ id, component }) => (
          <div key={id} className="relative">
            <button
              onClick={() => close(id)}
              className="absolute top-2 right-2 p-1 rounded-lg bg-gray-200/20 text-gray-800/60"
            ></button>
            {component}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
