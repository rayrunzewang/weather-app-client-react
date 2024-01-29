import Clear from './assets/Clear.jpg';
import Clouds from './assets/Clouds.jpg';
import Rain from './assets/Rain.jpg'

const backgroundImage = (weather) => {
  let bgImg = Clear;
  switch (true) {
    case weather === "Clear":
      bgImg = Clear;
      break;
    case weather === "Clouds":
      bgImg = Clouds;
      break;
    case weather === "Rain":
      bgImg = Rain;
      break;
    default:
      bgImg = Clear;
  }

  return bgImg
}

export default backgroundImage;