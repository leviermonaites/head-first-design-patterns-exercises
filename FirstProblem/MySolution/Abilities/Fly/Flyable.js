class Flyable {
  constructor(height = 13000, message = `Flying at ${height} feet`) {
    return () => console.log(message);
  }
}

export default Flyable;
