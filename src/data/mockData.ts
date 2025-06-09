import { ParkingSpace } from "../types/ParkingSpace";

export const mockParkingSpaces: ParkingSpace[] = [
  {
    id: "1",
    title: "Centralt beliggende parkeringsplads i Aarhus C",
    address: "Åboulevarden 70, 8000 Aarhus C",
    images: [
      "https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    pricePerHour: 25,
    rating: 4.8,
    reviewCount: 42,
    availabilityText: "Hverdage 8:00-17:00",
    features: ["private-driveway"],
    owner: {
      id: "101",
      name: "Mette K.",
      rating: 4.9
    },
    reviews: [
      {
        name: "Lars J.",
        date: "14. maj 2023",
        rating: 5,
        comment: "Perfekt beliggenhed tæt på centrum. Nem at finde og god plads til min bil."
      },
      {
        name: "Sofie P.",
        date: "28. april 2023",
        rating: 5,
        comment: "Super fin parkeringsplads, og Mette var meget hjælpsom. Kan klart anbefales!"
      },
      {
        name: "Thomas H.",
        date: "10. april 2023",
        rating: 4,
        comment: "God plads, lidt svær at finde første gang, men ellers helt fin."
      }
    ],
    description: "Centralt beliggende parkeringsplads tæt på Åboulevarden og gågaden. Pladsen er let tilgængelig og egnet til alle typer personbiler. Perfekt hvis du skal ind til byen og handle eller mødes med venner."
  },
  {
    id: "2",
    title: "Overdækket plads med sikkerhedskamera",
    address: "Frederiks Allé 25, 8000 Aarhus C",
    images: [
      "https://images.pexels.com/photos/3408344/pexels-photo-3408344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    pricePerHour: 30,
    rating: 4.6,
    reviewCount: 17,
    availabilityText: "Alle dage 16:00-08:00",
    features: ["covered", "security", "private-driveway"],
  },
  {
    id: "3",
    title: "Garage med el-lader ved Aarhus Ø",
    address: "Ø-gaden 45, 8000 Aarhus C",
    images: [
      "https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2348359/pexels-photo-2348359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    pricePerHour: 40,
    rating: 4.9,
    reviewCount: 23,
    availabilityText: "Hverdage 9:00-18:00",
    features: ["covered", "ev-charger", "garage"],
  },
  {
    id: "4",
    title: "Parkeringsplads tæt på Aarhus Universitet",
    address: "Nordre Ringgade 3, 8000 Aarhus C",
    images: [
      "https://images.pexels.com/photos/1004403/pexels-photo-1004403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    pricePerHour: 20,
    rating: 4.3,
    reviewCount: 9,
    availabilityText: "Alle dage 10:00-20:00",
    features: ["private-driveway"],
  },
  {
    id: "5",
    title: "Sikker garage nær Aarhus H",
    address: "Banegårdspladsen 9, 8000 Aarhus C",
    images: [
      "https://images.pexels.com/photos/69396/pexels-photo-69396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/236726/pexels-photo-236726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ],
    pricePerHour: 35,
    rating: 4.7,
    reviewCount: 31,
    availabilityText: "Weekender 9:00-21:00",
    features: ["covered", "security", "garage"],
  },
];