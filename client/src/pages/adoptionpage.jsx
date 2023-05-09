import React from "react";
import { useState } from "react";
import Form from "../components/Form";

export default function Adoptionpage() {
  const [id, setId] = useState(null);
  return (
    <div>
      <div>
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
      <Form id={id} />
    </div>
  );
}
