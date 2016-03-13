/** EMAIL LINK **/
var emailLink = document.getElementById('emailLink')
var emailDetermined = false
emailLink.onclick = function emailMe() {
	if (emailDetermined) return true
	var firstName = prompt("Sorry to bother, but what is my first name? (it's written at the top of the page)")
		.trim().toLowerCase()
	if (firstName.length === 0) return false
	var email = firstName + "@" + document.domain
	emailDetermined = true
	emailLink.href = "mailto:" + email
	emailLink.innerText = email
}