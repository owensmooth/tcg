module.exports = (sequelize, Types) => {
  return sequelize.define('card', {
    card_id: {
      type: Types.INTEGER
    },
    name: {
      type: Types.STRING
    }
  }, {
    timestamps: false
  });
};
