import React from "react";
import { Placeholder } from "semantic-ui-react";

export default function Catordog(props) {
  let image = "https://cataas.com/cat";
  if (props.species === "Dog") {
    image = "https://dog.ceo/dog-api/";
  }
  return (
    <div>
      <Placeholder>
        <img src={image} />
      </Placeholder>
    </div>
  );
}
