import type { Transfer } from "@/types/transfers";

const koronaPay: readonly Transfer[] = [
  {
    transferSystem: "KoronaPay",
    receiveType: "Card",
    receiveCurrency: "GEL",
    recipientBank: [
      "Bank of Georgia",
      "BasisBank",
      "Credo",
      "TBC"
    ]
  },
  {
    transferSystem: "KoronaPay",
    receiveType: "Card",
    receiveCurrency: "USD",
    recipientBank: [
      "Bank of Georgia",
      "Credo",
      "TBC"
    ]
  },
  {
    transferSystem: "KoronaPay",
    receiveType: "Cash",
    receiveCurrency: "GEL",
    recipientBank: [
      "Bank of Georgia",
      "BasisBank",
      "Credo",
      "Crystal",
      "Halyk Bank",
      "Intel Express",
      "Liberty",
      "Rico Credit",
      "Terabank"
    ]
  },
  {
    transferSystem: "KoronaPay",
    receiveType: "Cash",
    receiveCurrency: "USD",
    recipientBank: [
      "CartuBank",
      "Credo",
      "Liberty",
      "Rico Credit"
    ]
  },
  {
    transferSystem: "МТС",
    receiveType: "Card",
    receiveCurrency: "GEL",
    recipientBank: [
      "Bank of Georgia",
      "BasisBank",
      "CartuBank",
      "Credo",
      "Crystal",
      "Halyk Bank",
      "Intel Express",
      "Liberty",
      "Rico Credit",
      "TBC",
      "Terabank"
    ]
  },
  {
    transferSystem: "Сбер",
    receiveType: "Card",
    receiveCurrency: "GEL",
    recipientBank: [
      "Bank of Georgia",
      "BasisBank",
      "CartuBank",
      "Credo",
      "Crystal",
      "Halyk Bank",
      "Intel Express",
      "Liberty",
      "Rico Credit",
      "TBC",
      "Terabank"
    ]
  }
];
export default [...koronaPay];
