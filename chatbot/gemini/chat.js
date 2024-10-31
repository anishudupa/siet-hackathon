import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
})

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
}

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    {
                        text: 'you are talking to a person in agriculture who might ask you to do operations like buy or sell or request a service. \n\nyou have to first respond to the user what you are doing. for example, if he says buy 5 units of rice, you say "Placing order for 5 units of rice" and anything along those lines which is suitable. after that in the same response, at the end, place the command\n\n dont leave any response blank. Respond with some message, so that user knows that you have accepted his promt\nthere are 4 types of services/products. crops, transport, storage, land. when you want to check for products or services available, for example crops,  you respond ":query:/crops/available" and we will send you a list in json format. \n\nby using that, you have to prepare a response for the user and use format ":userresponse: the response here"\n\nif the user asks to place an order, use format ":placeorder: {..details.., "quantity": 4}"\n\nuser can also ask you to post something he is willing to sell, use format ":sell: {..detail.., "quantiy": n, "price per quantity":  rs. x}"\n\nuser can also ask that if any transporters are available to sell his crops,you should ask where to deliver too use format like "porter: {"name", "ratings", "charge/km", ...details}\n\nuser also expects feedback, use format like "review: {"orderId": id, "from user": "his name", "ratings": n, etc}',
                    },
                    { text: "i want to buy rice" },
                ],
            },
            {
                role: "model",
                parts: [{ text: ":query:/crops/available \n" }],
            },
            {
                role: "user",
                parts: [
                    { text: "[]" },
                    { text: "[]" },
                    {
                        text: '[\n{"seller": "jagdish", "quantity available": 9}\n]',
                    },
                ],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ":userresponse: I have found one seller, Jagdish, who has 9 units of rice available. Would you like to contact them? \n",
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "i want to buy \n" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ':placeorder: {"product": "rice", "seller": "jagdish", "quantity": 4} \n',
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "i want to buy 5\n" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ":userresponse: I can place an order for 5 units of rice.  Would you like me to proceed? \n",
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "yes\n" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ':placeorder: {"product": "rice", "seller": "jagdish", "quantity": 5} \n',
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "i want to sell rice" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ":userresponse:  Please tell me how much rice you have available and your desired price per unit.  I can help you list your offering. \n",
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "per unit 80 no. of units 5" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ':sell: {"product": "rice", "quantity": 5, "price per quantity": "rs. 80"} \n',
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "i want to transport now" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ":userresponse:  To find a transporter, please tell me where you need to transport your goods. I will then check for available transporters and provide you with options. \n",
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "banglore" }],
            },
            {
                role: "model",
                parts: [{ text: ":" }],
            },
            {
                role: "user",
                parts: [{ text: "to y" }],
            },
            {
                role: "model",
                parts: [{ text: ":query:/transports/ \n" }],
            },
            {
                role: "user",
                parts: [{ text: "did my product reach?" }],
            },
            {
                role: "model",
                parts: [
                    {
                        text: ":userresponse:  Please provide the order details or order ID so I can check the status of your delivery. \n\n\n",
                    },
                ],
            },
            {
                role: "user",
                parts: [{ text: "order id 123" }],
            },
            {
                role: "model",
                parts: [{ text: ":query:/orders/details \n\n\n" }],
            },
        ],
    })

    const result = await chatSession.sendMessage(prompt)
    const response = result.response.text()
    return response
}

export { run }
