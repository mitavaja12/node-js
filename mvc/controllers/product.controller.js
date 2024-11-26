const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).send(product || { message: 'Product not found' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(product || { message: 'Product not found' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).send(product ? { message: 'Product deleted successfully' } : { message: 'Product not found' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
