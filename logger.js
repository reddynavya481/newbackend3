/*
 *  Application Logger.
 *
 *  Docs: https://github.com/winstonjs/winston
 *
 *  @example
 *
 *  const logger = require('./lib/logger')
 *
 *  logger.info('info message')
 *  logger.warn('warn message')
 *  logger.error(err)
 *  logger.info({ person_id: 1, action: "create"})
 */
const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${JSON.stringify(info.message)}`
        })
    )
})
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    logger.add(new winston.transports.Console())
} else {
    // Log rotater
    const logFileTransport = new DailyRotateFile({
        filename: `logs/cl-${process.env.NODE_ENV || 'dev'}-%DATE%.log`,
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '7d'
    })
    logger.add(logFileTransport)
}
module.exports = logger