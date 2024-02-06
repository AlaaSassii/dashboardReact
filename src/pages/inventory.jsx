import React, { useReducer } from "react";
import ProfileLayout from "../components/general/ProfileLayout";
import { GoPlus } from "react-icons/go";
import {
  ADD_BRAND,
  ADD_CATEGORY,
  ADD_STATE,
  ADD_UNIT,
  ADD_WAREHOUSE,
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../consts";
import AddBrandModal from "../components/inventory/AddBrandModal";
import AddCategoryModal from "../components/inventory/AddCategoryModal";
import AddStateModal from "../components/inventory/AddStateModal";
import AddUnitModal from "../components/inventory/AddUnitModal";
import AddWarehouseModal from "../components/inventory/AddWarehouseModal";

const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, [action.modalType]: true };
    case CLOSE_MODAL:
      return { ...state, [action.modalType]: false };
    default:
      return state;
  }
};

const itemsReducer = (state, action) => {
  switch (action.type) {
    case ADD_BRAND:
      return { ...state, brands: [...state.brands, action.payload] };
    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    case ADD_STATE:
      return { ...state, states: [...state.states, action.payload] };
    case ADD_UNIT:
      return { ...state, units: [...state.units, action.payload] };
    case ADD_WAREHOUSE:
      return { ...state, warehouses: [...state.warehouses, action.payload] };
    default:
      return state;
  }
};

const initialStateModals = {
  addBrandModal: false,
  addCategoryModal: false,
  addStateModal: false,
  addUnitModal: false,
  addWarehouseModal: false,
};

const initialStateValues = {
  brands: [],
  categories: [],
  states: [],
  units: [],
  warehouses: [],
};

const Inventory = () => {
  const [stateModals, dispatchModal] = useReducer(
    modalReducer,
    initialStateModals
  );
  const [stateValues, dispatchValues] = useReducer(itemsReducer, initialState);

  const openModal = (modalType) => {
    dispatchModal({ type: OPEN_MODAL, modalType });
  };
  const closeModal = (modalType) => {
    dispatchModal({ type: CLOSE_MODAL, modalType });
  };

  const addBrand = (brand) => {
    dispatch({ type: ADD_BRAND, payload: brand });
  };

  const addCategory = (category) => {
    dispatch({ type: ADD_CATEGORY, payload: category });
  };

  const addState = (state) => {
    dispatch({ type: ADD_STATE, payload: state });
  };

  const addUnit = (unit) => {
    dispatch({ type: ADD_UNIT, payload: unit });
  };

  const addWarehouse = (warehouse) => {
    dispatch({ type: ADD_WAREHOUSE, payload: warehouse });
  };
  return (
    <ProfileLayout>
      <div className='p-4'>
        <label htmlFor='name'>Product Name</label>
        <input
          type='text'
          name='name'
          className=' block input input-bordered input-sm w-[100%] max-w-xs rounded-sm  bg-white '
        />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
          <div className='👻 flex gap-3 items-end'>
            <div>
              <label htmlFor='brand'>Brand</label>
              <select
                name='brand'
                defaultValue=''
                className='select select-bordered select-sm w-full max-w-xs  bg-white rounded-sm'
              >
                <option disabled value=''>
                  Select Brand
                </option>
                {state.brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='btn btn-square bg-white btn-sm border border-gray-300 rounded-sm'
              onClick={() => openModal("addBrandModal")}
            >
              <GoPlus />
            </button>
          </div>
          <div className='👻 flex gap-3 items-end'>
            <div>
              <label htmlFor='Category'>Category</label>
              <select
                name='brand'
                defaultValue=''
                className='select select-bordered select-sm w-full max-w-xs  bg-white rounded-sm'
              >
                <option disabled value=''>
                  Category
                </option>
                {state.categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='btn btn-square bg-white btn-sm border border-gray-300 rounded-sm'
              onClick={() => openModal("addCategoryModal")}
            >
              <GoPlus />
            </button>
          </div>
          <div className='👻 flex gap-3 items-end'>
            <div>
              <label htmlFor='Unit'>Unit</label>
              <select
                name='Unit'
                defaultValue=''
                className='select select-bordered select-sm w-full max-w-xs  bg-white rounded-sm'
              >
                <option disabled value=''>
                  Select Brand
                </option>
                {state.units.map((unit, index) => (
                  <option key={index} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='btn btn-square bg-white btn-sm border border-gray-300 rounded-sm'
              onClick={() => openModal("addUnitModal")}
            >
              <GoPlus />
            </button>
          </div>
          <div className='👻 flex gap-3 items-end'>
            <div>
              <label htmlFor='Warehouse'>Warehouse</label>
              <select
                name='Warehouse'
                defaultValue=''
                className='select select-bordered select-sm w-full max-w-xs  bg-white rounded-sm'
              >
                <option disabled value=''>
                  Select Brand
                </option>
                {state.warehouses.map((warehouse, index) => (
                  <option key={index} value={warehouse}>
                    {warehouse}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='btn btn-square bg-white btn-sm border border-gray-300 rounded-sm'
              onClick={() => openModal("addWarehouseModal")}
            >
              <GoPlus />
            </button>
          </div>
          <div className='👻 flex gap-3 items-end'>
            <div>
              <label htmlFor='State'>State</label>
              <select
                name='State'
                defaultValue=''
                className='select select-bordered select-sm w-full max-w-xs  bg-white rounded-sm'
              >
                <option disabled value=''>
                  Select Brand
                </option>
                {state.states.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='btn btn-square bg-white btn-sm border border-gray-300 rounded-sm'
              onClick={() => openModal("addStateModal")}
            >
              <GoPlus />
            </button>
          </div>
          <div>
            <label htmlFor='minimum order'>Minimum order</label>
            <input
              type='text'
              name='minimum order'
              className='block input input-bordered input-sm w-[100%] max-w-xs rounded-sm bg-white'
            />
          </div>
        </div>
        <div className=' flex gap-3 mt-5'>
          <button className='btn btn-outline btn-success'>Save</button>
          <button className='btn  bg-white border border-gray-200 text-black hover:text-white'>
            Cancel
          </button>
        </div>
      </div>
      {stateModals.addBrandModal && (
        <AddBrandModal
          close={() => closeModal("addBrandModal")}
          onClick={addBrand}
        />
      )}
      {stateModals.addCategoryModal && (
        <AddCategoryModal
          close={() => closeModal("addCategoryModal")}
          onClick={addCategory}
        />
      )}

      {stateModals.addStateModal && (
        <AddStateModal
          close={() => closeModal("addStateModal")}
          onClick={addState}
        />
      )}

      {stateModals.addUnitModal && (
        <AddUnitModal
          close={() => closeModal("addUnitModal")}
          onClick={addUnit}
        />
      )}

      {stateModals.addWarehouseModal && (
        <AddWarehouseModal
          close={() => closeModal("addWarehouseModal")}
          onClick={addWarehouse}
        />
      )}
    </ProfileLayout>
  );
};

export default Inventory;
