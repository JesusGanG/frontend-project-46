install: install-deps
	npx simple-git-hooks
install-deps:
	npm ci
lint:
	npx eslint 
gendiff:
	node bin/gendiff.js
test:
	npx jest
test-coverage:
	npm test -- --coverage --coverageProvider=v8