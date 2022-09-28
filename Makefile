BIN := $(abspath ./bin)
GO_ENV ?= GOBIN=$(BIN)

$(BIN)/buf:
	test -f $(BIN)/buf || $(GO_ENV) go install github.com/bufbuild/buf/cmd/buf@v1.3.1
$(BIN)/protodep:
	test -f $(BIN)/protodep || $(GO_ENV) go install github.com/stormcat24/protodep@v0.1.7
$(BIN)/protoc-gen-validate:
	test -f $(BIN)/protoc-gen-validate || $(GO_ENV) go install github.com/envoyproxy/protoc-gen-validate@v0.6.0

.PHONY: generate
generate: check-protoc $(BIN)/buf $(BIN)/protodep $(BIN)/protoc-gen-validate clean
	$(BIN)/buf generate

.PHONY: protodep-up
protodep-up: $(BIN)/protodep
	$(BIN)/protodep up -f -c

.PHONY: clean
clean:
	rm -rf ./gen

.PHONY: check-protoc
REQUIRED := libprotoc 3.19.4
CURRENT := $(shell protoc --version)
check-protoc:
ifeq ($(CURRENT), $(REQUIRED))
	@echo $(CURRENT)
else
	@echo $(REQUIRED) is required, but found $(CURRENT)
	exit 1
endif
