import { redis } from "@/utils/redisClient";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Alowed`);
    }
    const { command, key, value, expire } = await req.body;
    if (!command) {
      return res.status(400).json({
        message: "command not provided!",
        data: { command, key, value },
      });
    }
    if (!key) {
      console.log("key not provided!", key);
      return res.status(400).json({ message: "key not provided!" });
    }
    if (command === "set" && !value && !expire) {
      return res.status(400).json({
        message: "value and expire not provided for set command!",
        data: { command, key, value, expire },
      });
    }
    let result;
    switch (command) {
      case "get":
        result = await redis.get(key);
        break;
      case "set":
        result = await redis.set(key, value, "EX", expire);
        break;
      case "del":
        result = await redis.del(key);
        break;
      case "exists":
        result = await redis.exists(key);
        break;
      default:
        return res.status(400).json({ error: "Command not correct" });
    }
    // console.log("result:", result);
    return res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
