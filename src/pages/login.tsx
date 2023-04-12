import Head from 'next/head';
import { useForm } from 'react-hook-form';
import sha1 from 'sha1';
import { z } from 'zod';
import { signIn } from 'next-auth/react';

import zodResolver from '~/utils/zodResolver';
import TextInput from '~/components/form/TextInput';
import Button from '~/components/styled/Button';
import Surface from '~/components/styled/Surface';
import Typography from '~/components/styled/Typography';
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
			<Surface
				component="form"
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
				sx={{
					alignSelf: 'center',
					display: 'flex',
					flexDirection: 'column',
					gap: 3,
					px: 6,
					py: 5
				}}
			>
				<Typography variant="h3" color sx={{ textAlign: 'center', mb: 3 }}>
					Log in
				</Typography>

				<TextInput {...register('username')} placeholder="Username" />
				<TextInput
					{...register('password')}
					placeholder="Password"
					type="password"
				/>

				{errors.root && (
					<Typography sx={{ color: 'red' }}>{errors.root.message}</Typography>
				)}
				<Button primary sx={{ mt: 4 }} loading={isSubmitting}>
					Login
				</Button>
			</Surface>
		</>
	);
};

Login.centered = true;
Login.rank = AuthRanks.Login;

export default Login;
