const aiService = require("../services/ai.service")

module.exports.getReview = async(req, res) => {
    const prompt = req.body.prompt;


    console.log(prompt)
    if (!prompt) {
        return res.status(411).json({
            msg: "prompt is required"
        })
    }
    const response = await aiService(prompt);

    res.send(response);
}