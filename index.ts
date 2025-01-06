import { apiRequest } from './apiRequest'

const context = "You are a health coach and fitness trainer.";
const userQuestion = "Provide me advise what exercises should I do for my back pain?";

async function main() {
    const response = await apiRequest({userQuestion, context});
    console.log(response);
}

main();
