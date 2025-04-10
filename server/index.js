const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const taskType = "Code Review";


app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  credentials: true,
}));

app.use(express.json({}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


async function sendCodeTask({ taskType, language, code }) {
    const HF_API_TOKEN = 'YOUR_HUGGINGFACE_API_KEY'; // Replace with env-secured token
  
    const tasks = {
      "Code Review": `You are an experienced software engineer tasked with performing an in-depth code review. Below is a code snippet. Your task is to:
  
  1. **Explain the overall functionality** of the code, including its purpose and high-level workflow.
  2. **Describe the role of each variable** defined in the code, and explain how they contribute to the code’s logic.
  3. **Evaluate the code for readability** and clarity, offering suggestions for improving variable names, logic flow, and formatting if necessary.
  4. **Identify potential issues** related to performance, scalability, or maintainability, and suggest any improvements.
  
  Provide detailed explanations and, if applicable, recommend better coding practices or patterns to improve the code's overall quality.`,
      "Bug Detection": `You are given a code snippet that may contain a bug. Your task is to:
  
  1. **Carefully examine the code** to detect any issues, errors, or bugs that might cause the code to fail or produce incorrect results.
  2. **Identify the type of bug** present (e.g., syntax error, logical error, runtime exception, etc.), and explain why this is a bug.
  3. **Provide a clear explanation** of the steps to fix the bug and the rationale behind the solution.
  4. **If applicable**, suggest preventive measures or best practices to avoid similar bugs in the future.
  
  Focus on ensuring the code is correct, robust, and works as intended under all expected scenarios.`,
      "Code Correction": `You are given a code snippet that can be improved. Your task is to:
  
  1. **Review the code for potential improvements** in terms of performance, readability, and maintainability.
  2. **Detect any bugs** present in the code, and suggest fixes for them. If there are multiple bugs, identify and address each one.
  3. **Optimize the code** for better performance, such as improving efficiency, reducing complexity, or enhancing clarity.
  4. **Add detailed docstrings** to all functions, methods, and classes, explaining their purpose, parameters, return values, and any important logic.
  5. **Refactor the code** to follow best practices and improve its structure, making it easier to understand, maintain, and extend.
  
  Provide a better version of the code that incorporates these improvements, ensuring it is well-documented, clean, and free of errors.`,
    };
  
    const taskPrompt = tasks[taskType];
  
    const finalPrompt = `
  You are a senior software engineer and experienced code reviewer.
  ${taskPrompt}
  
  Language: ${language}
  
  Code:
  <code>
  \`\`\`${language}
  ${code}
  \`\`\`
  </code>
  
  The answer is:
  `;
  
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${HF_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: finalPrompt,
            parameters: {
              max_new_tokens: 512,
              temperature: 0.7,
              top_p: 0.95,
              repetition_penalty: 1.1,
            },
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const result = await response.json();
      return result?.generated_text || result?.[0]?.generated_text || 'No response from model.';
    } catch (error) {
      console.error('Error sending prompt:', error);
      return 'An error occurred while processing your request.';
    }
  }
  

  app.post('/', async (req, res) => {
    const { language, code } = req.body;

    if (!code || !language) {
        return res.status(400).json({ error: "Language or code not provided" });
    }

    console.log("Received code:", code);

    try {
        const text = await sendCodeTask({ taskType, language, code });
        return res.status(200).json({ result: text }); // Send response with 'result' key
    } catch (error) {
        console.error("Error processing request:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`);
});