import { Router } from "express";
import {NewProducts, getproduct} from "../controlles/Produc.Control";
const router = Router();

router.get('./netlify/function/server', getproduct );

router.post('/products', NewProducts );

router.get('/products',  );

router.delete('/products',  );

router.put('/products',  );

export default router;
