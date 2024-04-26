import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import './App.css';

defineCustomElements();

function App() {
  const popupConfig = {
    dockEnabled: true,
    dockOptions: {
      position: "bottom-right",
      breakpoint: false,
    },
  } as unknown as __esri.Popup;
  return (
    <div className='app-container'>
      <arcgis-map
        popup={popupConfig}
        item-id="e691172598f04ea8881cd2a4adaa45ba"
        onarcgisViewReadyChange={() => console.log("ready")}></arcgis-map>
    </div>
  )
}

export default App

