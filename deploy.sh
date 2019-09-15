git checkout deploy \
&& git reset --hard master \
&& git push --force-with-lease \
&& git push --force-with-lease origin :gh-pages \
&& npm run build \
&& git add dist/ \
&& git commit -m "build pushed to gh-pages on `date`" \
&& git subtree push --prefix dist origin gh-pages \
&& git checkout master
