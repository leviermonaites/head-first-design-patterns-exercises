import King from "./chars/King.ts";
import Queen from "./chars/Queen.ts";
import Knight from "./chars/Knight.ts";
import Troll from "./chars/Troll.ts";

import SwordBehavior from "./weapons/SwordBehavior.ts";
import BowAndArrowBehavior from "./weapons/BowAndArrowBehavior.ts";
import AxeBehavior from "./weapons/AxeBehavior.ts";
import KnifeBehavior from "./weapons/KnifeBehavior.ts";

const king = new King(new SwordBehavior());
const queen = new Queen(new BowAndArrowBehavior());
const knight = new Knight(new SwordBehavior());
const troll = new Troll(new AxeBehavior());

king.fight();
queen.fight();
knight.fight();
troll.fight();

king.setWeapon(new KnifeBehavior());
king.fight();
