export interface UnistreamResponse {
  message: unknown;
  fees: {
    name: string;
    acceptedAmount: number;
    acceptedCurrency: string;
    withdrawAmount: number;
    withdrawCurrency: string;
    rate: number;
    acceptedTotalFee: number;
    acceptedTotalFeeCurrency: string;
  }[];
}
