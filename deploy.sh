git checkout deploy 
git reset --hard master
npm run build
git add dist/
git commit -m "build pushed to gh-pages on `date`"
git push origin `git subtree split --prefix dist`:gh-pages --force-with-lease
git push origin deploy --force-with-lease
rm -rf dist/
git checkout master