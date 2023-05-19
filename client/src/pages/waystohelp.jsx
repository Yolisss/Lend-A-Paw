import React from "react";
import { Container } from "semantic-ui-react";
import { Card } from "react-bootstrap";
import { CardContent, CardDescription } from "semantic-ui-react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default function Waystohelp() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <div>
      <div className="waystohelpimage2">
        <img
          className="img-fluid"
          src="https://post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1200x628-facebook-1200x628.jpg"
        />
      </div>

      <div className="waystohelpquote1">
        <p>
          "There's a saying. If you want someone to love you forever, adopt a
          fur friend, feed it and keept it around."
        </p>
      </div>
      <div>
        <div
          className="waystohelpimages1"
          style={{
            backgroundImage:
              "url(https://dogsbestlife.com/wp-content/uploads/2021/02/cats-vs.-dogs-group-scaled.jpeg)",
          }}
        ></div>
        <div className="waystohelpparag">
          <p>
            To pet a cat, rub its belly, endure blood and agony, quietly weep,
            keep rubbing belly chew foot, for funny little cat chirrup noise
            shaking upright tail when standing next to you. Purr while eating
            poop in litter box, scratch the walls so snuggles up to shoulders or
            knees and purrs you to sleep pushed the mug off the table so hide
            when guests come over kitty kitty pussy cat doll, but intrigued by
            the shower. Stare out cat door then go back inside. Cry louder at
            reflection lick butt and make a weird face but stare out cat door
            then go back inside but eat plants, meow, and throw up because i ate
            plants. Scratch the box check cat door for ambush 10 times before
            coming in yet sun bathe give attitude. Eat grass, throw it back up
            annoy kitten brother with poking, iâ€™m so hungry iâ€™m so hungry
            but ew not for that chase dog then run away stare at wall turn and
            meow stare at wall some more meow again continue staring , but
            tickle my belly at your own peril i will pester for food when you're
            in the kitchen even if it's salad but human is in bath tub,
            emergency! drowning! meooowww!.
          </p>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <Card>
          <CardContent className="p-4 row align-items-center">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://images.squarespace-cdn.com/content/v1/5cd493f1185add0001e4670d/1558988155986-PY602J3JHUN77WUMVRXS/image-asset.jpeg?format=2500w"
              />
            </div>
            <div className="col-md-8">
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
                trigger={
                  <div className="text-center">
                    <Button className="mt-4">Learn More About Adoption</Button>
                  </div>
                }
              >
                <Modal.Header>
                  A Few Reasons to Adopt A Shelter Animal
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    size="large"
                    src="https://www.gannett-cdn.com/presto/2021/03/04/PTCN/e24f4e1b-5197-4469-9ffa-3defd8893efd-Texas_Dogs_03.jpg?crop=3000,1688,x0,y123&width=660&height=372&format=pjpg&auto=webp"
                    wrapped
                  />
                  <Modal.Description>
                    <ul>
                      <li>
                        <h4>1. You're Saving More Than One Life</h4>
                        It goes without saying that when you adopt a rescue pet,
                        you’re saving a life—but you’re actually saving more
                        than one. By adopting, you’re helping make space for
                        another animal in need and helping to give them the
                        opportunity to become beloved pets.
                      </li>
                      <li>
                        <h4>2. Unconditinal Love! What Could Be Better?</h4>
                        Many people worry about connecting with a rescued dog,
                        but shelter dogs have so much love to give—and they
                        won’t ever stop giving it to you once you let them into
                        your heart!
                      </li>
                      <li>
                        <h4>
                          3.You're Giving A Second Chance to a Deserving Animal
                        </h4>
                        Beyond just helping an animal in need, you’re giving a
                        rescue an opportunity to find their voice; to be
                        themselves and get a second chance to become a dog
                        beyond the walls of shelter or rescue. You truly give
                        them the keys to start anew in a life where second
                        chances can often be hard to come by
                      </li>
                      <li>
                        <h4>4. You Get a Chance to Stay Actice</h4>
                        Maybe you’re trying to live a more active lifestyle, or
                        maybe you’re just looking for a new adventure. Either
                        way, a new four-legged friend gives you a reason to get
                        outdoors more and stretch your legs!
                      </li>
                      <li>
                        <h4>5. You're Fighting Back Agains Cruel Breeding</h4>
                        Puppies purchased at pet stores almost always come from
                        cruel breeding facilities where dogs are confined to
                        small, filthy spaces and receive little to no veterinary
                        care. By adopting from your local shelter or rescue, you
                        are giving back to your community instead of helping
                        cruel breeders profit.
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
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 row align-items-center">
            <div className="col-md-8">
              <CardDescription>
                We’re sure you’ve heard that fostering animals in need is
                important, and even lifesaving, but do you know why? Our top
                five list below will break down all of the benefits of fostering
                and explain more on how you can get involved!
              </CardDescription>
              <Modal
                onClose={() => setOpen1(false)}
                onOpen={() => setOpen1(true)}
                open={open1}
                trigger={
                  <div className="text-center">
                    <Button className="mt-4">Learn More About Fostering</Button>
                  </div>
                }
              >
                <Modal.Header>Fostering</Modal.Header>
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
                  <Button color="black" onClick={() => setOpen1(false)}>
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
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://img1.wsimg.com/isteam/ip/9a5a6325-6df0-41ed-a195-fd5ab6ea633e/AF4BFC1D-1716-4230-9366-2F84269AF510.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:1000,cg:true"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 row align-items-centerr">
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/blt0dea19c9ca1bfc7e/6261d5d5479b5e559dd84bc2/img-things-donate-animal-shelters-header.jpg"
              />
            </div>
            <div className="col-md-8">
              <CardDescription>
                The people that work at these shelters do a lot for the dogs
                under their care. That is one reason why you should donate to
                dog shelters. You are helping your neighbors earn money, help
                the economy as well as help the many unwanted dogs who did not
                ask to be there.
              </CardDescription>
              <Modal
                onClose={() => setOpen2(false)}
                onOpen={() => setOpen2(true)}
                open={open2}
                trigger={
                  <div className="text-center">
                    <Button className="mt-4">Learn More About Donating</Button>
                  </div>
                }
              >
                <Modal.Header>
                  Why You Should Donate to Animal Shelters
                </Modal.Header>
                <Modal.Content image>
                  <Image
                    size="large"
                    src="https://mymodernmet.com/wp/wp-content/uploads/2022/02/cute-cat-and-dog-friends-1.jpg"
                    wrapped
                  />
                  <Modal.Description>
                    <ul>
                      <li>
                        <h4>1. Houses More Dogs</h4>
                        Your donations make it possible for these dog shelters
                        to help more dogs find safety, shelter, and a new home.
                        The longer a dog can stay in the shelter the better
                        their chances of finding a new owner they can be a
                        companion to and protect.
                      </li>
                      <li>
                        <h4>2. Cuts Down on Euthanasion</h4>
                        Those dog shelters that get donations can avoid the
                        tragic event of putting unwanted dogs down. This is very
                        emotional for the shelter workers, something they would
                        rather avoid.Plus, with the extra funds, they can keep
                        those dogs longer until a good home is found for them.
                        Your donation can save dogs as well as spare humans this
                        emotional time.
                      </li>
                      <li>
                        <h4>3. If You Can't Adopt, You Can Still Help</h4>
                        That is the bottom line here. Not everyone can adopt a
                        dog. Their living situations just do not allow it.
                        However, you can still help by making donations to dog
                        shelters allowing someone else who can adopt to have the
                        time to find the right pet for them.
                      </li>
                    </ul>
                  </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpen2(false)}>
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
