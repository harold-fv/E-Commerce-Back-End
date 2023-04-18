// Import Express router
const router = require('express').Router();

// Import API routes
const apiRoutes = require('./api');

// Set up the main API route with the imported API routes
router.use('/api', apiRoutes);

// Handle requests for non-existent routes
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router to be used in other parts of the application
module.exports = router;

