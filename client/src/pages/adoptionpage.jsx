import React from "react";
import { useState } from "react";
import Form from "../components/Form";
import { useParams } from "react-router-dom";

export default function Adoptionpage() {
  const { animalid } = useParams();
  return (
    <div>
      <div className="thankyouheader">
        <h3>Thank You For Considering Adoption!</h3>
      </div>
      <div className="thankyouparagraph">
        Annoy owner until he gives you food say meow repeatedly until belly
        rubs, feels good missing until dinner time, yet meow meow pee in shoe
        sit by the fire, play time, so climb leg, for i want to go outside let
        me go outside nevermind inside is better. Thug cat sit on human scratch
        at door to be let outside, get let out then scratch at door immmediately
        after to be let back in yet cat playing a fiddle in hey diddle diddle?
        hiss at vacuum cleaner what a cat-ass-trophy! for fall asleep
        upside-down. Cough furball into food bowl then scratch owner for a new
        one you have cat to be kitten me right meow where is it? i saw that bird
        i need to bring it home to mommy squirrel! or scream for no reason at 4
        am. Enslave the hooman stare out cat door then go back inside so somehow
        manage to catch a bird but have no idea what to do next, so play with it
        until it dies of shock roll on the floor purring your whiskers off but
        what the heck just happened, something feels fishy, cat cat moo moo lick
        ears lick paws.{" "}
      </div>
      <div className="thankyoucolumn">
        <div className="thankyourow">
          <img
            src="https://t4.ftcdn.net/jpg/00/84/66/63/360_F_84666330_LoeYCZ5LCobNwWePKbykqEfdQOZ6fipq.jpg"
            alt="A floof"
            style={{ width: "350px" }}
          />
        </div>
        <div className="thankyourow">
          <img
            src="https://www.hepper.com/wp-content/uploads/2021/05/Pembroke-Welsh-Corgi-dog-lying-on-grass.webp"
            alt="pomeranian"
            style={{ width: "350px" }}
          />
        </div>
        <div className="thankyourow">
          <img
            src="https://economictimes.indiatimes.com/thumb/msid-95129274,width-1600,height-1066,resizemode-4,imgsize-59990/national-black-cat-day-see-why-us-celebrates-this-occasion.jpg?from=mdr"
            alt="black floofy cat"
            style={{ width: "350px" }}
          />
        </div>
      </div>
      <Form id={animalid} />
    </div>
  );
}
