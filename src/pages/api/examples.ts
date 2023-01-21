import { type NextApiRequest, type NextApiResponse } from 'next';

import { worldDb } from '../../server/db/client';

const examples = async (_req: NextApiRequest, res: NextApiResponse) => {
	const examples = await worldDb.area_template.findMany();
	res.status(200).json(examples);
};

export default examples;
