import { User } from '../model/User';

// Criar um novo usuário
export const createUser = async (req: Request, res: Response) => {
	const { email } = req.body;
	try {
		const user = await User.create({ email });
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
};

// Recuperar todos os usuários
export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.findAll();
		res.send(users);
	} catch (error) {
		res.status(400).send(error);
	}
};

// Atualizar um usuário existente
export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { email } = req.body;
	try {
		const user = await User.findByPk(id);
		if (!user) {
			return res.status(404).send('Usuário não encontrado');
		}
		user.email = email;
		await user.save();
		res.send(user);
	} catch (error) {
		res.status(400).send(error);
	}
};

// Excluir um usuário
export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await User.findByPk(id);
		if (!user) {
			return res.status(404).send('Usuário não encontrado');
		}
		await user.destroy();
		res.send('Usuário excluído com sucesso');
	} catch (error) {
		res.status(400).send(error);
	}
};
