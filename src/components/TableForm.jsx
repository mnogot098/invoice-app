import React, { useEffect, useState } from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { TiDocumentDelete } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  amount,
  setAmount,
  price,
  setPrice,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [editing, SetIsEditing] = useState(false);
  const [Error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      setError(true);
    } else {
      setError(false);
      const newItem = {
        id: uuidv4(),
        description: description,
        quantity: quantity,
        price: price,
        amount: amount,
      };

      setList([...list, newItem]);
      SetIsEditing(false);
      setDescription("");
      setPrice("");
      setQuantity("");
    }
  };

  //delete element
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  //Edit row
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    SetIsEditing(true);
    setDescription(editingRow.description);
    setPrice(editingRow.price);
    setQuantity(editingRow.quantity);
  };

  //calculate toal amount
  useEffect(() => {
    let rows = document.querySelectorAll(".amount");
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p className="h-10 py-2 pl-2 font-bold text-red-500 border-l-4 border-red-500 bg-red-100 ">
              ${amount}
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="border-green-500 py-2 px-8 rounded shadow 
                                 border-2 text-green-500 font-bold my-5"
        >
          {editing ? (
            <div className="flex gap-2">
              <FaRegEdit className="mt-1" /> <span>Edit item</span>
            </div>
          ) : (
            <div className="flex gap-2">
              <FaPlus className="mt-1" />
              <span>Add item</span>
            </div>
          )}
        </button>
        {Error && (
          <div className="flex justify-end">
            <span className="text-red-500 font-bold">
              All fields are required!
            </span>
          </div>
        )}
      </form>
      <ul>
        <table width="100%" className="my-10">
          <thead>
            <tr className="bg-gray-100">
              <td className="font-bold">Item description</td>
              <td className="font-bold">Quantity</td>
              <td className="font-bold">Price</td>
              <td className="font-bold">Amount</td>
              <td className="font-bold"></td>
              <td className="font-bold"></td>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, description, price, quantity, amount }) => {
              return (
                <React.Fragment key={id}>
                  <tr className="border-2">
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td className="amount">{amount}</td>
                    <td>
                      <button onClick={() => deleteRow(id)}>
                        <TiDocumentDelete className="text-red-500" />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => editRow(id)}>
                        <FaRegEdit className="text-green-400" />
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-end">
          <h2 className="font-bold text-lg text-gray-500 rounded px-2 flex inline-flex gap-2">
            <span>$ {total}</span>
          </h2>
        </div>
      </ul>
    </>
  );
};

export default TableForm;
