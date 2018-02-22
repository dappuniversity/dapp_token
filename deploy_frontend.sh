rsync -r src/ docs/
rsync build/contracts/* docs/
git add .
git commit -m "Builds front end app for GH pages"
git push

