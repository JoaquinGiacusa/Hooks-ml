import React from "react";

type PropsBoton = {
  children: string;
};

export function Boton(props: PropsBoton) {
  return <button className="boton">{props.children}</button>;
}
