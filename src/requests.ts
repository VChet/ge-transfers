import ky from "ky";
import { useMemoize } from "@vueuse/core";

import type { FeedbackRequest, ReceiveCurrency, Transfer } from "@/types/transfers";
import type { UnistreamResponse } from "@/types/rates";

const host = "https://ge-transfers.azurewebsites.net";

export async function fetchTransfers() {
  const json: Transfer[] = await ky.get(`${host}/TransferMethods`).json();
  return json;
}

export async function sendMethodFeedback(payload: FeedbackRequest) {
  const json = await ky.post(`${host}/TransferMethods/PostFeedback`, { json: payload, credentials: "include" }).json();
  return json;
}

export const UnistreamRate = useMemoize(async (currency: ReceiveCurrency) => {
  const url = new URL("https://online.unistream.ru/card2cash/calculate");
  url.search = new URLSearchParams({
    destination: "GEO",
    amount: "1000",
    currency,
    accepted_currency: "RUB",
    profile: "unistream_front"
  }).toString();
  const json: UnistreamResponse = await ky.get(url).json();
  return json.fees[0].rate;
});
