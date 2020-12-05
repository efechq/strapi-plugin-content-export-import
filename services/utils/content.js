const importItemByContentType = async (targetModel, item) => {

  // check if item with id exists
  const existing = await strapi.query(targetModel).find({id: item.id});
  if (existing.length > 0 && item.id) {
    return strapi.query(targetModel).update({
      id: item.id,
    }, item)
  } else {
    return strapi.query(targetModel).create(item);
  }
};

const importSingleType = async (targetModel, item) => {
  const existing = await strapi.query(targetModel).find({});
  if (existing.length > 0) {
    return strapi.query(targetModel).update({
      id: existing[0].id,
    }, item)
  } else {
    return strapi.query(targetModel).create(item);
  }
};

const findAll = (targetModel) => {
  return strapi.query(targetModel).find({});
};

const deleteByIds = (targetModel, ids) => {
  return strapi.query(targetModel).delete({
    id_in: ids
  });
};

module.exports = {
  importItemByContentType,
  findAll,
  deleteByIds,
  importSingleType,
};
