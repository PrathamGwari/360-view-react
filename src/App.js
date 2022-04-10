import {Pannellum} from '360-react-pannellum'
import Hotel1 from './images/hotel2.jpeg'

function App() {
  const closeAction = ()=> {
    console.log('360 viewer closed');
  }
  return (
    <>
      <Pannellum
      width='100%'
      height='100vh'
      imagePath={Hotel1}
      isDisplayCloseButton={false}
      closeHandler={closeAction}
      closeButtonTitle='Close'
      showZoomCtrl={false}
      showFullscreenCtrl={false}
      autoLoad />
    </>
  );
}

export default App;
