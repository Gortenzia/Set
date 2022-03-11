import Team from '../set';
import Character from '../character';

test('Добавение всех персоонажей', () => {
  const team = new Team();
  const char1 = new Character('name', 'Zombie');
  const char2 = new Character('name', 'Undead');
  team.addAll(char1, char2, char2);
  expect(team.members.size).toBe(2);
});

test('Ошибка добавления персоонажа', () => {
  const char = new Character('name', 'Zombie');
  const team = new Team();
  team.add(char);
  expect(() => team.add(char)).toThrow();
});

test('Преобразование в массив', () => {
  const char1 = new Character('name', 'Zombie');
  const char2 = new Character('nameO', 'Undead');
  const team = new Team();
  team.addAll(char1, char2);
  team.toArray();
  expect(team.members).toEqual(new Set([{ name: 'name', type: 'Zombie' }, { name: 'nameO', type: 'Undead' }]));
});
