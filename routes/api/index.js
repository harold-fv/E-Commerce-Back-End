// Import Express router
const router = require('express').Router();

// Import route handlers for categories, products, and tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Set up routes for categories, products, and tags with their respective route handlers
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Export the router to be used in other parts of the application
module.exports = router;