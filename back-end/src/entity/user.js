// exports user model
const User = (sequelize, DataTypes) => {
  // define user model
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'first name is required',
        },
        notEmpty: {
          args: [true],
          msg: 'first name is required',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'last name is required',
        },
        notEmpty: {
          args: [true],
          msg: 'last name is required',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'email is required',
        },
        notEmpty: {
          args: [true],
          msg: 'email is required',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'password is required',
        },
        notEmpty: {
          args: [true],
          msg: 'password is required',
        },
      },
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'street is required',
        },
        notEmpty: {
          args: [true],
          msg: 'street is required',
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isEmployer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'isEmployer is required',
        },
        notEmpty: {
          args: [true],
          msg: 'isEmployer is required',
        },
      },
    },
  });
};

export default User;
