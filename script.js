let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
//API URL
let url = "https://meme-api.com/gimme/";
//Array of subreddits of your choice
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

const getMeme = async () => {
	try {
		const random =subreddits[Math.floor(Math.random() * subreddits.length)];

		const response = await fetch(url + random);
		if (!response.ok)
			throw new Error(`HTTP error! Status: ${response.status}`);
		let data = await response.json();
		/* 
        Khi gán giá trị data.url cho thuộc tính src 
        của memeImg, trình duyệt sẽ bắt đầu tải hình ảnh từ 
        URL đó
        Khi hình ảnh được tải xong, sự kiện onload sẽ được 
        kích hoạt, và bên trong onload, mã sẽ cập nhật hình 
        ảnh trong DOM (meme.src = data.url) và tiêu đề (title.innerHTML = data.title).
        */
		let memeImg = new Image();
		memeImg.src = data.url;
		memeImg.onload = () => {
			  meme.src = data.url;
        title.innerHTML = data.title;
		};
	} catch (error) {
		console.log(error);
	}
};


//Call the getMeme() on button click and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);