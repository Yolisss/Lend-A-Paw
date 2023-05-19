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
      <div className="adoptablepetspic1 container-fuild pt-3">
        <img
          className="col-md-4"
          src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          width="550px"
        />
        <img
          className="col-md-4"
          src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          width="550px"
        />
        <img
          className="col-md-4"
          src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdCUyMGFuZCUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
