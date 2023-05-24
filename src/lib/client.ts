import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'nil5e2e2',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-05-24',
	token: '',
});
