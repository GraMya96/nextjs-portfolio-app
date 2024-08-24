import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from '@jest/globals';
import { server } from '@/__tests__/msw/server';

// Establish API mocking before all tests. This will intercept all requests
// to any of the paths described in msw/handlers/index.ts.
// This also means that we don't have to worry anymore about API request/response
// in the UI tests. They are now intercepted and mocked automatically, so
// that we can focus on UI elements: are they in the DOM and using the correct data
// after the API response?

// In this case, when we are dealing with API calls using React Testing Library,
// the best way to select elements in the DOM is to use the
// async `findByRole` query.
// const asyncHeading = await findByRole('heading');
// expect(asyncHeading).toHaveTextContent('Heading');

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
