// const winston=require('winston');


// const logConfiguration={
//     transports:[
//         new winston.transports.Console({
//             level:'info'
//         })
//         //,
//         // new winston.transports.File({
//         //     level:'error',
//         //     filename:'server.log'
//         // })
//     ]
// };

// format:winston.format.combine(
//     winston.format.timestamp({
//         format:'MMM-DD-YYYY HH:mm:ss'
//     }),
//     winston.format.printf(info=>`${info.level}: ${[info.timestamp]}: ${info.message}`)
// )
 

// const logger=winston.createLogger(logConfiguration);

// logger.info("create the logger! ")

// module.exports = logger;


const { createLogger, format, transports } = require('winston');


require('winston-mongodb');

module.exports = createLogger({
transports:[
    new transports.MongoDB({
        level: 'info',
        db : 'mongodb://localhost:27017/logs',
        options: {
            useUnifiedTopology: true
        },
        collection: 'server_logs',
        format: format.combine(
        format.timestamp(),
        format.json())
    })]
});