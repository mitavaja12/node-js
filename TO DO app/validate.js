const isValid = (req, res, next) => {
    const { taskName, status } = req.body;

    if (taskName && (status === "pending" || status === "in-progress" || status === "completed")) {
        next();
    } else {
        res.send("Invalid data");
    }
};

module.exports = isValid;