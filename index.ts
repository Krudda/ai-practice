import { apiRequest } from './apiRequest'

const userQuestion = 'Provide me advise what exercises should I do for my back pain?';

async function main() {
    const response = await apiRequest(userQuestion);
    console.log(response);
};

main();
