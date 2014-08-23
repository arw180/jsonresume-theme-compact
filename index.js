var fs = require('fs');
var Handlebars = require('handlebars');
var Moment = require('moment');

function render(resume) {
  var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");

  setTwitterUsername(resume);
  setGithubUsername(resume);

	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
};

function setTwitterUsername(resume) {
  for (var i=0; i < resume.basics.profiles.length; i++) {
  if (resume.basics.profiles[i].network.toLowerCase() === 'twitter') {
    resume.basics.twitter = resume.basics.profiles[i].username;
  }
}
}

function setGithubUsername(resume) {
  for (var i=0; i < resume.basics.profiles.length; i++) {
    if (resume.basics.profiles[i].network.toLowerCase() === 'github') {
      resume.basics.github = resume.basics.profiles[i].username;
    }
  }
}

Handlebars.registerHelper("prettifyDate", function(resumeDate) {
  var newDate = Moment(resumeDate).format('MMM YYYY');
  console.log('newDate: ' + newDate);
  return newDate;
});

module.exports = {
	render: render
}