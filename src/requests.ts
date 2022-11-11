import ky from "ky";
import type { FeedbackRequest, Transfer } from "@/types/transfers";

const host = "https://ge-transfers.azurewebsites.net";

export async function fetchTransfers() {
  const json: Transfer[] = await ky.get(`${host}/TransferMethods`).json();
  return json;
}

export async function sendMethodFeedback(payload: FeedbackRequest) {
  const json = await ky.post(`${host}/PostFeedback`, { json: payload }).json();
  return json;
}
