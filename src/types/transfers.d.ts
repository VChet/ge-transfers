import type { FeedbackVote } from "@/types/transfersEnum";

export type GeorgianBanks = "Bank of Georgia" | "TBC" | "Credo" | "Liberty" | "Rico" | "Cartu";
export type TransferSystem = "Contact" | "Unistream" | "KoronaPay";
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
}

export interface FilterValues {
  recipientBank: GeorgianBanks | "";
  transferSystem: TransferSystem | "";
  receiveType: ReceiveType | "";
  receiveCurrency: ReceiveCurrency | "";
}

export interface FeedbackRequest {
  methodId: string;
  comment: string | null;
  vote: FeedbackVote;
}
