import logger from 'electron-log/main'

logger.transports.file.format = '{y}-{m}-{d} {h}:{i}:{s} [{level}]{scope} {text}'
logger.transports.file.fileName = 'quick-main.log'
logger.transports.file.maxSize = 1024 * 1024 * 5
logger.transports.console.useStyles = true
logger.transports.console.format = '\x1B[32m{y}-{m}-{d} {h}:{i}:{s} [\x1B[35m{level}\x1B[0m] {text}'

export default logger
