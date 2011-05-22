all:
	@cp .githooks/* .git/hooks/
	@chmod -R +x .git/hooks/

.PHONY: all
