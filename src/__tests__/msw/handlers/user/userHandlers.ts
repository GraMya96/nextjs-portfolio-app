import { http } from 'msw';

import { getUserInfoResolver } from './userResolvers';

export const userHandlers = [http.get('/api/user', getUserInfoResolver)];
