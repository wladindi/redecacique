"use client";

import { useEffect, useRef, useState } from "react";
import type { Station } from "@/types";
import { MapPin } from "lucide-react";

interface StationMapProps {
  stations: Station[];
  singleStation?: Station;
}

declare global {
  interface Window {
    google: typeof google;
    initCaciqueMap?: () => void;
  }
}

export function StationMap({ stations, singleStation }: StationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(false);

  const stationsToShow = singleStation ? [singleStation] : stations;

  useEffect(() => {
    const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

    if (!MAPS_API_KEY) {
      setError(true);
      return;
    }

    const initMap = () => {
      if (!mapRef.current || !window.google) return;

      const center = stationsToShow.length > 0
        ? { lat: stationsToShow[0].lat, lng: stationsToShow[0].lng }
        : { lat: -30.0277, lng: -51.2287 };

      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: stationsToShow.length === 1 ? 15 : 11,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      stationsToShow.forEach((station) => {
        const marker = new window.google.maps.Marker({
          position: { lat: station.lat, lng: station.lng },
          map,
          title: station.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#C8102E",
            fillOpacity: 1,
            strokeColor: "#FFFFFF",
            strokeWeight: 2,
          },
        });

        const mapsQuery = encodeURIComponent(`${station.name}, ${station.address}, ${station.city} - ${station.state}, Brasil`);
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="font-family: Inter, sans-serif; padding: 4px; max-width: 200px;">
              <strong style="color: #C8102E; font-size: 14px;">${station.name}</strong>
              <p style="margin: 4px 0; font-size: 12px; color: #666;">${station.address}</p>
              <p style="margin: 4px 0; font-size: 12px; color: #666;">${station.city} - ${station.state}</p>
              <p style="margin: 4px 0; font-size: 12px; color: #333;">${station.hours}</p>
              <a href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}"
                 target="_blank"
                 style="display:inline-block; margin-top:6px; background:#C8102E; color:white; padding:4px 10px; border-radius:20px; font-size:11px; text-decoration:none; font-weight:bold;">
                Ver Rota
              </a>
            </div>
          `,
        });

        marker.addListener("click", () => infoWindow.open(map, marker));
      });

      if (stationsToShow.length > 1) {
        const bounds = new window.google.maps.LatLngBounds();
        stationsToShow.forEach((s) => bounds.extend({ lat: s.lat, lng: s.lng }));
        map.fitBounds(bounds);
      }

      setMapLoaded(true);
    };

    if (window.google?.maps) {
      initMap();
      return;
    }

    window.initCaciqueMap = initMap;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initCaciqueMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => setError(true);
    document.head.appendChild(script);

    return () => {
      window.initCaciqueMap = undefined;
    };
  }, [stationsToShow]);

  if (error) {
    return (
      <div className="w-full h-full bg-[#F6F7F9] flex flex-col items-center justify-center gap-4 p-6">
        <MapPin size={48} className="text-[#C8102E]" />
        <div className="text-center">
          <p className="font-bold text-gray-900">Mapa interativo</p>
          <p className="text-sm text-gray-500 mt-1">Configure NEXT_PUBLIC_GOOGLE_MAPS_KEY para ativar</p>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-sm">
          {stationsToShow.map((station) => (
            <a
              key={station.id}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${station.name}, ${station.address}, ${station.city} - ${station.state}, Brasil`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition-all text-sm"
            >
              <MapPin size={16} className="text-[#C8102E]" />
              <div>
                <div className="font-bold text-gray-900">{station.name}</div>
                <div className="text-gray-500 text-xs">{station.city}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full" aria-label="Mapa de postos Cacique" />
      {!mapLoaded && (
        <div className="absolute inset-0 bg-[#F6F7F9] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#C8102E] border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-gray-500">Carregando mapa...</span>
          </div>
        </div>
      )}
    </div>
  );
}
