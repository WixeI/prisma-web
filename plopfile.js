module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a component",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter the component name (in PascalCase):",
        validate: (value) => {
          if (/^[A-Z][a-zA-Z]*$/.test(value)) return true;
          return "Component name must be in PascalCase (e.g., MyComponent)";
        },
      },
      {
        type: "list",
        name: "componentType",
        message: "Choose the component type:",
        choices: [
          "Functional Component",
          "ForwardRef Component",
          "Polymorphic Component",
        ],
      },
    ],
    actions: (data) => {
      if (!data) return [];

      const componentTypeToTemplate = {
        "Functional Component":
          "plop-templates/component/componentType/simple.tsx",
        "ForwardRef Component":
          "plop-templates/component/componentType/forwardRef.tsx",
        "Polymorphic Component":
          "plop-templates/component/componentType/polymorphic.tsx",
      };

      return [
        {
          type: "add",
          path: "src/components/{{componentName}}/{{componentName}}.tsx",
          templateFile: componentTypeToTemplate[data.componentType],
        },
        {
          type: "add",
          path: "src/components/{{componentName}}/index.tsx",
          templateFile: "plop-templates/component/general/index.ts",
        },
        {
          type: "add",
          path: "src/components/{{componentName}}/{{componentName}}.test.tsx",
          templateFile: "plop-templates/component/general/test.test.tsx",
        },
      ];
    },
  });

  plop.setGenerator("page", {
    description: "Generate a new page in src/pages directory",
    prompts: [
      {
        type: "input",
        name: "pageName",
        message: "Enter the page name (in PascalCase):",
        validate: (value) => {
          if (/^[A-Z][a-zA-Z]*$/.test(value)) return true;
          return "Page name must be in PascalCase (e.g., MyPage)";
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pageName}}/index.tsx",
        templateFile: "plop-templates/page/page.tsx",
      },
    ],
  });
};
