const express = require('express')
const axios = require('axios')
require('dotenv').config();
const { triggerEvent } = require('./aws');

const app = express()

const PORT = 3001

const client = new EventBridgeClient({ region: "REGION" });

const params = {
	Entries: [
		{
			Source: 'run-now-test', // Must match with the source defined in rules
			Detail: '{ "key1": "value1", "key2": "value2" }',
			Resources: ['resource1', 'resource2'],
			DetailType: 'myDetailType',
		},
	],
};
const command = new ActivateEventSourceCommand(params);

app.get("/", async (req, res) => {
	console.log("received");
})

app.listen(PORT, async () => {
  const result = await triggerEvent();
  console.log('Response from event bridge - ', result);
});