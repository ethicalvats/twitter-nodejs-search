module.exports = function(grunt) {
    "use strict";
  
    grunt.initConfig({
      ts: {
        app: {
          files: [{
            src: ["src/\*\*/\*.ts", "!src/.baseDir.ts"],
            dest: "./dist"
          }],
          options: {
            module: "commonjs",
            target: "es6",
            sourceMap: true,
            rootDir: "src",
            types: ["reflect-metadata"],
            experimentalDecorators: true,
            emitDecoratorMetadata: true,
          }
        }
      },
      watch: {
        ts: {
          files: ["src/\*\*/\*.ts"],
          tasks: ["ts"]
        }
      }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-ts");
  
    grunt.registerTask("default", [
      "ts"
    ]);
  
  };