import React, { useEffect } from 'react';

import * as Fireworks from 'fireworks-canvas';

import { Howl } from 'howler';
import fireworksSounds from '../sounds/fireworks.mp3';

const FireworksComponent = () => {
  useEffect(() => {
    const sound = new Howl({
      src: [fireworksSounds],
      autoplay: true,
      loop: true,
      volume: 1,
    });

    const container = document.querySelector('.container');
    const options = {
      maxRockets: 20, // max # of rockets to spawn
      rocketSpawnInterval: 120, // millisends to check if new rockets should spawn
      numParticles: 100, // number of particles to spawn when rocket explodes (+0-10)
      explosionMinHeight: 0.2, // percentage. min height at which rockets can explode
      explosionMaxHeight: 0.9, // percentage. max height before a particle is exploded
      explosionChance: 0.06, // chance in each tick the rocket will explode
      width: container.clientWidth, // override the width, defaults to container width
      height: container.clientHeight // override the height, defaults to container height
    }

    // instantiate the class and call start
    // this returns a disposable - calling it will stop fireworks.
    const fireworks = new Fireworks(container, options);
    fireworks.start();

    sound.play();
  }, []);
  return (
    <div className='container' style={ { width: '100%', height: '80vh' } }></div>
  )
}

export default FireworksComponent;
