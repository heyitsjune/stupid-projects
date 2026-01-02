function cleanse() {
	const grokIsGay = [...document.querySelectorAll("a[href='/grok']")];

	grokIsGay.forEach(link => {
		let node = link;
		let climbs = 0;
		while (node && climbs < 15) {
			if (node.tagName === "ARTICLE") {
				if (node.tabIndex == -1) {
					window.alert("You're on a slop tweet! redirecting...")
					window.location.href = window.location.hostname;
				}
				console.log("Deleted slop");
				node.remove();
				break;
			}

			node = node.parentElement;
			climbs++;
		}
	});

}

setInterval(cleanse, 1000)
