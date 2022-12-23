import ky from "ky";
import { useMemoize } from "@vueuse/core";

import type { FeedbackRequest, ReceiveCurrency, Transfer } from "@/types/transfers";
import type { UnistreamResponse } from "@/types/rates";

const service = ky.create({ timeout: 20000 });

export async function fetchTransfers(): Promise<Transfer[]> {
  return service.get("/api/TransferMethods").json();
}

export async function sendMethodFeedback(json: FeedbackRequest) {
  return service.post("/api/TransferMethods/PostFeedback", { json, credentials: "include" }).json();
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
  const json: UnistreamResponse = await service.get(url).json();
  return json.fees[0].rate;
});
