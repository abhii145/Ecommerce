import React from "react";
import { sort } from "../store/productSlice";
import { useDispatch } from "react-redux";
import { sortE } from "../store/electronicsSlice";
import { sortM } from "../store/mensSlice";
import { sortW } from "../store/womensSlice";
import { sortJ } from "../store/jewelerySlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    const sortingValue = event.target.value;
    dispatch(sort(sortingValue));
    dispatch(sortE(sortingValue));
    dispatch(sortM(sortingValue));
    dispatch(sortW(sortingValue));
    dispatch(sortJ(sortingValue));
  };

  return (
    <div>
      <div className="p-4">
        <form action="#">
          <label className="block font-semibold" htmlFor="sort">
            Sort by Price:
          </label>
          <select
            className="border border-gray-300 rounded px-3 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSortChange}
            name="sort"
            id="sort"
          >
            <option value="new">New Arrivals</option>
            <option value="#" disabled></option>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(Highest)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Filter;
