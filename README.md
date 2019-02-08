# mvc-vue-webpack4

By using these files, you can integrate Vue components in your ASP.NET MVC 5 project. Building your .vue files into usable .js files, just do 'npm run build:components' and you're good to go.

As the runtime for Vue shouldn't be included into the component.js files, a setting (optimization) was added to put the runtime in a separate vendors.js file. That file can be added in your layout page so it can be cached by the client's browser. This makes a difference of 104KB's that only needs to be downloaded once, whilst the component.js file (in the resulting dist folders) are only about 5KB per piece. Other imported npm libraries will also be included in that file...
