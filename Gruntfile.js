module.exports = function(grunt) {
    "use strict";
  
    grunt.initConfig({
      ts: {
          options: {
              'compiler': './node_modules/typescript/bin/tsc'
          },
          default: {
              tsconfig: true
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