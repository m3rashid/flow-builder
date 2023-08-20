package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/robertkrimen/otto"
)

type Body struct {
	Code string `json:"code" form:"code"`
}

func RunCode(ctx *fiber.Ctx) error {
	body := new(Body)

	if err := ctx.BodyParser(&body); err != nil {
		return err
	}

	vm := otto.New()
	v, err := vm.Run(body.Code)
	if err != nil {
		return err
	}
	return ctx.Send([]byte(v.String()))
}
