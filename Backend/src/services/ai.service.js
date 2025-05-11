const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI(process.env.GOOGLE_GEMINI_KEY);

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "Explain how AI works in a few words",
    });
    console.log(response.text);
}

await main();

async function generateContent(promt) {
    const result = await model.generateContent(promt)
    return result.response.text()

}

module.exports = generateContent