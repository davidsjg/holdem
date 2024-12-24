import "./Card2.css";
import { convertCards } from "../convertCards";
//import twoClubs from './2_of_clubs.png';
import twoDiamonds from './2_of_diamonds.png'
import calcCardImage from "../calcCardImage";
require('./2_of_clubs.png')
function Card2(props) {


 let cardImage = calcCardImage(props.value.number, props.value.suit)

 console.log(cardImage)


  return (
    <>
      <div className="cardContain">
        <div >
            {cardImage !== '' ? (
                <>
            <img className="card2 twoClubs">jknkjl</img>
            </>
            ):(
                <></>
            )}

        </div>
      </div>
    </>
  );
}

export default Card2;
