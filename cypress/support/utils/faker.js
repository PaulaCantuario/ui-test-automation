import { faker } from '@faker-js/faker'

const fakeUser = () => ({
  nome: faker.person.fullName(),
  email: faker.internet.email()
});

export { fakeUser };