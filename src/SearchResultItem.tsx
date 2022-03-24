import React from "react";

type searSearchResultItemProps = {
  picture: string;
  title: string;
  price;
  key?;
};

export function SearchResultItem(props: searSearchResultItemProps) {
  return (
    <div className="search-result-item">
      <img src={props.picture} width={"120px"} height={"120px"} />
      <div className="search-result-item__data">
        <h2 className="search-result-item__title">{props.title}</h2>
        <h4>Precio: ${props.price}</h4>
      </div>
    </div>
  );
}
