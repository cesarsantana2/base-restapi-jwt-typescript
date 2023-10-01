import {Router} from 'express'; 
import { TokenValidation } from '../libs/verifyToken';
import { signin, signup, profile, validate } from '../controllers/auth.controllers';

const router: Router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/validate', TokenValidation, validate)
router.get('/profile', TokenValidation, profile);

export default router;