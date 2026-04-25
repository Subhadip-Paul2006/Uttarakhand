export type PlaceCategory = "Hidden Gems" | "Most Visited" | "Explorer Trails";

export interface PlaceMarker {
  name: string;
  category: PlaceCategory;
  description: string;
  coordinates: [number, number];
}

export const placeMarkers: PlaceMarker[] = [
  {
    name: "Munsiyari",
    category: "Hidden Gems",
    description: "Raw Panchachuli views and true mountain stillness.",
    coordinates: [30.0676, 80.2381],
  },
  {
    name: "Harsil",
    category: "Hidden Gems",
    description: "Pine forests, river sound, and slow living.",
    coordinates: [31.0375, 78.7446],
  },
  {
    name: "Nainital",
    category: "Most Visited",
    description: "Classic lake town and first-step mountain trip.",
    coordinates: [29.3919, 79.4542],
  },
  {
    name: "Rishikesh",
    category: "Most Visited",
    description: "Yoga, rafting, and restless spiritual energy.",
    coordinates: [30.0869, 78.2676],
  },
  {
    name: "Kedarkantha Trailhead",
    category: "Explorer Trails",
    description: "A confidence-building winter summit route.",
    coordinates: [31.0145, 78.1746],
  },
  {
    name: "Kuari Pass Route",
    category: "Explorer Trails",
    description: "Historic trail with wide Nanda Devi views.",
    coordinates: [30.4596, 79.5677],
  },
];
