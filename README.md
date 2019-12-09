# React list of goods

## Demo link
Add link here: `[DEMO LINK](https://YuliiaChupryna.github.io/react_list-of-goods/)`


## Task 
> Please write the numbers of implemented options in the Pull Request description (Implemented 1-7, or 1-3 and 5-7)
1. At first show a button `Start` on the page
2. After clicking a button show a `GoodsList` (ul > li) with given goods and hide the button
3. Add `Reverse` button to reverse current order of goods
4. Add `Sort alphabetically` button to show goods in alphabetical order
5. Add `Reset` button to show the goods in the initial order
6. Add `Sort by length` button
7. Add `<select>` with numbers from 1 to 10. (1 is default).
  When the value is changed show the goods with the length >= than selected number.
8. Reset button should clear reset the `<select>`


## Workflow
- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode 
- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy` 
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.


## Project structure
- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.
