import React from "react";

const Table = ({ list, total }) => {
  return (
    <>
      <table width="100%" className="my-10">
        <thead>
          <tr className="bg-gray-100">
            <td className="font-bold">Item description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
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
                  <td>${amount}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end">
        <h2 className="font-bold text-lg text-gray-500  flex inline-flex gap-2">
          <span>$ {total}</span>
        </h2>
      </div>
    </>
  );
};

export default Table;
