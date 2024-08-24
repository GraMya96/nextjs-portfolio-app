// mocks/handlers/index.js
import { projectHandlers } from './projects/projectHandlers';
import { userHandlers } from './user/userHandlers';

// The root-level request handlers combine
// all the domain-based handlers into a single
// network description array.
export const handlers = [...projectHandlers, ...userHandlers];
