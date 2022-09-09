const input = document.getElementsByTagName("input")[0];
const worker = new Worker(new URL('worker.js', import.meta.url), { type: 'module' });

worker.onmessage = (output) => {
	const progressBar = document.getElementById("progress");
	if (progressBar !== null) {
		progressBar.remove();
	}
	if (input.files.length === 0) {
		return;
	}
	const file = input.files[0];
	let anchor = document.createElement("a");
	anchor.id = "downloadAnchor";
	anchor.href = URL.createObjectURL(new Blob([output.data], { type: file.type }));
	anchor.download = file.name;
	anchor.innerText = "Download output";
	insertAfter(input, anchor);
}

input.addEventListener("change", async (_) => {
	let anchor = document.getElementById("downloadAnchor");
	if (anchor !== null) {
		anchor.remove();
	}
	if (input.files.length === 0) {
		return;
	}
	const file = input.files[0];
	worker.postMessage(await readFile(file));
});

function readFile(file) {
	return new Promise((resolve, _reject) => {
		let progressBar = document.createElement("span");
		progressBar.id = "progress";
		insertAfter(input, progressBar);

		const reader = new FileReader();
		reader.addEventListener('load', (event) => {
			progressBar.innerHTML = "Processing...";
			resolve(event.target.result);
		});

		reader.addEventListener('progress', (event) => {
			if (event.loaded && event.total) {
				const percent = (event.loaded / event.total) * 100;
				progressBar.innerHTML = `Uploaded ${Math.round(percent)}%`;
			}
		});
		reader.readAsText(file);
	});
}

// src: https://stackoverflow.com/a/4793630/6798201
function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
