import React from 'react';
import IdCard from './IdCard.jsx';
import Greetings from './Greetings.jsx';
import Random from './Random';
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Carousel from './Carousel';
import Dice from './Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Iteration 1 */}
      <div className="idcards">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      {/* Iteration 2 */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      {/* Iteration 3 */}
      <p>Test new pc</p>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
      {/* Iteration 8 */}
      <LikeButton /> <LikeButton />
      {/* Iteration 9 */}
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      {/* Iteration 10 */}
      <Dice />
      {/* Iteration 11 */}
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
