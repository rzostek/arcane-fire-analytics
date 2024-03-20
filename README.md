# arcane-fire-analytics

A JavaScript library for integrating Google Analytics into your applications.

## Installation

To install arcane-fire-analytics, use npm:

```bash
npm install arcane-fire-analytics
```

## Usage

```javascript
const { initializeAnalytics, trackEvent, trackPageView } = require('arcane-fire-analytics');

// Initialize Google Analytics
const analytics = initializeAnalytics('YOUR_TRACKING_ID');

// Track an event
trackEvent(analytics, 'category', 'action', 'label', value);

// Track a page view
trackPageView(analytics, '/path');
```

## API

### `initializeAnalytics(trackingId, options)`

Initialize Google Analytics with a tracking ID and custom options.

- `trackingId`: The Google Analytics tracking ID.
- `options` (optional): Additional options for initializing Google Analytics.

### `trackEvent(analytics, category, action, label, value)`

Track an event in Google Analytics.

- `analytics`: The Google Analytics instance returned by `initializeAnalytics`.
- `category`: The category of the event.
- `action`: The action of the event.
- `label`: The label of the event.
- `value`: The value of the event.

### `trackPageView(analytics, path)`

Track a page view in Google Analytics.

- `analytics`: The Google Analytics instance returned by `initializeAnalytics`.
- `path`: The path of the page view.
  ```
