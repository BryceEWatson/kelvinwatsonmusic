export default function computeImagePositionFromMousePosition(mousePositionX, mousePositionY){
  return {
    x: mousePositionX/3 * -1/22, //move only a 22nd in opposite direction
    y: mousePositionY/3 * -1/22
  };
}
