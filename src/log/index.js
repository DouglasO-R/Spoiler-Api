import winston from "winston";

const { combine, timestamp, label, printf} = winston.format;

const myformat = printf(({ level, message,timestamp,label }) =>`${timestamp} : [${label}] : ${level} : ${message}`);

const log = winston.createLogger({
    level:'silly',
    transports:[
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename:'src/log/log-api'})
    ],
    format:combine(
        label({label:'log-api'}),
        timestamp(),
        myformat
    )
});

export default log;