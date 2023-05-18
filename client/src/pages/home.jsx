import React from "react";
import { Card } from "react-bootstrap";
import { CardContent, CardDescription } from "semantic-ui-react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div>
      <div
        className="homeimages"
        style={{
          backgroundImage:
            "url(https://mymodernmet.com/wp/wp-content/uploads/2022/02/cute-cat-and-dog-friends-1.jpg)",
        }}
      ></div>
      <div className="homeparagraph">
        "Saving just one pet won't save the world, but surely it will change the
        world for that one pet."
      </div>
      <div
        className="homeimages"
        style={{
          backgroundImage:
            "url(https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg)",
        }}
      ></div>
      <div class="row pt-5">
        <div class="col-md-4">
          <Card>
            <CardContent className="p-4 d-flex flex-column justify-content-center">
              <img src="https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg" />
              <br></br>
              <CardDescription>
                <h3>Reasons To Adopt A Cat</h3>
                <br></br>
                If you have been wanting to add a new feline to your family then
                adopting is the way to go! There are so many benefits to
                adopting a cat but here are a few of our favourites:
              </CardDescription>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <div className="text-center">
                    <Button
                      className="mt-4"
                      style={{ backgroundColor: "pink" }}
                    >
                      Learn More
                    </Button>
                  </div>
                }
              >
                <Modal.Header>A Few Reasons to Adopt A Cat!</Modal.Header>
                <Modal.Content image>
                  <Image
                    size="large"
                    src="https://www.treehugger.com/thmb/f8Yki-wOf-GNpYR2H3NCCVsjGGY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/portrait-of-beautiful-white-burmilla-looking-up--black-background-495381097-8202bb60c75949529eb48060044ed0b5.jpg"
                    wrapped
                  />
                  <Modal.Description>
                    <ul>
                      <li>
                        <h4>1. You Save Lives</h4>
                        This is by far the best, most important, and really only
                        reason you need to adopt a cat! Every year 860,000 (yes,
                        that many 0’s) cats are euthanized due to lack of space
                        in shelters and rescue programs. When you adopt a cat
                        you not only are giving that cat a home but also freeing
                        space within the shelter for one more animal!
                      </li>
                      <li>
                        <h4>2. It’s a Heck of a Deal!</h4>
                        When you rescue a cat from a shelter they will often
                        already be vaccinated (until the vaccines are due in a
                        year), as well as spayed or neutered already (if a young
                        adult at the time of adoption). When you purchase a new
                        kitten you are responsible for the cost of multiple
                        office visits to the vets for vaccines, as well as their
                        spay/neuter procedure when they are of age. Rescues and
                        shelters are able to offer their cats for a reasonable
                        adoption fee that can save you hundreds of dollars in
                        the first year of that cat’s life!
                      </li>
                      <li>
                        <h4>
                          3. You Will Have a Good Idea of the Adopted Cat’s
                          Personality
                        </h4>
                        These cats in shelters and rescues are cared for daily
                        by volunteers and workers. These individuals get to know
                        the cat’s personality, likes and dislikes, and if they
                        will have any specific needs from their new owners once
                        they get adopted. This way when you ask about a cat,
                        they can point out the ones that fit your wish list.
                        Whether you want a couch potato or a lively playful cat,
                        a shelter is sure to have what you are looking for in a
                        feline friend.
                      </li>
                      <li>
                        <h4>4. Your Mental Health will Benefit</h4>
                        Multiple studies show that adopting a cat (or any animal
                        from a shelter) has a positive impact on the new owner’s
                        ability to cope with stress, depression, anxiety, and
                        loneliness. You will enjoy your new sense of happiness
                        and well-being, taking a cat home from the shelter IS
                        the best medicine!
                      </li>
                      <li>
                        <h4>5. Cats are Good for Your Heart</h4>A recent study
                        found that owning a cat may lead to a reduced risk of
                        death from cardiovascular disease and stroke. This is an
                        important finding considering the AHA/ASA says, “Stroke
                        is the number 3 cause of death in women and number 4
                        cause of death in men.
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
        <div class="col-md-4">
          <Card>
            <CardContent className="p-4 d-flex flex-column justify-content-center">
              <img src="https://bestfriends.org/sites/default/files/inline-files/Pet-fostering-Foster-Kittens-P5290021JW.jpg?nq4Q6OZtwKaL9purD9RoHhm.5qHjhkHU" />
              <br></br>
              <CardDescription>
                <h3>You Ever Thought About Fostering?</h3>
                <br></br>
                Fostering a pet does not require that you have loads of free
                time or advanced dog training skills. In fact, most shelters
                offer foster opportunities that fit your schedule.Are you
                thinking of fostering a cat or dog from your local shelter or
                rescue group? Check out our top 5 list of reasons to foster an
                animal.
              </CardDescription>
              <Modal
                onClose={() => setOpen1(false)}
                onOpen={() => setOpen1(true)}
                open={open1}
                trigger={
                  <div className="text-center">
                    <Button
                      className="mt-4"
                      style={{ backgroundColor: "pink" }}
                    >
                      Learn More
                    </Button>
                  </div>
                }
              >
                <Modal.Header>Fostering</Modal.Header>
                <Modal.Content>
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
            </CardContent>
          </Card>
        </div>
        <div class="col-md-4">
          <Card>
            <CardContent className="p-4 d-flex flex-column justify-content-center">
              <img src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg" />
              <br></br>
              <CardDescription>
                <h3>Why You Should Adopt A Dog</h3>
                <br></br>
                If you are looking for a reason why you should adopt a dog, I
                have 5 of them listed here. But honestly, I think there are
                hundreds of reasons adopting a rescue dog is the right thing to
                do. And there are probably a hundred more reasons NOT to adopt a
                dog. So make sure you adopt for the right reasons
              </CardDescription>
              <Modal
                onClose={() => setOpen2(false)}
                onOpen={() => setOpen2(true)}
                open={open2}
                trigger={
                  <div className="text-center">
                    <Button
                      className="mt-4"
                      style={{ backgroundColor: "pink" }}
                    >
                      Learn More
                    </Button>
                  </div>
                }
              >
                <Modal.Header>Adopt A Dog! Why?</Modal.Header>
                <Modal.Content image>
                  <Image
                    size="large"
                    src="https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nJTIwYmFieXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    wrapped
                  />
                  <Modal.Description>
                    <ul>
                      <li>
                        <h4>1. Adopting a dog will save a dog’s life.</h4>
                        The number one reason to adopt a dog is that you will be
                        saving his life. Many shelters are overflowing with dogs
                        and cats, they sometimes have to turn away animals
                        simply because they do not have enough room. So when you
                        adopt your dog, another one can take his place.
                      </li>
                      <li>
                        <h4>
                          2. You will never have cold feet in bed on cold winter
                          nights.
                        </h4>
                        Some people don’t want their dogs on the bed with them,
                        and that’s totally fine. But I love that when I go to
                        bed my feet are always warm tucked under my 85 pound
                        yellow lab!
                      </li>
                      <li>
                        <h4>
                          3. Dog adoption is less expensive than buying a dog
                          from a breeder or pet store.
                        </h4>
                        The benefits of adopting a dog from a shelter are
                        numerous, cost being a big one. Most humane societies
                        and rescue organizations will charge $100-$400 for a
                        dog. With that, you will get a dog that is completely
                        up-to-date on vaccinations, spayed/neutered, and
                        sometimes even micro-chipped.
                      </li>
                      <li>
                        <h4>
                          4. You will encourage other people to adopt a dog by
                          telling your story.
                        </h4>
                        When friends and family hear your wonderful success
                        story of adopting the dog of your dreams, they may think
                        about adopting their next dog too! Spread the doggy
                        love!
                      </li>
                      <li>
                        <h4>5. Fight against puppy mills.</h4>
                        You should adopt a dog from a reputable shelter and not
                        buy a puppy from a pet store or on Craigslist, because
                        you may end up with a puppy mill dog. I think the United
                        States is starting to finally crack down more on the
                        puppy mill issue, but they are still out there. Puppy
                        mill dogs can have a host of health and behavior issues.
                        You may be one of those unique people that want to save
                        these dogs, but it can take a lot of money and patience
                        to truly rehabilitate a puppy mill dog. Some states are
                        actually passing laws to ban pet stores from selling
                        dogs, they can only showcase dogs adoptable from local
                        shelters and rescues.
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
