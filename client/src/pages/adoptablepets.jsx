import React from "react";
import ListAnimals from "../components/ListAnimals";
import Form from "../components/Form";
import { useState } from "react";

//import { animals } from "../../../server/fakeanimaldata";

export default function Adoptablepets() {
  const [id, setId] = useState(null);

  return (
    <div>
      <div className="intropargadoptpets">
        <h3>Meet Our Adoptable Pets!</h3>
        <p>
          Adipisicing error fugit and occaecat dolorem. Ab autem incididunt or
          ea veritatis for pariatur. Nulla iure yet commodi consequatur
          veritatis dolores or quasi. Quam eu or labore modi velit for illo, or
          dolor. Aliquid quasi laboris. Nihil ex tempora so dolor or ea. Sint
          doloremque yet dolor or sit ex yet pariatur. Nulla aliquip or ut
          eiusmod so quasi, ab ratione. Ipsam. Sed. Voluptate quasi in and
          eiusmod dolore. Ipsa omnis so exercitation. Molestiae consequatur
          voluptatem and ullamco aute and tempora. Eaque architecto illo yet
          sunt, velit so ratione. Eu ratione. Vel pariatur.
        </p>
      </div>
      <div>
        <img
          src="https://www.travelandleisure.com/thmb/EX2GMaNj47Cd0nCTiKMW205mCWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitten-litter-cat-names-CATNAMES0521-338c6363384c46af850c71f57c66559d.jpg"
          width="550px"
        />
      </div>
      <div>
        <img
          src="https://www.petfinder.com/static/00836efabded939d79d00ea755e4b140/b44b0/dog-landing-hero-lg.jpg"
          width="550px"
        />
        <p>
          Persian birman so maine coon for donskoy tom. Ocelot savannah.
          Abyssinian american bobtail so bengal, but jaguar yet egyptian mau.
          Panther himalayan. Ragdoll ocelot ragdoll or persian, or ragdoll and
          burmese. Egyptian mau. Himalayan grimalkin siberian cornish rex, but
          manx thai. Puma cheetah yet lion or himalayan, savannah kitty mouser.
        </p>
      </div>
      <ListAnimals setId={setId} />
    </div>
  );
}
