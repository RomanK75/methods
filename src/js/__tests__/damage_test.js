import Character from '../main';

test('Character damage function', () => {
    const character = new Character('Bart', 'man', 100, 1, 1, 10);
    const errorCharacter = new Character('Homer', 'man', 0, 1, 1, 1);
    character.damage(10);
    expect(character.health).toBe(91);
    expect(() => errorCharacter.damage(10)).toThrow("You can't damage while you are dead");
  });
  