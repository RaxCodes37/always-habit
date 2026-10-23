import React from "react";
import { FaArrowUp, FaEdit } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

interface Props {
  openModal: () => void;
  closeModal: () => void;
  newHabitName: string;
  setNewHabitName: React.Dispatch<React.SetStateAction<string>>;
  newHabitDesc: string;
  setNewHabitDesc: React.Dispatch<React.SetStateAction<string>>;
  editHabitFunction: (habitId: string) => void;
  habitId: string
}

export default function EditHabitComponent({
  openModal,
  closeModal,
  newHabitName,
  setNewHabitName,
  newHabitDesc,
  setNewHabitDesc,
  editHabitFunction,
  habitId
}: Props) {
  return (
    <div>
      <button
        className="border-2 border-[#f493e7] rounded-md bg-[#d267c3] duration-400 hover:bg-[#bb58ad] text-2xl pr-3 pl-4 py-3"
        onClick={openModal}
      >
        <FaEdit />
      </button>

      <div id="modal">
        <form className="modal-content flex flex-col items-center border-2 rounded-md bg-[#e877d9] border-[#f493e7] text-shadow-black py-2 gap-2">
          <h3 className="text-2xl font-bold my-2">Edit Habit</h3>

          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="New Habit Name"
            className="border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2 w-[80%]"
          />

          <textarea
            value={newHabitDesc}
            onChange={(e) => setNewHabitDesc(e.target.value)}
            placeholder="New Habit Description (28 char)"
            className="border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2 w-[80%]"
          ></textarea>

          <div className="flex justify-between gap-5 w-[80%]">
            <button
              type="button"
              onClick={closeModal}
              className="close-modal-button w-[50%] flex justify-center border border-[#ff5252] rounded-md bg-[#cd4d4d] duration-400 hover:bg-[#9c3c3c] py-2"
            >
              <FaX />
            </button>

            <button
              type="submit"
              className="w-[50%] flex justify-center items-center border border-[#f493e7] rounded-md bg-[#ce64c0] duration-400 hover:bg-[#913d86] py-2"
              onClick={() => editHabitFunction(habitId)}
            >
              <FaArrowUp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
