import React from "react";
import { Placeholder, Image } from "semantic-ui-react";

export default function Catordog(props) {
  let image =
    "https://static.vecteezy.com/system/resources/previews/001/844/336/non_2x/cat-paw-design-illustration-isolated-on-white-background-free-vector.jpg";
  if (props.species.toLowerCase() === "dog") {
    image =
      "https://i.pinimg.com/736x/49/07/b7/4907b7165375be2efcd3ef779cf41cbd.jpg";
  }
  return (
    <div>
      <Placeholder>
        <Image src={image} size="small" />
      </Placeholder>
    </div>
  );
}
