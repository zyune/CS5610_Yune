import React, { useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import Card from "./Card";
import axios from "axios";
import "../styles/Deck.css";
const cards = [1, 2, 3, 4];

async function getPicture() {
  const val = await axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      //console.log(response.data.message);

      //console.log(aaa);
      return response.data.message;
    });

  return val;
}
// const aaa = getPicture();
// await console.log(aaa);

const objs = [
  {
    pics: [],
    name: "Chloe",
    age: 18,
    distance: "1 mile away",
    text: "The C and the L are silent.",
  },
  {
    pics: ["https://dog.ceo/api/breeds/image/random"],
    name: "Sarah",
    age: 24,
    distance: "5 miles away",
    text:
      "It's tough being a single mom. Or so I'm told, I wouldn't know; I don't have kids.",
  },
  {
    pics: ["https://dog.ceo/api/breeds/image/random"],
    name: "Savannah",
    age: 29,
    distance: "3 miles away",
    text: "A little known fact is that I cover about 40% of Africa.",
  },
  {
    pics: [
      "https://dog.ceo/api/breeds/image/random",
      "https://dog.ceo/api/breeds/image/random",
    ],
    name: "Jane",
    age: 22,
    distance: "2 miles away",
    text:
      "On the first date I will carve our initials in a tree. It's the most romantic way to let you know I have a knife.",
  },
];

const to = (i) => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={objs}
      bind={bind}
    />
  ));
}

export default Deck;
