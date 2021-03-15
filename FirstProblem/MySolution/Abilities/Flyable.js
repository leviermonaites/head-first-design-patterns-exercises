class Flyable {
  constructor(height = 13000, message = `Flying at ${height} feet`) {
    return () => message;
  }
}

export default Flyable;
