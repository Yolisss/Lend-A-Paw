import React from "react";
import { Card } from "react-bootstrap";
import { CardContent, CardDescription } from "semantic-ui-react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="container">
      <div className="homeimage">
        <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className="homeparagraph">
        "Saving just one pet won't save the world, but surely it will change the
        world for that one pet."
      </div>
      <div className="secondhomeimage">
        <img
          src="https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg"
          width="100%"
        />
      </div>
      <div className="homecards1">
        <Card>
          <CardContent>
            <CardDescription>
              Deciding to adopt a rescue pet or shelter dog is an important
              decision. It can be tough to take into account everything you’ll
              need to be prepared for (both expected and unexpected), but the
              rewards of adopting a four-legged friend outweigh most concerns
              and fears many people have concerning adoption. Still not
              convinced? See our top 5 reasons to adopt:{" "}
            </CardDescription>
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={<Button>Learn More</Button>}
            >
              <Modal.Header>
                A Few Reasons to Adopt A Shelter Animal
              </Modal.Header>
              <Modal.Content image>
                <Image
                  size="medium"
                  src="https://www.gannett-cdn.com/presto/2021/03/04/PTCN/e24f4e1b-5197-4469-9ffa-3defd8893efd-Texas_Dogs_03.jpg?crop=3000,1688,x0,y123&width=660&height=372&format=pjpg&auto=webp"
                  wrapped
                />
                <Modal.Description>
                  <ul>
                    <li>
                      <h4>1. You're Saving More Than One Life</h4>
                      It goes without saying that when you adopt a rescue pet,
                      you’re saving a life—but you’re actually saving more than
                      one. By adopting, you’re helping make space for another
                      animal in need and helping to give them the opportunity to
                      become beloved pets.
                    </li>
                    <li>
                      <h4>2. Unconditinal Love! What Could Be Better?</h4>
                      Many people worry about connecting with a rescued dog, but
                      shelter dogs have so much love to give—and they won’t ever
                      stop giving it to you once you let them into your heart!
                    </li>
                    <li>
                      <h4>
                        3.You're Giving A Second Chance to a Deserving Animal
                      </h4>
                      Beyond just helping an animal in need, you’re giving a
                      rescue an opportunity to find their voice; to be
                      themselves and get a second chance to become a dog beyond
                      the walls of shelter or rescue. You truly give them the
                      keys to start anew in a life where second chances can
                      often be hard to come by
                    </li>
                    <li>
                      <h4>4. You Get a Chance to Stay Actice</h4>
                      Maybe you’re trying to live a more active lifestyle, or
                      maybe you’re just looking for a new adventure. Either way,
                      a new four-legged friend gives you a reason to get
                      outdoors more and stretch your legs!
                    </li>
                    <li>
                      <h4>5. You're Fighting Back Agains Cruel Breeding</h4>
                      Puppies purchased at pet stores almost always come from
                      cruel breeding facilities where dogs are confined to
                      small, filthy spaces and receive little to no veterinary
                      care. By adopting from your local shelter or rescue, you
                      are giving back to your community instead of helping cruel
                      breeders profit.
                    </li>
                  </ul>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Close
                </Button>
                {/* <Button
                  content="Yep, that's me"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                /> */}
              </Modal.Actions>
            </Modal>
          </CardContent>
        </Card>
        <div>
          <Card className="homecards2">
            <CardContent>
              <CardDescription>
                We’re sure you’ve heard that fostering animals in need is
                important, and even lifesaving, but do you know why? In honor of
                Adopt a Shelter Cat Month we’ve teamed up with our friends at
                ARM & HAMMER Litter’s Feline Generous Program to spread the word
                on why animal fostering is such a critical part of helping
                shelter animals. Our top five list below will break down all of
                the benefits of fostering and explain more on how you can get
                involved!
              </CardDescription>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Learn More</Button>}
              >
                <Modal.Header>
                  A Few Reasons to Adopt A Shelter Animal
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    size="medium"
                    src="https://www.aspca.org/sites/default/files/ah_benefits_fostering_main.jpg"
                    wrapped
                  />
                  <Modal.Description>
                    <ul>
                      <li>
                        <h4>
                          1. Fostering provides a safe and healthy environment
                          for animals in need to heal
                        </h4>
                        Whether you’re fostering tiny kittens or large dogs,
                        many of these animals require your love and support to
                        have the best chance of finding an adopter. When you
                        foster, you help give them the space, experiences and
                        resources they need when going to a new home!
                      </li>
                      <li>
                        <h4>
                          2. Fostering animals creates more space in shelters
                          for other animals in need
                        </h4>
                        Each and every animal in a shelter requires time and
                        resources that could be stretched further if those
                        animals were in foster homes, regardless of if the
                        shelter is crowded or not. Foster caregivers help the
                        shelters and rescues immeasurably!
                      </li>
                      <li>
                        <h4>
                          3. Fostering saves the lives of neonate and pee wee
                          kittens
                        </h4>
                        Neonatal (zero to four weeks) and Pee-Wee (four to eight
                        weeks) kittens are considered an extremely vulnerable
                        population as they often cannot survive without
                        round-the-clock care. Having a foster caregiver with the
                        supplies and training they need to care for these tiny
                        kittens can literally save their lives and help them
                        become healthy, strong and ready for adoption!
                      </li>
                      <li>
                        <h4>
                          4. Fostering introduces the cat or kitten to new pools
                          of prospective adopters
                        </h4>
                        Fostered cat and kittens benefit greatly from exposure
                        to their caregiver’s friends and family, and their
                        caregiver can offer trusted assessments of the cat’s
                        personality and needs. Not only is the foster caregiver
                        the cats’ parent, but their publicist, too!
                      </li>
                      <li>
                        <h4>
                          5. Your life becomes a whole lot more interesting -and
                          adorable!
                        </h4>
                        Who wouldn’t want adorable cats and kittens around?
                        Think of all the benefits: the companionship, the chance
                        for a new routine and best of all, the potential for the
                        cutest snuggles ever! Fostering is easy to weave into
                        your everyday life and the shelter will provide you with
                        everything you need.
                      </li>
                    </ul>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpen(false)}>
                    Close
                  </Button>
                  {/* <Button
                  content="Yep, that's me"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => setOpen(false)}
                  positive
                /> */}
                </Modal.Actions>
              </Modal>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// <div>
//   <div className="container">
//     <div class="firstcathomeimage">
//       <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
//     </div>
//     <div className="homeparagraph">
//       "Saving just one pet won't save the world, but surely it will change the
//       wold for that one pet."
//     </div>
//   </div>
// </div>;
//  <div className="container2">
//    <div className="firstcathomeimage2">
//      <img
//        src="https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg"
//        width="550px"
//      />
//    </div>
//    <div className="homeparagraph2">
//      Ex doloremque, nihil consequat or nostrum consequuntur. Eius aliquip nulla
//      commodi rem sed. Nisi fugit quam suscipit so ratione, and voluptas. Modi
//      quasi. Eius non. Unde sunt or labore for quae or commodi dolores, ullamco.
//      Illum do so irure yet quasi numquam yet cillum or aspernatur. Aspernatur
//      adipisicing. Minima magna but proident. Labore dicta ea for totam so
//      commodi, aperiam for qui. Vitae suscipit. Nisi ad anim for ipsam quia for
//      vel, illum. Tempor iste dolorem. Dolor error. Incididunt veniam, or
//      inventore, yet cillum.
//    </div>
//  </div>;
