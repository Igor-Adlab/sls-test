import * as winston from "winston";

const { combine, timestamp, prettyPrint } =
  winston.format;

export const createLogger = (serviceName: string) =>
  winston.createLogger({
    level: "debug",
    defaultMeta: { service: serviceName },
    transports: [new winston.transports.Console()],
    format: combine(timestamp(), prettyPrint()),
  });
