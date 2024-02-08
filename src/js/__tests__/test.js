import Character from '../main';

test('Character levelup function', () => {
  const character = new Character('Abe', 'man', 100, 1, 1, 1);
  const errorCharacter = new Character('Homer', 'man', 0, 1, 1, 1);
  character.levelup();
  expect(character.level).toBe(2);
  expect(() => errorCharacter.levelup()).toThrow("You can't level up while you are dead");
});

test('Character damage function', () => {
  const character = new Character('Bart', 'man', 100, 1, 1, 10);
  const errorCharacter = new Character('Homer', 'man', 0, 1, 1, 1);
  character.damage(10);
  expect(character.health).toBe(91);
  expect(() => errorCharacter.damage(10)).toThrow("You can't damage while you are dead");
});
