export type GeorgianBanks = "Bank of Georgia" | "TBC" | "Credo" | "Liberty" | "Rico" | "Cartu";
export type TransferSystem = "Contact" | "Unistream" | "KoronaPay";
export type ReceiveType = "Card" | "Cash";
export type ReceiveCurrency = "GEL" | "USD" | "EUR";

export interface Transfer {
  recipientBank: GeorgianBanks;
  system: TransferSystem;
  receiveType: ReceiveType;
  receiveCurrency: ReceiveCurrency;
}

export interface FilterValues {
  recipientBank: GeorgianBanks | "";
  system: TransferSystem | "";
  receiveType: ReceiveType | "";
  receiveCurrency: ReceiveCurrency | "";
}
