import Head from 'next/head';
import { useForm } from 'react-hook-form';
import sha1 from 'sha1';
import { z } from 'zod';
import { signIn } from 'next-auth/react';

import zodResolver from '~/utils/zodResolver';
import TextInput from '~/components/form/TextInput';
import Button from '~/components/styled/Button';
import { AuthRanks } from '~/types';

import type { ExtendedNextPage } from './_app';

const Login: ExtendedNextPage = () => {
	const {
		handleSubmit,
		register,
		setError,
		formState: { isSubmitting, errors }
	} = useForm({
		resolver: zodResolver(
			z.object({
				username: z.string().min(1),
				password: z
					.string()
					.min(1)
					.transform(v => sha1(v))
			})
		)
	});

	// TODO: Error handling
	console.log({ errors });

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<form
				onSubmit={handleSubmit(async values => {
					try {
						const res = await signIn('credentials', {
							...values,
							redirect: false
						});
						console.log(res);

						if (!res?.ok) throw new Error(res?.error);
					} catch (e) {
						setError('root', {
							type: 'custom',
							message:
								e instanceof Error ? e.message : 'Unexpected error occurred'
						});
					}
				})}
				className="tw-surface flex flex-col gap-3 self-center !px-6 !py-5"
			>
				<h3 className="tw-color mb-3 text-center">Log in</h3>

				<TextInput {...register('username')} placeholder="Username" />
				<TextInput
					{...register('password')}
					placeholder="Password"
					type="password"
				/>

				{errors.root && <p className="text-red">{errors.root.message}</p>}
				<Button primary className="mt-4" loading={isSubmitting}>
					Login
				</Button>
			</form>
		</>
	);
};

Login.centered = true;
Login.rank = AuthRanks.Login;

export default Login;
