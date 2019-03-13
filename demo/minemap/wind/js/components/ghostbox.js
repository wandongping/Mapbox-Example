define(["class"], function (c) {
	return c.extend({
		_init: function () {
			this.progressLine.addEventListener("mouseenter", this.onGhostMouseEnter.bind(this)),
				this.progressLine.addEventListener("mouseleave", this.onGhostMouseLeave.bind(this)),
				this.progressLine.addEventListener("mousemove", this.onGhostMouseMove.bind(this))
		},
		onGhostMouseEnter: function () {
			this.ghost.style.opacity = 1
		},
		onGhostMouseLeave: function () {
			this.ghost.style.opacity = 0
		},
		onGhostMouseMove: function (e) {
			this.updateGhost(e)
		}
	})
})