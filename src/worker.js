const unidecode = require("unidecode");

onmessage = async (content) => {
	postMessage(unidecode(content.data));
}
