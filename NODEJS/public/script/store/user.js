var isUserLoggedIn = false;

/**
 * Login kérést küld a backend-nek
 * */
function doLogin(username, password) {
	return new Promise((resolve, reject) => {
		$.post({
			url: '/api/login',
			dataType: 'json',
			data: {
				username: username,
				password: password
			},
			success: (data) => {
				if (data.success === true) {
					isUserLoggedIn = true;
					setMenuState('user');
					resolve();
				} else {
					reject(data.error ?? 'Hiba történt a feldolgozás során!');
				}
			},
			error: () => {
				reject('Hiba történt a feldolgozás során!');
			}
		});
	});
}
function doRegister(username, password) {
	return new Promise((resolve, reject) => {
		$.post({
			url: '/api/register',
			dataType: 'json',
			data: {
				username: username,
				password: password
			},
			success: (data) => {
				if (data.success === true) {
					resolve();
				} else {
					reject(data.error ?? 'Hiba történt a feldolgozás során!');
				}
			},
			error: () => {
				reject('Hiba történt a feldolgozás során!');
			}
		});
	});
}
function doLogout() {
	return new Promise((resolve, reject) => {
		$.post({
			url: '/api/logout',
			dataType: 'json',
			data: {},
			success: (data) => {
				if (data.success === true) {
					isUserLoggedIn = false;
					setMenuState('guest');
					resolve();
				} else {
					reject(data.error ?? 'Hiba történt a feldolgozás során!');
				}
			},
			error: () => {
				reject('Hiba történt a feldolgozás során!');
			}
		});
	});
}
/**
 * Leellenőrzi, hogy van-e bejelentkezett munkamenet
 * */
function checkSession() {
	return new Promise(resolve => {
		$.post({
			url: '/api/checksession',
			dataType: 'json',
			success: (data) => {
				if (data === true) {
					isUserLoggedIn = true;
				}
				resolve(isUserLoggedIn);
			},
			error: () => {
				resolve(isUserLoggedIn);
			}
		});
	});
}

/**
 * Kezdő oldal Vicc random funciók
 * */

let randomContent = {
	id: '',
	title: '',
	content: '',
	created_at: '',
	username: ''
};
let hasJokeInDatabase = false;

function toggleModifyButtons(){
	if(hasJokeInDatabase){
		$('.modifyJoke').removeClass('hidden');
	}else {
		$('.modifyJoke').addClass('hidden');
	}
}
function getJokes() {
}
function getRandomJoke() {
	return new Promise((resolve, reject) => {
		$.get({
			url: '/api/randomJoke',
			dataType: 'json',
			data: {},
			success: (data) => {
				if (data.success === true) {
					if(data.content.length>0) {
						hasJokeInDatabase = true;
						resolve(data.content[0]);
					}else{
						hasJokeInDatabase = false;
						randomContent.id = '';
						randomContent.title = 'Itt a vége fuss el véle...';
						randomContent.content = 'Sajnos nincs több megjeleníthető vicc a portál adatbázisában, ha gondolod hozz létre egy viccet.'
						resolve(randomContent);
					}
				} else {
					reject(data.error ?? 'Hiba történt a feldolgozás során!');
				}
			},
			error: () => {
				reject('Hiba történt a feldolgozás során!');
			}
		});
	});
}
function getJokeById(pid) {
	return new Promise((resolve, reject) => {
		if(pid) {
			$.get({
				url: '/api/jokes/'+pid,
				dataType: 'json',
				success: (data) => {
					if (data.success === true) {
						if(data.content.length>0) {
							hasJokeInDatabase = true;
							resolve(data.content[0]);
						}else{
							hasJokeInDatabase = false;
							randomContent.id = '';
							randomContent.title = 'A keresett vicc nem található';
							randomContent.content = 'Ha gondolod hozz létre egy viccet.'
							resolve(randomContent);
						}
					} else {
						reject(data.error ?? 'Hiba történt a feldolgozás során!');
					}
				},
				error: () => {
					reject('Hiba történt a feldolgozás során!');
				}
			});
		}else{
			reject('A vicc azonosítója nincs megadva, így nem kérdezhető le!');
		}
	});
}
function randomJoke() {
	getRandomJoke().then((content) => {
		$('#alertArea').html('');
		randomContent = content;
	}).catch(errorMsg => {
		$('#alertArea').prepend(`<div class="alert alert-danger col-10 mx-auto" role="alert">
                ${errorMsg ?? 'Hiba történt a feldolgozás során!'}
                <button type="button" class="close" data-dismiss="alert" aria-label="Bezár">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`);
	}).finally(() => {
		$(".joke-header").html(randomContent.title);
		$(".joke-text").html(randomContent.content);
		toggleModifyButtons();
	});
}
function jokeById(id) {
	getJokeById(id).then((content) => {
		$('#alertArea').html('');
		randomContent = content;
	}).catch(errorMsg => {
		$('#alertArea').prepend(`<div class="alert alert-danger col-10 mx-auto" role="alert">
                ${errorMsg ?? 'Hiba történt a feldolgozás során!'}
                <button type="button" class="close" data-dismiss="alert" aria-label="Bezár">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`);
	}).finally(() => {
		$(".joke-header").html(randomContent.title);
		$(".joke-text").html(randomContent.content);
		toggleModifyButtons();
	});
}
function deleteJoke(pid){
	return new Promise((resolve, reject) => {
		if(pid) {
			$.ajax({
				url: '/api/deleteJoke',
				type: 'DELETE',
				dataType: 'json',
				data: {id: pid},
				success: (data) => {
					if (data.success === true) {
						resolve();
					} else {
						reject(data.error ?? 'Hiba történt a feldolgozás során!');
					}
				},
				error: () => {
					reject('Hiba történt a feldolgozás során!');
				}
			});
		}else{
			reject('A vicc azonosítója nincs megadva, így nem törölhető!');
		}
	});
}
function updateJoke(pid,ptitle,pcontent){
	return new Promise((resolve, reject) => {
		if(pid) {
			$.ajax({
				url: '/api/updateJoke',
				type: 'PUT',
				dataType: 'json',
				data: {id: pid,title:ptitle,content:pcontent},
				success: (data) => {
					if (data.success === true) {
						resolve(pid);
					} else {
						reject(data.error ?? 'Hiba történt a feldolgozás során!');
					}
				},
				error: () => {
					reject('Hiba történt a feldolgozás során!');
				}
			});
		}else{
			reject('A vicc azonosítója nincs megadva, így nem szerkeszthető!');
		}
	});
}
function uploadJoke(ptitle,pcontent){
	return new Promise((resolve, reject) => {
		if(ptitle && pcontent) {
			$.post({
				url: '/api/newJoke',
				dataType: 'json',
				data: {title:ptitle,content:pcontent},
				success: (data) => {
					if (data.success === true) {
						resolve(data.content);
					} else {
						reject(data.error ?? 'Hiba történt a feldolgozás során!');
					}
				},
				error: () => {
					reject('Hiba történt a feldolgozás során!');
				}
			});
		}else{
			reject('A cím és vicc megadása szükséges a feltöltéshez!');
		}
	});
}
