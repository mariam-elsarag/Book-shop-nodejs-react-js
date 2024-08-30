const User = require("../Models/User-model");

deleteInactiveUsers = async () => {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 30);
  try {
    const result = await User.deleteMany({ deActiveTime: { $lt: tenDaysAgo } });
    console.log(`Deleted ${result.deletedCount} inactive users.`);
  } catch (error) {
    console.error("Error deleting inactive users:", error);
  }
};

module.exports = deleteInactiveUsers;
