// exports job model
module.exports = (sequelize, DataTypes) => {
  // define job model
  sequelize.define('Job', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'title is required',
        },
        notEmpty: {
          args: [true],
          msg: 'title is required',
        },
      },
    },
    paymentRate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'paymentRate is required',
        },
        notEmpty: {
          args: [true],
          msg: 'paymentRate is required',
        },
      },
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'duration is required',
        },
        notEmpty: {
          args: [true],
          msg: 'duration is required',
        },
      },
    },
    employerID: {},
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'description is required',
        },
        notEmpty: {
          args: [true],
          msg: 'description is required',
        },
      },
    },
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'dateTime is required',
        },
        notEmpty: {
          args: [true],
          msg: 'dateTime is required',
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Filled',
      validate: {
        notNull: {
          args: [true],
          msg: 'status is required',
        },
        notEmpty: {
          args: [true],
          msg: 'status is required',
        },
      },
    },
    jobReview: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'jobReview is required',
        },
        notEmpty: {
          args: [true],
          msg: 'jobReview is required',
        },
      },
    },
  });
};
