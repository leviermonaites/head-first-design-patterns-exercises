import DataStructure from './DataStructure.ts';

interface Notifier {
  performNotify(state: any, observers: DataStructure): void;
}

export default Notifier;