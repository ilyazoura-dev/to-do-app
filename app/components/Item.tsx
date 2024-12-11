"use client";
import React, { useState } from "react";
import ItemDelete from "./ItemDelete";

const Item = ({ id, title }: { id: number; title: string }) => {
  const [popup, setPopup] = useState<boolean>(false);

  const handleDelete = async () => {
    setPopup(false);
    await ItemDelete(id);
  };

  return (
    <div className="bg-base-100 w-full shadow-xl border p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="flex justify-end items-center space-x-3">
          <button className="btn btn-sm btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
            </svg>
          </button>

          <button
            className="btn btn-sm btn-square"
            onClick={() => setPopup(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
          {popup ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-25 backdrop-blur-sm">
              <div className="card bg-base-100 w-72 shadow-xl">
                <div className="card-body text-center space-y-5">
                  <p className="text-xl font-bold">Are you sure?</p>
                  <div className="space-x-3">
                    <button
                      onClick={() => setPopup(false)}
                      className="btn btn-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleDelete()}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Item;
