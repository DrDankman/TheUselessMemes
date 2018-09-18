window.onload=function(){

var theuselessweb = document.getElementById("theuselessweb");
var youtube = document.getElementById("youtubetext");
var twitter = document.getElementById("twittertext");
var soundcloud = document.getElementById("soundcloudtext");
var github = document.getElementById("githubtext");
var antalprocent = document.getElementById("antalprocent");
var resetknapp = document.getElementById("reset");

var anotherhtml = document.getElementById("another");
var button = document.getElementById("button");
var antal = 0;

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
var list = [
"https://youtu.be/VNfzAycbHqs",
"https://youtu.be/VCvC4_6zkrs",
"https://youtu.be/apnUtvBMDCI",
"https://youtu.be/MrWI58xofbo",
"https://youtu.be/BI5-oMCqgiM",
"https://youtu.be/RejuAL1ln4w",
"https://youtu.be/bHm54c3b8SI",
"https://youtu.be/yUKcgnchfLU",
"https://youtu.be/6CICHREhv-Y",
"https://youtu.be/RrLJF3bmFJc",
"https://youtu.be/CLDe2BlaR3g",
"https://youtu.be/O_bRPjHZJJ4",
"https://youtu.be/UGn58lRXXus",
"https://youtu.be/R_pkv2Mxn6A",
"https://youtu.be/YA0MUho5txI",
"https://youtu.be/EaoawwUX7dU",
"https://youtu.be/aHDohyneEsQ",
"https://youtu.be/Jtvu9vRiXz8",
"https://youtu.be/v9tgF6ZCKmc",
"https://youtu.be/8yL9H5gznjM",
"https://youtu.be/Mo_hetfs3fY",
"https://youtu.be/oByu8_PsDYg",
"https://youtu.be/5B3MEhNmYvE",
"https://youtu.be/dNn_ewR8oBc",
"https://youtu.be/RUnYYsfc5UQ",
"https://youtu.be/wixxlk_9e80",
"https://youtu.be/sKoXITjbN1E",
"https://youtu.be/hx-xezZZmi4",
"https://youtu.be/CJxLAE-yQj4",
"https://youtu.be/FLCfCQQGAWU",
"https://youtu.be/zGjEA94brRw",
"https://youtu.be/NQIP2uiod6g",
"https://youtu.be/_4-MmsLKRDw",
"https://youtu.be/vuIAfhlIVLU",
"https://youtu.be/0jEd8LAPglU",
"https://youtu.be/_MBgz9h7GGM",
"https://youtu.be/5wJDpzVjcJs",
"https://youtu.be/H-P8VfbYn24",
"https://youtu.be/Na_b_wJZKrw",
"https://youtu.be/6DX62Ub4ry8",
"https://youtu.be/ODf2-sY2Fc4",
"https://youtu.be/0zGno-mSs0c",
"https://youtu.be/HYa3T0a862A",
"https://youtu.be/UWUZ9ot-3jc",
"https://youtu.be/Ke-6WW-xGic",
"https://youtu.be/3bx5pnd77OI",
"https://youtu.be/l1jK-cgYfzo",
"https://youtu.be/oXUMPSjwpFI",
"https://youtu.be/6AjEyfg3f04",
"https://youtu.be/XwXHgCbCxLU",
"https://youtu.be/sP7fslHixVY",
"https://youtu.be/OfcwGPlDEz0",
"https://youtu.be/SckcB099zrg",
"https://youtu.be/7kTg7nqs_S8",
"https://youtu.be/j2b8A-poRFk",
"https://youtu.be/6I7uy_B_xqo",
"https://youtu.be/9v3phndhIvE",
"https://youtu.be/FTIEz0Z2hpU",
"https://youtu.be/iBQRjiAHUX8",
"https://youtu.be/QR0lP22lxG4",
"https://youtu.be/xrvs420WeoI",
"https://youtu.be/BKEL4cUTOI4",
"https://youtu.be/k4sPCOMw2N8",
"https://youtu.be/_jLdA3Tw4nU",
"https://youtu.be/HPjicoMuVZw",
"https://youtu.be/bd_1Bqqfd_o",
"https://youtu.be/JUe0GaScPdY",
"https://youtu.be/Iln6xfwYt8A",
"https://youtu.be/8UHKvshvLZc",
"https://youtu.be/_og10IZNM9o",
"https://youtu.be/4-j6VR6eTro",
"https://youtu.be/rk05sTbt9ss",
"https://youtu.be/D6Vptpml158",
"https://youtu.be/0_wtNwsAF3k",
"https://youtu.be/O0mX84VibIA",
"https://youtu.be/2UVRugz1J98",
"https://youtu.be/RiC1Lj9-QAQ",
"https://youtu.be/l1heD4T8Yco",
"https://youtu.be/LCPoTABRtrc",
"https://youtu.be/D_6kDPk62IY",
"https://youtu.be/qfQ6tVQEGxM",
"https://youtu.be/StDxe7WjfoQ",
"https://youtu.be/gMslUkDaDZA",
"https://youtu.be/gMslUkDaDZA",
"https://youtu.be/FhWtJ2OwZ4A",
"https://youtu.be/YLduYJDnL5c",
"https://youtu.be/52ftnWVLaLQ",
"https://youtu.be/2aXx0D3XbdI",
"https://youtu.be/2KmruNr7ySs",
"https://youtu.be/Mjg9DPmObwg",
"https://youtu.be/7UWf1cjI1y0",
"https://youtu.be/DNFX3Go9jc4",
"https://youtu.be/NVEIYnTLeu8",
"https://youtu.be/kZCyVLxEigU",
"https://youtu.be/_qpfW0SKCQI",
"https://youtu.be/X2ieFd-o4Js",
"https://youtu.be/chsDFYAv5ZE",
"https://youtu.be/gdyp4Ez_T6I",
"https://youtu.be/xzLNsn5S27g",
"https://youtu.be/HspSi4l0yd4",
"https://youtu.be/-lXKAnSEds8",
"https://youtu.be/VLcOTCnetPo",
"https://youtu.be/mbsdFyC0CV4",
"https://youtu.be/VS0chrfgwpc",
"https://youtu.be/UTeNSaGNgAY",
"https://youtu.be/kmqKnEcOxoo",
"https://youtu.be/8ujGHnVCnM8",
"https://youtu.be/5Nj2BngIko0",
"https://youtu.be/odhMmAPDc54",
"https://youtu.be/UCxlziTQKlQ",
"https://youtu.be/QEzhxP-pdos",
"https://youtu.be/Jy-oTtoxyp8",
"https://youtu.be/MSsaWLKfbME",
"https://youtu.be/C-oSa9UxH0g",
"https://youtu.be/CH7tlyvnKLQ",
"https://youtu.be/FibK1154Gjg",
"https://youtu.be/4F0Mer4kDDY",
"https://youtu.be/sHORj5NWqrg",
"https://youtu.be/bWhu0LovWgY",
"https://youtu.be/gpe3nXpnAZc",
"https://youtu.be/c7y6OtKNP4g",
"https://youtu.be/5uCuZ6baBjI",
"https://youtu.be/3L7VJl76i9U",
"https://youtu.be/TDRBYlkyoSc",
"https://youtu.be/MgTVrcRUMig",
"https://youtu.be/gYyDrUdyrhQ",
"https://youtu.be/m8aaoC2hrlc",
"https://youtu.be/WCFvqbSfgqM",
"https://youtu.be/Ul7IE3CTmSs",
"https://youtu.be/6BZb3opmfo8",
"https://youtu.be/1KIKrSG-Xzc",
"https://youtu.be/bS1bRVkc7J4",
"https://youtu.be/QiqqC_fbP1c",
"https://youtu.be/L6NxgpZQqH0",
"https://youtu.be/9aEbI9c1DgA",
"https://youtu.be/t-7mQhSZRgM",
"https://youtu.be/oAjuJzdJ57s",
"https://youtu.be/f0oM5xivl6Y",
"https://youtu.be/TL-MHVBFDd0",
"https://youtu.be/5Nt34_zWwEE",
"https://youtu.be/g6BT9NJ1acs",
"https://youtu.be/MmALnLGKJ4w",
"https://youtu.be/2riqL4GOfR8", 
"https://youtu.be/3pmmtQwUZz0",
"https://youtu.be/UoUEQYjYgf4",
"https://youtu.be/VNfzAycbHqs",
];
var sopkorg = [];
var originalList = list.slice();
var originalLength = list.length;
var procent = Math.floor((antal/originalLength)*1000)/10;

if (localStorage.getItem("antal") > 0) {
	antal = localStorage.getItem("antal");
	procent = Math.floor((antal/originalLength)*1000)/10;
	antalprocent.textContent = procent + "% memes watched  |";
	anotherhtml.textContent = "TO ANOTHER";
	list = JSON.parse(localStorage.getItem("list"));
	console.log(list);
}

button.addEventListener("click", function() {
		if (procent < 100) {
			var i = Math.floor(Math.random()*list.length);
			var link = list[i];
			openInNewTab(link);
			list.splice(i, 1);
			//console.log(list);
			anotherhtml.textContent = "TO ANOTHER";
			antal++;
			procent = Math.floor((antal/originalLength)*1000)/10;
			antalprocent.textContent = procent + "% memes watched  |";

			localStorage.setItem("list", JSON.stringify(list));
			//console.log(JSON.parse(localStorage.getItem("list")));
			localStorage.setItem("antal", antal);
			}
			if (procent > 100) {
				antalprocent.textContent = 100 + "% memes watched  |";
				
			}
		});
theuselessweb.addEventListener("click", function() {
			openInNewTab("https://theuselessweb.com/");
		});
youtube.addEventListener("click", function() {
			openInNewTab("https://www.youtube.com/c/Dankman");
		});
twitter.addEventListener("click", function() {
			openInNewTab("https://twitter.com/DanneDankman");
		});
soundcloud.addEventListener("click", function() {
			openInNewTab("https://soundcloud.com/dankmanyoutube");
		});
github.addEventListener("click", function() {
			openInNewTab("https://github.com/DrDankman");
		});

reset.addEventListener("click", function() {
			antal = 0;
			localStorage.setItem("antal", 0);
			procent = 0;
			antalprocent.textContent = procent + "% memes watched  |";
			anotherhtml.textContent = "TO A";
			list.length = 0;
			list = originalList.slice();
		});
}