import {Router} from 'express'; 
import { TokenValidation } from '../libs/verifyToken';
import { signin, signup, profile } from '../controllers/auth.controllers';

const router: Router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation, profile);

export default router;