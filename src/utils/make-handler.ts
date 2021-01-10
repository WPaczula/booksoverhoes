import { RequestHandler } from 'express';

const makeHandler = (handler: RequestHandler): RequestHandler => async (
  req,
  res,
  next
) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    next(error);
  }
};

export default makeHandler;
