# Amentum

Amentum, a toolkit for Hoplon Web Development

## Documentation

A (not yet) full set of examples of how Amentum is used can be found
[here](https://stratema.github.io/amentum).

## Dependencies

- java 1.7+
- [boot][1]
- [hoplon][3]

## Usage
### Developing with Amentum
1. Start the `dev` task. In a terminal run:
    ```bash
    $ boot dev
    ```

    This will automatically build Amentum, create a jar and install
    that in your local maven repository as Amentum is not yet in Clojars.

2.  You can then require Amentum in your project as normal by requiring
    ```
    [stratema/amentum "0.1.0-SNAPSHOT"]
    ```
    in your build.boot or project.clj file.

### Developing Amentum itself
1.  Start the docs task. In a terminal run:
    ```
    $ boot docs
    ```

    Go to [http://localhost:3020][2] in your browser. You should see
    the welcome page of the Amentum documentation site. Boot is
    configured to automatically reload changes made to Amentum core or
    the docs site in your browser.

## License

Copyright © 2017, Stratema Ltd.

[1]: http://boot-clj.com
[2]: http://localhost:3020
[3]: http://hoplon.io
