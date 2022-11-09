import type { Transfer } from "@/types/transfers";

export const transfers: Transfer[] = [
  {
    recipientBank: "TBC",
    system: "KoronaPay",
    receiveType: ["Card"],
    receiveCurrency: ["GEL"]
  },
  {
    recipientBank: "TBC",
    system: "Unistream",
    receiveType: ["Card"],
    receiveCurrency: ["USD", "EUR", "GEL"]
  },
  {
    recipientBank: "TBC",
    system: "Contact",
    receiveType: ["Card"],
    receiveCurrency: ["USD", "EUR", "GEL"]
  },
  {
    recipientBank: "Credo",
    system: "KoronaPay",
    receiveType: ["Card", "Cash"],
    receiveCurrency: ["USD", "GEL"]
  },
  {
    recipientBank: "Credo",
    system: "Unistream",
    receiveType: ["Card", "Cash"],
    receiveCurrency: ["USD", "EUR", "GEL"]
  },
  {
    recipientBank: "Credo",
    system: "Contact",
    receiveType: ["Card", "Cash"],
    receiveCurrency: ["USD", "EUR", "GEL"]
  },
  {
    recipientBank: "Bank of Georgia",
    system: "Unistream",
    receiveType: ["Card"],
    receiveCurrency: ["USD", "EUR"]
  },
  {
    recipientBank: "Bank of Georgia",
    system: "Contact",
    receiveType: ["Card"],
    receiveCurrency: ["USD", "EUR"]
  },
  {
    recipientBank: "Liberty",
    system: "KoronaPay",
    receiveType: ["Cash"],
    receiveCurrency: ["GEL"]
  },
  {
    recipientBank: "Cartu",
    system: "KoronaPay",
    receiveType: ["Cash"],
    receiveCurrency: ["USD"]
  },
  {
    recipientBank: "Rico",
    system: "KoronaPay",
    receiveType: ["Cash"],
    receiveCurrency: ["GEL"]
  }
];
