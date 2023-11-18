import type { Transfer } from "@/types/transfers";

const koronaPay: Transfer[] = [
  { recipientBank: "TBC", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "USD" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Liberty", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Cartu", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "Rico", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" }
];
const contact: Transfer[] = [
  { recipientBank: "TBC", transferSystem: "Contact", receiveType: "Card", receiveCurrency: "USD" },
  { recipientBank: "TBC", transferSystem: "Contact", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "Credo", transferSystem: "Contact", receiveType: "Card", receiveCurrency: "USD" },
  { recipientBank: "Credo", transferSystem: "Contact", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "Credo", transferSystem: "Contact", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "Credo", transferSystem: "Contact", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Bank of Georgia", transferSystem: "Contact", receiveType: "Card", receiveCurrency: "USD" }
];

export default [...koronaPay, ...contact];
