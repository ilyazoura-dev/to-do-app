"use client";
import React, { useState } from "react";
import ItemDelete from "./ItemDelete";
import ItemEdit from "./ItemEdit";

const Item = ({ id, title }: { id: number; title: string }) => {
  const [delPopup, setDelPopup] = useState<boolean>(false);
  const [editPopup, setEditPopup] = useState<boolean>(false);
  const [editedTitle, setEditedTitle] = useState<string>(title);

  const handleDelete = async () => {
    setDelPopup(false);
    await ItemDelete(id);
  };
  const handleEdit = async () => {
    setEditPopup(false);
    await ItemEdit(id, editedTitle);
  };

  return (
    <div className="bg-base-100 w-full shadow-xl border p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="flex justify-end items-center space-x-3">
          <button
            className="btn btn-sm btn-square"
            onClick={() => setEditPopup(true)}
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
              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
            </svg>
          </button>
          {editPopup ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-25 backdrop-blur-sm">
              <div className="card bg-base-100 w-72 shadow-xl">
                <div className="card-body text-center space-y-5">
                  <p className="text-xl font-bold">Editing</p>
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setEditPopup(false)}
                      className="btn btn-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleEdit()}
                      className="btn btn-sm btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <button
            className="btn btn-sm btn-square"
            onClick={() => setDelPopup(true)}
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
          {delPopup ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-25 backdrop-blur-sm">
              <div className="card bg-base-100 w-72 shadow-xl">
                <div className="card-body text-center space-y-5">
                  <p className="text-xl font-bold">Are you sure?</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setDelPopup(false)}
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
