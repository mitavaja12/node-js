
const addFeature = async (req, res) => {
    try {
        const newFeature = new Feature(req.body);
        const savedFeature = await newFeature.save();
        res.status(201).json(savedFeature);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFeatures = async (req, res) => {
    try {
        const features = await Feature.find();
        res.status(200).json(features);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
