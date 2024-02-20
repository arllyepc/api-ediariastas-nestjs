import React, { PropsWithChildren } from "react";
// import {} from '@mui/material';
import { BreadCrumbContainer, BreadCrumbItem } from "./BreadCrumb.styled";

export interface BreadCrumbProps {
  items: string[];
  selected: string;
}

const BreadCrumb: React.FC<PropsWithChildren<BreadCrumbProps>> = ({
  items,
  selected,
}) => {
  return (
    <BreadCrumbContainer>
      {items.map((item) => (
        <>
          <BreadCrumbItem isSelected={selected === item} key={item}>
            {item}
          </BreadCrumbItem>
          <span> &gt; </span>
        </>
      ))}
    </BreadCrumbContainer>
  );
};

export default BreadCrumb;
