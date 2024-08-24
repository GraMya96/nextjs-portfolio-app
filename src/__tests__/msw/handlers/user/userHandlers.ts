import { http, HttpResponse } from 'msw';

export const userHandlers = [
	// Intercept POST request for when we create a post...
	http.post<AddCommentParams, AddCommentRequestBody, AddCommentResponseBody>(
		'http://127.0.0.1:3000/api/user',
		async ({ request, params }) => {
			if (request.method === 'POST') {
				const { name, description } = await request.json();
				return HttpResponse.json<AddCommentResponseBody>(
					`http://127.0.0.1:3000/api/projects`,
					{
						name,
						description,
						id: 1,
					}
				);
			}
		}
	),
];
