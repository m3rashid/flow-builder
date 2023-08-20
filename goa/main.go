package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/m3rashid/flow-builder/handlers"
)

func main() {
	app := fiber.New(fiber.Config{
		AppName: "goa",
	})
	app.Use(cors.New(
		cors.Config{
			AllowOrigins: "http://localhost:3000",
			AllowMethods: "GET,POST,HEAD,PUT,DELETE,PATCH",
			Next:         nil,
		},
	))
	app.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendString("Hello, World!")
	})

	app.Post("/run-code", handlers.RunCode)

	app.Listen(":4000")
}
