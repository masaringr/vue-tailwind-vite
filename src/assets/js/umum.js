function panggilsafe(idata) {
	return new Promise((iResolve, iReject) => {
		//  fetch('http://localhost:5596/andro/ambil', {
        fetch('https://safe.ultrajaya.co.id/safeapi/andro/ambil', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
				"Authorization": "Basic dGVzdDpMYXJnbzEyMyE="
            },
            body: JSON.stringify(idata),
        })
        .then(response => response.json())
        .then(data => {
            iResolve( data);
        })
        .catch((error) => {
            iReject(error);
        });
	});   
}

function StrData(str) {
	var key = CryptoJS.enc.Utf8.parse('5752688631575268');
	var iv = CryptoJS.enc.Utf8.parse('5752688631575268');
	var idata = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(str), key, {
		keySize: 128 / 8,
		iv: iv,
		mode: CryptoJS.mode.CBC,
		padding: CryptoJS.pad.Pkcs7
	});

	return idata.toString();
}

function setCookie(cname, cvalue) {
	var d = new Date();
	d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function delete_cookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}