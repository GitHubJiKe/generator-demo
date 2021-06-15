const Generator = require('yeoman-generator');
const path = require('path')
const fs = require('fs');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('project', {
            type: String,
            required: false
        });

        this.name = path.basename(process.cwd());
    }

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'project',
            message: 'Your project name',
            default: this.name
        }, {
            type: 'input',
            name: 'user',
            message: 'Your name',
            default: 'yourname'
        }, {
            type: 'input',
            name: 'email',
            message: 'Your email',
            default: 'youremail'
        }, {
            type: 'input',
            name: 'description',
            message: 'description',
            default: 'A Vue.js project'
        }]).then(answers => {
            this.project = answers.project || this.options.project;
            this.user = answers.user;
            this.email = answers.email;
            this.description = answers.description;
        });
    }





    writing() {
        fs.mkdirSync('./' + this.project);
        
        this.fs.copyTpl(
            this.templatePath('./'),
            this.destinationPath('./' + this.project), {
            project: this.project,
            user: this.user,
            email: this.email,
            description: this.description
        }, {},
            {
                globOptions: {
                    dot: true
                }
            });
    }
};