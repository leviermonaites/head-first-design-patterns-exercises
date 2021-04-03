import Node from "./Node.ts";

interface LinkedList {
  observers: { head: Node | null }
}

export default LinkedList;