PROJECTNAME="Speed Index"

all: prelogue build archive epilogue

prelogue:
	@echo ""
	@echo ">>> $(PROJECTNAME) build started"
	@echo ""

build: ./src
	@npm run build

archive: ./dist
	@zip si.zip -r ./dist

epilogue:
	@echo ""
	@echo ">>> $(PROJECTNAME) build has successfully finished"
	@echo ""

.PHONY: prelogue build archive epilogue
