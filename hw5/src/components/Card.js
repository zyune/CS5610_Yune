import React, { useState } from "react";
import { animated, interpolate } from "react-spring/hooks";
import Carousel from "nuka-carousel";
import DogApiUrl from "./DogApiUrl";
import GetJokeApi from "./GetJokeApi";
import Axios from "axios";
class Card extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { name, age, distance, text, pics } = objs[i];

    const aaa = <GetJokeApi />;
    return (
      // <animated.div
      //   key={i}
      //   style={{
      //     transform: interpolate(
      //       [x, y],
      //       (x, y) => `translate3d(${x}px,${y}px,0)`
      //     ),
      //   }}
      // >
      //   <animated.div
      //     {...bind(i)}
      //     style={{
      //       transform: interpolate([rot, scale], trans),
      //     }}
      //   >
      //     <div className="card">
      //       <Carousel>
      //         {pics.map((pic) => (
      //           <img src={pic} alt="profilePicture" />

      //           //<DogApiUrl />
      //         ))}
      //       </Carousel>
      //       <h2>{name},</h2>
      //       <h2>{age}</h2>
      //       <h5>{distance}</h5>
      //       <h5>{text}</h5>
      //     </div>
      //   </animated.div>
      // </animated.div>
      <div>{aaa}</div>
    );
  }
}

export default Card;
