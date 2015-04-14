publish:
	ember build --environment production
	cp -a ./dist/. ./../bobisjan.github.com/
	cd ./../bobisjan.github.com
	git add .
	git commit -m "Update website"
	git push -f origin master
