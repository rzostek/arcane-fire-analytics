// Index.js for arcane-fire-analytics

// Import the Google Analytics library
const ga = require('google-analytics');

// Initialize Google Analytics with custom options
function initializeAnalytics(trackingId) {
  ga('create', trackingId, 'auto');
}

// Track an event
function trackEvent(category, action, label, value) {
  ga('send', 'event', category, action, label, value);
}

// Track a page view
function trackPageView(path) {
  ga('set', 'page', path);
  ga('send', 'pageview');
}

// Export functions for use in other modules
module.exports = {
  initializeAnalytics,
  trackEvent,
  trackPageView
};
