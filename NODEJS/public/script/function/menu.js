/**
 * Betölti a menü HTML tartalmát, és csatolja hozzá az eventhandler-t
 * */
function loadMenu() {
	return new Promise(resolve => {
		$.get({
			url: 'menu.html',
			success: (html) => {
				$(layoutSelector + '>nav').html(html);
				bindMenuEvents();
				resolve();
			}
		});
	});
}

/**
 * A menü gombok kattintását kezeli le
 * */
function bindMenuEvents() {
	$(layoutSelector + '>nav').click(e => {
		e.preventDefault();
		if ($(e.target).hasClass('nav-link') && $(e.target).attr('href')) {
			loadPage($(e.target).attr('href'));
		}
	});
}

/**
 * Lehetséges menü állapotok, tartalmukkal
 * */
const menuStates = {
	guest: [
		{
			label: 'Kezdőlap',
			href: 'home.html'
		},
		{
			label: 'Bejelentkezés',
			href: 'login.html'
		},
		{
			label: 'Regisztráció',
			href: 'register.html'
		}

	],
	user: [
		{
			label: 'Kezdőlap',
			href: 'userhome.html'
		},
		{
			label: 'Kijelentkezés',
			href: 'logout.html'
		}

	]
};

/**
 * Frissíti a menü tartalmát, a megadott állapot serint
 * */
function setMenuState(state) {
	if (!menuStates.hasOwnProperty(state)) {
		throw new Error('Invalid menu structure');
	}
	$(layoutSelector + '>nav' + ' .navbar-nav').html('');
	menuStates[state].forEach((menuItem) => {
		$(layoutSelector + '>nav' + ' .navbar-nav').append(`<li class="nav-item">
			<a class="nav-link" href="${menuItem.href}">${menuItem.label}</a>
		</li>`);
	});
}
