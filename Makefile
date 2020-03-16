generate:
	@protodep up -f
	@rm -r ./protos/gincoinc ./protos/validate
	@mv -f ./vendor/* ./protos
	@rm -r ./vendor
	@rm -r ./gen && cd ./protos && prototool generate
