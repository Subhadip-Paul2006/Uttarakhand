"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { placeMarkers } from "@/lib/places";

const categoryColor: Record<string, string> = {
  "Hidden Gems": "#4A7C59",
  "Most Visited": "#E07B39",
  "Explorer Trails": "#5B8DB8",
};

function iconFor(color: string) {
  return new L.DivIcon({
    className: "custom-marker",
    html: `<span style="display:block;width:14px;height:14px;border-radius:999px;border:2px solid #F5F0E8;background:${color};box-shadow:0 0 10px ${color};"></span>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
}

export default function MapSection() {
  return (
    <section id="map" className="py-24 bg-[#0d1b2a]">
      <div className="section-shell">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Where These Places Actually Are</h2>
        <p className="font-body italic text-[#c9c3b5] mb-8">The map is dark. The decisions are yours.</p>
        <MapContainer
          center={[30.0668, 79.0193]}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[420px] w-full border border-[#1c3248]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {placeMarkers.map((place) => (
            <Marker key={place.name} position={place.coordinates} icon={iconFor(categoryColor[place.category])}>
              <Popup>
                <p className="font-semibold">{place.name}</p>
                <p className="text-xs mb-1" style={{ color: categoryColor[place.category] }}>
                  {place.category}
                </p>
                <p className="text-sm">{place.description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
