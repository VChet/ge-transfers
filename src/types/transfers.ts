export type GeorgianBank = |
  "Bank of Georgia" |
  "BasisBank" |
  "CartuBank" |
  "Credo" |
  "Crystal" |
  "Halyk Bank" |
  "Intel Express" |
  "Liberty" |
  "Rico Credit" |
  "TBC" |
  "Terabank";
export type TransferSystem = "KoronaPay" | "МТС" | "Сбер";
export type ReceiveType = "Card" | "Cash";
export type ReceiveCurrency = "GEL" | "USD" | "EUR";

export interface Transfer {
  recipientBank: GeorgianBank[]
  transferSystem: TransferSystem
  receiveType: ReceiveType
  receiveCurrency: ReceiveCurrency
  id?: string
}

export interface FilterValues {
  recipientBank: GeorgianBank | ""
  transferSystem: TransferSystem | ""
  receiveType: ReceiveType | ""
  receiveCurrency: ReceiveCurrency | ""
}
