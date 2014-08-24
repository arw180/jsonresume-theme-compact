jsonresume-theme-compact
========================

A compact theme for a json-resume (http://jsonresume.org/)

[Demo](http://themes.jsonresume.org/compact)

## Usage 

To get started with this JSONResume theme, you'll need to have the 
JSONResume CLI installed. If you haven't already install it with 
```npm install -g resume-cli```. If this doesn't work, try 
```sudo npm install -g resume-cli```. After that, you can get your resume.json 
ready by typing ```resume init```. After hitting enter, your resume will be 
initialized and you can edit it and fill in the neccessary fields. Check out 
[the official resume-schema repository](https://github.com/jsonresume/resume-schema) 
for more information on filling these fields.

When you are finished with your resume, you may test it by yet again opening the 
command line and typing ```resume serve --theme compact``` to see how it looks 
with this theme. You can replace the word compact with other theme names too.

If you want a local copy of your resume, type in 
```resume export resumeName --theme compact```, and replace resumeName with the 
desired filename. You can export it in pdf and txt using the ```--format``` flag, 
like so:
```resume export resume --format pdf --theme compact```
However, if you wish to export it to the JSONResume Registry, use the command 
```resume publish``` instead.

More details about the CLI and it's commands are available [here](https://github.com/jsonresume/resume-cli).

## Tips
 * In the interest of compactness, this theme currently ignores the following resume data:
    - awards
    - publications
    - interests
    - languages
    - volunteer
    - references
 * Other fields are ignored too (skill level, location, full dates, etc). 
 * Your networks are shown in the top section of the resume. The resume template
    tries to use a font-awesome icon for each network named ```fa-{{network}}```. If 
    you enter a network with no corresponding font-awesome icon, it will not 
    be displayed properly. You can see the networks that are supported by 
    browsing the [font-awesome icons](http://fortawesome.github.io/Font-Awesome/icons/).
 * PDF generation via ```resume export``` doesn't quite work with this theme. For
 creating a PDF version using this theme, try manually saving the html version 
 via Chrome