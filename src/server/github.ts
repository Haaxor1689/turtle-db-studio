import { Octokit } from '@octokit/rest';

import { env } from '~/env.mjs';

const octokit = new Octokit({
	auth: env.GITHUB_TOKEN
});

export default octokit;

export const pushSQLFile = async (name: string, sql: string) => {
	await octokit.rest.repos.createOrUpdateFileContents({
		owner: env.GITHUB_OWNER,
		repo: env.GITHUB_REPO,
		branch: env.GITHUB_BRANCH,
		path: `sql/database_updates/${name}.sql`,
		message: 'Web SQL update',
		content: Buffer.from(sql).toString('base64')
	});
};
