var imageViewer = {
	init: function() {
			$(function() {
				$("#btn-change, img").click(this._changeImage.bind(this));
				$("#btn-slideshow").click(this._slideShow.bind(this)); 
				
				this._changeImage();
			}.bind(this));
	},
	_changeImage: function() {
		var index = Math.floor(Math.random() * (this._images.length - 1)) + 1
		$(".image-viewer img")
			.attr({
				alt: this._images[index].name,
				src: 'images/' + this._images[index].file
			})
	},
	_slideShow: function() {
		$("#btn-slideshow").text(this._isStart ? "슬라이드쇼 중지" : "슬라이드쇼 시작");
		this._isStart = !this._isStart;

		if (this._isStart) {
			clearInterval(this._intervalId);
			return
		}

		this._intervalId = setInterval(this._changeImage.bind(this), 1000)
	},
	_isStart: true,
	_images: [
		{
			name: "국화",
			file: "Chrysanthemum.jpg"
		},
		{
			name: "사막",
			file: "Desert.jpg"
		},
		{
			name: "수국",
			file: "Hydrangeas.jpg"
		},
		{
			name: "해파리",
			file: "Jellyfish.jpg"
		},
		{
			name: "등대",
			file: "Lighthouse.jpg"
		},
		{
			name: "펭귄",
			file: "Penguins.jpg"
		},
		{
			name: "툴립",
			file: "Tulips.jpg"
		}
	]
}