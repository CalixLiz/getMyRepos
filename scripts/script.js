console.log($)

var urlprof = 'https://api.github.com/users/CalixLiz'
var url = 'https://api.github.com/users/CalixLiz/repos'
var baseURL = 'https://api.github.com/users/'
var profileNode = document.querySelector('.profile')
var reposNode = document.querySelector('.repo')
var searchNode = document.querySelector('.searchBar')




var profilePromise = $.getJSON(urlprof)


function makeHTML(obj) {
	var getHTMLpro = ''

	
	getHTMLpro += '<img class="profilePic" src=' + '"' + obj.avatar_url + '"' + '>'
	getHTMLpro += '<div class="profile">' 
	getHTMLpro += '<h2 class="name">' + obj.name + '</h2>'
	getHTMLpro += '<h3 class="userName">' + obj.login + '</h3>'
	getHTMLpro += '<p class="location">' + obj.company + '</p>'
    getHTMLpro += '</div>'

	return getHTMLpro

}


function handleProfile(profileObj) {
	var allHTML = ''

	var profileObjects = profileObj
	allHTML += makeHTML(profileObjects)
    profileNode.innerHTML = allHTML

}


profilePromise.then(handleProfile)










var reposPromise = $.getJSON(url)


function makeRepoHTML(soloObj) {
	var getHTML = ''

	getHTML += '<div class="repos">'
	getHTML += '<h1>' + soloObj.name + '</h1>'
	getHTML += '<p>' + soloObj.description + '</p>'
	getHTML += '</div>'

	return getHTML

}

function handleReposResponse(obj) {
	var allReposHTML = ''

	var reposArray = obj

		for(var i = 0; i < reposArray.length; i ++) {
			allReposHTML += makeRepoHTML(reposArray[i])
		}

		reposNode.innerHTML = allReposHTML
}


reposPromise.then(handleReposResponse)



