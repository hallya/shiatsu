git checkout gh-pages \
&& git rebase master \
&& git push --force-with-lease \
&& npm run build \
&& git add dist/ \
&& git commit -m "build pushed to gh-pages on `date`" \
&& git subtree push --prefix=dist origin gh-pages \
&& git checkout master
