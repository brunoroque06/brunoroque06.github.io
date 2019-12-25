.PHONY: clean
clean:
	rm -rf _site/ node_modules/

.PHONY: prepare
prepare:
	bundle install; yarn install

.PHONY: serve
serve:
	jekyll serve
