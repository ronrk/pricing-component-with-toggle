import React from "react";
import Wrapper from "./BoxContainer.styled";

import Box from "./Box";

const boxes = [
  {
    price: 199.99,
    monthly: 19.99,
    type: "basic",
    listItems: { storage: 500, storageSign: "GB", users: 2, space: 3 },
    style: "white",
  },
  {
    price: 249.99,
    monthly: 24.99,
    type: "professional",
    listItems: { storage: 1, storageSign: "TB", users: 5, space: 10 },
    style: "purple",
  },
  {
    price: 399.99,
    monthly: 39.99,
    type: "master",
    listItems: { storage: 1, storageSign: "TB", users: 10, space: 20 },
    style: "white",
  },
];

const BoxContainer = ({ isMonthly }) => {
  return (
    <Wrapper>
      {boxes.map((item, id) => {
        return <Box {...item} isMonthly={isMonthly} key={id} />;
      })}
    </Wrapper>
  );
};

export default BoxContainer;
