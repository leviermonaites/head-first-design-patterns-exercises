import King from "./chars/King.js";
import Queen from "./chars/Queen.js";
import Knight from "./chars/Knight.js";
import Troll from "./chars/Troll.js";

import SwordBehavior from "./weapons/SwordBehavior.js";
import BowAndArrowBehavior from "./weapons/BowAndArrowBehavior.js";
import AxeBehavior from "./weapons/AxeBehavior.js";
import KnifeBehavior from "./weapons/KnifeBehavior.js";

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
