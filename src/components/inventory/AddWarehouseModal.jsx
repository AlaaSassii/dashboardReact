import React, { useState } from "react";
import Modal from "../general/Modal";

const AddWarehouseModal = ({ close, onClick }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Modal
      title={"add new Warehouse"}
      close={close}
      onClick={() => onClick(inputValue)}
    >
      <input
        type='text'
        className='input bg-white w-full border border-gray-300 outline-none'
        placeholder='add new Warehouse'
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Modal>
  );
};

export default AddWarehouseModal;
