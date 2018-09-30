all: serve

clean:
	rm -rf _site/

serve:
	jekyll serve

.PHONY: all clean serve 

