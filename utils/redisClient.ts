import Redis from "ioredis";

const redisUrl: string = process.env.REDIS_URL!;

export const redis = new Redis(redisUrl, {
  lazyConnect: true,
  maxRetriesPerRequest: 10,
  connectTimeout: 5000,
});
redis.on("error", (err) => {
  console.error("Redis error:", err);
});
