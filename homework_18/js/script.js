

class Song {
	constructor(title, artist) {
		this.title = title;
		this.artist = artist;
		this.listener = new Set();
	}
	howMany(listener) {
		const aldSize = this.listener.size;
		for (let user of listener) {
			this.listener.add(user.toLowerCase());
		}
		return this.listener.size - aldSize;
	}
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.title);
console.log(mountMoose.artist);
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']));
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));


