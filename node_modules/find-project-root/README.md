# find-project-root [![Build Status](https://secure.travis-ci.org/kirstein/find-project-root.png?branch=master)](https://travis-ci.org/kirstein/find-project-root)

> Finds the project root by custom markers

### Getting started

1. As a binary  
    ```
      $ npm install find-project-root -g
      $ pwd
        /Users/kirstein/workspace/github/kirstein/find-project-root/test
      $ find-project-root
        /Users/kirstein/workspace/github/kirstein/find-project-root
    ```

2. As a node module

    ```
      $ npm install find-project-root
      var findProjectRoot = require('find-project-root');
      // magic
    ```

### What?

Traverses top-down of the project tree starting from a specific path and searches for known markers that indicate project starting point. 

Markers:  

  * .hg
  * .git

### API

`findProjectRoot(path, {options});`

options:  

  * maxDepth - int - total number of levels the algorithm can traverse  
    **default**: 9  
  * markers - [ 'str' ] - markers that it will search for  
    **default**: [ '.hg', '.git' ]
  
  
##### Example:

```
  var findProjectRoot = require('find-project-root');
  var root = findProjectRoot(process.cwd(), {
    maxDepth: 12
  });
```
