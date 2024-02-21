export type GeorgianBanks = |
  "Bank of Georgia" |
  "TBC" |
  "Credo" |
  "Liberty" |
  "Rico Credit" |
  "CartuBank" |
  "BasisBank" |
  "Halyk Bank";
export type TransferSystem = "KoronaPay";
export type ReceiveType = "Card" | "Cash";
export type ReceiveCurrency = "GEL" | "USD" | "EUR";

export interface Transfer {
  id?: string;
  recipientBank: GeorgianBanks;
  transferSystem: TransferSystem;
  receiveType: ReceiveType;
  receiveCurrency: ReceiveCurrency;
  upVotes?: number;
  downVotes?: number;
  rating?: number;
}

export interface FilterValues {
  recipientBank: GeorgianBanks | "";
  transferSystem: TransferSystem | "";
  receiveType: ReceiveType | "";
  receiveCurrency: ReceiveCurrency | "";
}
