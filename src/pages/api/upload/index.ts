import multer from 'multer';

/* This file contains the API routes for the image upload.
    - endpoint: /api/upload

  Using external dependencies (formidable and fs-extra) to handle the file upload
  and its storage locally.
*/

// Configure multer
const upload = multer({ dest: 'public/uploads/' });

export const config = {
	api: {
		bodyParser: false, // Disable body parsing, multer will handle it
	},
};

export default function handler(req: any, res: any) {
	switch (req.method) {
		case 'POST':
			upload.single('file')(req, res, async (err) => {
				if (err) {
					return res.status(500).json({ error: 'Upload failed' });
				}

				const file = req.file;
				res.status(200).json({ success: true, imageUrl: file });
			});
			break;
		default:
			res.status(405).json({ message: 'Method not allowed' });
			break;
	}
}
