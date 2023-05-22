var layoutSelector = 'body';

/**
 * Inicializálja az oldal HTML tartalmát
 * */
function initLayout() {
	$(layoutSelector).html(`
		<nav></nav>
		<main></main>
	`);
}

/**
 * Betölt egy HTML oldalt és megjeleníti azt
 */
function loadPage(url) {
	return new Promise(resolve => {
		$.get({
			url: url,
			success: (html) => {
				$(layoutSelector + '>main').html(html);
			},
			error: () => {
				$(layoutSelector + '>main').html(`Hiba történt az oldal betöltődése során!`);
			},
			finally: resolve
		});
	});
}
