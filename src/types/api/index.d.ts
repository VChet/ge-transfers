import type { FeedbackVote } from "@/types/transfersEnum";

export interface TransferMethod {
  id: string;
  recipientBank: GeorgianBanks;
  transferSystem: TransferSystem;
  receiveType: ReceiveType;
  receiveCurrency: ReceiveCurrency;
  upVotes: number;
  downVotes: number;
}

export type TransferMethodsResponse = TransferMethod[];

export interface PostFeedBackRequest {
  methodId: string;
  comment: string | null;
  vote: FeedbackVote;
}
