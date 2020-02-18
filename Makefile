.PHONY: clean
clean:
	rm -rf _site/ node_modules/

.PHONY: prepare
prepare:
	gem install bundler; gem update bundler; bundle install; yarn install

.PHONY: update
update:
	bundle update

.PHONY: serve
serve:
	bundle exec jekyll serve
