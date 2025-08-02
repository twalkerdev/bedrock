import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setGenerator("component", {
		description:
			"An example Turborepo generator - creates a new file at the root of the project",
		prompts: [
			{
				type: "input",
				name: "component",
				message: "What is the name of the workspace?",
				validate: (input: string) => {
					if (input.includes(".")) {
						return "Name cannot include an extension";
					}
					if (input.includes(" ")) {
						return "Name cannot include spaces";
					}
					if (!input) {
						return "Name is required";
					}
					return true;
				},
			},
			{
				type: "list",
				name: "type",
				message: "Typescript? or JavaScript?",
				choices: [".ts", ".js"],
			},
			{
				type: "input",
				name: "location",
				message:
					"Where would you like to create the component? (e.g., <root>/{new component location})",
				validate: (input: string) => {
					if (input.includes(" ")) {
						return "Location cannot include spaces or special characters";
					}
					if (!input) {
						return "Name is required";
					}
					return true;
				},
			},
		],
		actions: [
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ location }}/{{ component }}/package.json",
				templateFile: "templates/turbogen-packagejson.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/{{ location }}/{{ component }}/src/index{{ type }}",
				templateFile: "templates/turborepo-generators.hbs",
			},
		],
	});
}
