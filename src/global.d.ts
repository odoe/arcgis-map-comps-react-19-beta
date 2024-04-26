import type { JSX as ArcGisJSX } from "@arcgis/map-components";

interface LocalArcgisMap extends ArcGisJSX.ArcgisMap {
  onarcgisViewReadyChange: LocalJSX.ArcgisMap["onArcgisViewReadyChange"]
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ArcGisJSX.IntrinsicElements {
      "arcgis-map": LocalArcgisMap
    }
  }
}
