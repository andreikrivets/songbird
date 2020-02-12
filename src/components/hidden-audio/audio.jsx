import React from 'react';

const Audio = () => {
  return (
    <>
      <audio id="wrong" src="https://www.myinstants.com/media/sounds/quack_5.mp3" type="audio/mp3">
        <track kind="captions" />
      </audio>
      <audio
        id="correct"
        src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-21014/zapsplat_human_male_middle_aged_says_yeah_22278.mp3?_=2"
        type="audio/mp3"
      >
        <track kind="captions" />
      </audio>
    </>
  );
};

export default Audio;
