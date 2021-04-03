interface Observer {
  state: string;
  update(newState: string): void;
}

export default Observer;