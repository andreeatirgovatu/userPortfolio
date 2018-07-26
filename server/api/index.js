import { Router } from 'express';
import friendRoutes from './friend/friendRoutes';
import userRoutes from './user/userRoutes';
import authRoutes from '../auth/routes';
import portfolioRoutes from './portfolio/portfolioRoutes';
import paypalRoutes from './paypal/paypalRoutes';

const router = Router();

router.use('/friends', friendRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/paypal', paypalRoutes);

export default router;
