"use client";
import React, { useEffect, useState } from "react";
import { useToast } from "./_providers/ToastService.jsx";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const toast = useToast();
  const [showToast, setShowToast] = useState(false);
  const [toastTimer, setToastTimer] = useState(5000);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToast = () => {
    toast.open(
      <div className="flex gap-2 bg-green-300 text-red-800 p-4 rounded-lg shadow-lg">
        <div>
          <h3 className="font-bold">{formData.name} </h3>
          <h3 className="font-bold">{formData.email} </h3>
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleToast();
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-screen p-24 flex justify-center items-center">
        <button
          className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-5 w-fit"
          onClick={() => setShowModal(true)}
        >
          Fill Details
        </button>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-12">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">General Info</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form
                      className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                      onSubmit={handleSubmit}
                    >
                      <label className="block text-black text-sm font-bold mb-1">
                        First Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label className="block text-black text-sm font-bold mb-1">
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Modal;
