class User {
  static create({ name, age, gender }) {
    return {
      name,
      age,
      gender,
    };
  }
}

export { User };
