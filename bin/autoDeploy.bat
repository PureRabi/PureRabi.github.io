call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/PureRabi/PureRabi.github.io.git master:pages