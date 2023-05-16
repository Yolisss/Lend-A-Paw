import React from "react";
import { List, Icon } from "semantic-ui-react";

// export default function Contactinfo() {
//   return (
//     <div>
//       <Card
//         href="#card-example-link-card"
//         header="Elliot Baker"
//         meta="Friend"
//         description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
//       />
//     </div>
//   );
// }

const Contactinfo = () => (
  <div>
    <List>
      <List.Item>
        <List.Header>Email:</List.Header>lendapaw@gmail.com
      </List.Item>
      <List.Item>
        <List.Header>Phone:</List.Header>
        1(43)143-1431
      </List.Item>
      <List.Item>
        <List.Header>Location:</List.Header>
        Bay Area, CA
      </List.Item>
    </List>
  </div>
);

export default Contactinfo;
