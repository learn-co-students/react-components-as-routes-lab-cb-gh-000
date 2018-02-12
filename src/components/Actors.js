import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <div className="actor">
            {actor.name} {actor.movies}
          </div>
        );
      }) }
    </div>
  );
};

export default Actors;
