// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import modelUrl from "../../models/model.json";

export default function handler(req, res) {
  res.status(200).json(modelUrl);
}
