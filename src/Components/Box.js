import React from "react";
import Wrapper from "./Box.styled";

/* 
price: 249.99,
    type: "professional",
    listItems: { storage: 1, storageSign: "TB", users: 5, space: 10 },
    style: "purple",
*/

const Box = ({ price, type, listItems, style, monthly, isMonthly }) => {
  const { storageSign, storage, users, space } = listItems;

  return (
    <Wrapper className={style}>
      <h4 className="box__type">{type}</h4>
      <h2 className="box__price">${isMonthly ? monthly : price}</h2>
      <ul className="box__list">
        <li>
          {storage} {storageSign} storage
        </li>
        <li>{users} users allowed</li>
        <li>send up to {space} GB</li>
      </ul>
      <button className="btn box__btn">learn more</button>
    </Wrapper>
  );
};

export default Box;
