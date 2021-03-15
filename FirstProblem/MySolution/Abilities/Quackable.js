class Quackable {
  constructor(quackType) {
    return () => console.log(quackType);
  }
}

export default Quackable;
