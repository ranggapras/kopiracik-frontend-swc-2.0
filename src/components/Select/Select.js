import React, { useState } from "react";
import propTypes from "prop-types";
import { DataSelect, DataMsg } from "../../components/Modal/utils/ObjectSelected";
const Select = ({ label, state }) => {
  const [selected, setSelected] = useState(null);
  const updateSelected = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between  mt-2">
        <div className="w-6/12">
          <p className="text-base font-semibold mr-4">{label}</p>
        </div>
        <select
          name={label}
          id={label}
          value={state.data}
          onChange={(e) => {
            state.setData(e.target.value);
          }}
        >
          <option value={null}>Pilih :</option>
          {DataSelect[label.toLowerCase()].map((data) => {
            return <option value={data.value}>{data.name}</option>;
          })}
        </select>
      </div>
      <span className="text-xs mt-2">{state.data === null ? <></> : DataMsg[label.toLowerCase()][state.data]}</span>
      <hr className="mt-4 mb-4"></hr>
    </>
  );
};
Select.propTypes = { label: propTypes.string, state: propTypes.object };
export default Select;
