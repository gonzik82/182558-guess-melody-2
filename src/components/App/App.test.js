import React from "react";
import renderer from 'react-test-renderer';
import App from './app';


const questions = [{
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  },
  answers: [
    {
      picture: `http://placehold.it/134x134`,
      artist: `John Snow`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Jack Daniels`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Jim Beam`
    }
  ]
}];

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      mistakes={0}
      time={0}
      questions={questions}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
