import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: '',
    email: '',
    password_hash: '',
  });

  return res.json(user);
});

export default routes;
