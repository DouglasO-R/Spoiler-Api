import { app } from "./src/App";


app.listen(global.port,() => {
    logger.info(`started at port ${global.port}`);
});

