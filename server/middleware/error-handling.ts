import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = res.statusCode;

  statusCode = statusCode >= 400 ? statusCode : 500;

  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
  });
};
