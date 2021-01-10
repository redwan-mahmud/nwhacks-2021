import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import db from './entity/index.js';
import router from './routes/index.js';

export const startServer = async () => {
  try {
    // creates the express app
    const app = express();
    const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;

    // setup middlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    // use router for api routes

    app.use('/api', router);

    // send 404 if no other route matched
    app.use((req, res) => {
      res.status(404).json({
        message: 'Route Not Found',
      });
    });

    // setup a global error handler
    // setup a global error handler
    app.use((err, req, res) => {
      res.status(err.status || 500).json({
        error: {
          message: err.message,
        },
      });
    });

    // set port
    app.set('port', port);

    // authenticate db connection, then sync, then start server
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
        return db.sequelize.sync();
      })
      .then(() => {
        const server = app.listen(app.get('port'), () => {
          console.log(
            `Express server is listening on port ${server.address().port}`
          );
        });
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });

    return app;
  } catch (error) {
    console.log(error);
    return error;
  }
};
