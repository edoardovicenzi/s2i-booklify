# s2i-booklify
This is a small utility that pulls books from the openlibrary.org API.

## What can it do
- Search books by subject
    - See the authors
    - See the title
- Click on a book to to see its description

## How
The stack:
- vanilla JS for all the logic and programmatic generation of lists and forms
- yarn
    - beacuse its just awesome!
- webpack
    - to bundle everything into a more compact solution.
    - to allow smoother CI/CD pipelines.
    - more control over assets, env variables and more.
- vanilla CSS
    - because it's fun!
    - classes have a structure that allows for easy conversion to SCSS if needed.
- One entry point to rule them all (index.html)
## Future works
- [ ] Search by Authors
- [ ] More user settings

