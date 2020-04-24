const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

async function sendDispatchEvent(repository, event_type, client_payload, token) {
    console.log("Repository: " + repository);
    console.log("Event Type: " + event_type);
    console.log("Client Payload: " + client_payload);

    let url = `https://api.github.com/repos/${repository}/dispatches`;

    const headers = {
        "Accept": "application/vnd.github.everest-preview+json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const body = {
        "event_type": event_type,
        "client_payload": (client_payload && client_payload !== "") ? JSON.parse(client_payload) : {}
    };

    const config = {
        headers: headers
    };

    console.log(`POST: ${url}, Body: ${JSON.stringify(body)}`);
    await axios.post(url, body, config);
}

async function run() {
    try {
        const repository = core.getInput('repository');
        const eventType = core.getInput('event-type');
        const clientPayload = core.getInput('client-payload');
        const token = core.getInput('token');

        await sendDispatchEvent(repository, eventType, clientPayload, token);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
