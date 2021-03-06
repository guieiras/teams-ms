import User from "../models/User";
import Address from "../models/Address";
import PhoneNumber from "../models/PhoneNumber";

export async function index(_, res) {
  const user = await User.findAll();

  return res.status(200).json(user);
}

export async function show(req, res) {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    include: [
      { model: Address, as: "address" },
      { model: PhoneNumber, as: "phone" },
    ],
  });

  return res.status(200).json(user);
}

export async function create(req, res) {
  const user = req.body;

  const { id, name, username, email } = await User.create(user);

  return res.status(201).json({ id, name, username, email });
}

export async function update(req, res) {
  const { id } = req.params;

  const { address, phone, ...data } = req.body;

  const { id: address_id } = await Address.create(address);

  const { id: phone_id } = await PhoneNumber.create(phone);

  const userData = { ...data, address_id, phone_id };

  await User.update(userData, { where: { id } });

  return res.sendStatus(204);
}

export async function destroy(req, res) {
  const { id } = req.params;

  await User.destroy({ where: { id } });

  return res.sendStatus(204);
}
