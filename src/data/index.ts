/**
 * MOCK DATA INDEX
 * 
 * This file re-exports all mock data from individual modules.
 * Import from here for convenience:
 * 
 * import { notificationPreviews, events, seaRoutes } from '@/data';
 * 
 * Or import from specific modules for better tree-shaking:
 * 
 * import { notificationPreviews } from '@/data/notifications';
 */

// Notifications
export * from './notifications';

// Events
export * from './events';

// Transport (sea & land)
export * from './transport';

// Directory & contacts
export * from './directory';

// Wine tourism
export * from './wine';

// Geopark (flora, fauna, nature)
export * from './geopark';

// Utilities (water, waste, vet)
export * from './utilities';

// Safety (hiking, sailing)
export * from './safety';
