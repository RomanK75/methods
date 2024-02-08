export default class Character {
    constructor(name,type,health,level,attack,defense) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;
    }

    levelup() {
        if (this.health > 0 ) {
        this.level += 1;
        this.attack *= 1.2;
        this.defense *= 1.2;
        this.health = 100;
    } else {
        throw "You can't level up while you are dead";
        }
    }

    damage(points) {
        if (this.health > 0) {
        this.health -= points * (1 - this.defense / 100);
        } else {
            throw "You can't damage while you are dead";
        }
    }
}


