.PHONY: clean
clean:
	rm -rf _site/ node_modules/

.PHONY: prepare
prepare:
	npm install

.PHONY: serve
serve:
	jekyll serve
