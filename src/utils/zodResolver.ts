import { type Resolver, type FieldValues } from 'react-hook-form';
import type { z } from 'zod';

const zodResolver =
	<T extends FieldValues>(schema: z.ZodSchema<T>): Resolver<T> =>
	async values => {
		console.log(values);

		const result = await schema.safeParseAsync(values);
		return {
			values: result.success ? result.data : {},
			errors: result.success ? {} : result.error
		};
	};

export default zodResolver;
