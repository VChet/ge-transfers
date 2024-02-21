import type { Transfer } from "@/types/transfers";

const koronaPay: Transfer[] = [
  { recipientBank: "Bank of Georgia", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "Bank of Georgia", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "USD" },
  { recipientBank: "Bank of Georgia", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "BasisBank", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "BasisBank", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "CartuBank", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "USD" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Credo", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "Halyk Bank", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Liberty", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Liberty", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "Rico Credit", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "GEL" },
  { recipientBank: "Rico Credit", transferSystem: "KoronaPay", receiveType: "Cash", receiveCurrency: "USD" },
  { recipientBank: "TBC", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "GEL" },
  { recipientBank: "TBC", transferSystem: "KoronaPay", receiveType: "Card", receiveCurrency: "USD" }
];

export default [...koronaPay];
