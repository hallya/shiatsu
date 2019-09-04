git checkout deploy && grhh master \
gpf \ 
npm run build \
git add dist/ \
git commit -m "build pushed to gh-pages on `date`" \
git push origin `git subtree split --prefix dist`:gh-pages --force-with-lease \
git checkout master
