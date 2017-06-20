const {
    FuseBox,
    JSONPlugin,
    SVGPlugin,
    CSSResourcePlugin,
    CSSPlugin,
    ReplacePlugin,
    BabelPlugin,
    QuantumPlugin,
    WebIndexPlugin,
    Sparky
} = require("fuse-box");

const OUTPUT_FOLDER = 'dist';

let fuse, app, vendor, isProduction;

Sparky.task("config", () => {
    fuse = new FuseBox({
        log: true,
        debug: false,
        homeDir: 'src/',
        sourceMaps: !isProduction,
        hash: isProduction,
        output: `${OUTPUT_FOLDER}/$name.js`,
        plugins: [
            SVGPlugin(),
            JSONPlugin(),
            CSSPlugin(),
            BabelPlugin(),
            WebIndexPlugin({
                template: "src/index.html"
            }),
            isProduction && QuantumPlugin({
                removeExportsInterop: false,
                uglify: true
            })
        ]
    });
    vendor = fuse.bundle("vendor").instructions("~index.jsx");
    app = fuse.bundle("app").instructions("!>[index.jsx]");
});

Sparky.task("default", ["clean", "config"], () => {
    fuse.dev();
    // app.watch().hmr();
    return fuse.run();
});

Sparky.task("clean", () => Sparky.src(`${OUTPUT_FOLDER}`).clean(`${OUTPUT_FOLDER}`));
Sparky.task("prod-env", ["clean"], () => { isProduction = true; });
Sparky.task("dist", ["prod-env", "config"], () => {
    fuse.dev();
    return fuse.run();
});
