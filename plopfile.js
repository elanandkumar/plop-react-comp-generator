module.exports = plop => {
  plop.setHelper("firstCharUpperCase", function(compName) {
    return compName.charAt(0).toUpperCase() + compName.slice(1);
  });
  const templateFiles = [
    "template/*.js",
    "template/*.json",
    "template/*.md",
    "template/.babelrc",
    "template/webpack*.js",
    "template/.gitignore",
    "template/src/*",
    "template/src/utils/*.js"
  ];

  // Declare a new generator called "newApp" for use with our react-redux-boilerplate app
  plop.setGenerator("container-comp", {
    // Succintly describes what generator does.
    description: "Create a new container component",

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your container component name?"
      }
    ],

    // List of actions to take.
    // Here we "add" new files from our templates or boilerplates.
    actions: [
      {
        type: "addMany",
        destination: "{{lowerCase name}}",
        base: "template",
        templateFiles: templateFiles
      },
      {
        type: "modify",
        path: "{{name}}/package.json",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{name}}"
      },
      {
        type: "modify",
        path: "{{name}}/webpack.config.client.js",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{name}}"
      },
      {
        type: "modify",
        path: "{{name}}/webpack.config.comp.js",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{name}}"
      },
      {
        type: "modify",
        path: "{{name}}/webpack.config.comp.min.js",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{name}}"
      },
      {
        type: "modify",
        path: "{{name}}/src/index.comp.js",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{firstCharUpperCase name}}"
      },
      {
        type: "modify",
        path: "{{name}}/src/index.client.js",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{firstCharUpperCase name}}"
      },
      {
        type: "modify",
        path: "{{name}}/src/index.html",
        pattern: /##__COMP_NAME__##/gi,
        template: "{{firstCharUpperCase name}}"
      }
    ]
  });
};
