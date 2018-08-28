import React from 'react';
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <div className='page'>
    <h1>Apps done right.</h1>
    <p>I am a fullstack software engineer from Seattle. I enjoy puzzles and thrive on curiousity, ultimately driving my passion for innovation through software development. I care about finding your solutions, let's get in touch. </p>

    <Button className='button' variant="contained" color="primary">
      Need Website?
    </Button>
    <Button className='button' variant="contained" color="primary">
      Looking to Hire?
    </Button>
  </div>
)

export default IndexPage
