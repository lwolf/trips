package controllers

import (
    // "fmt"
    // "encoding/json"

    "github.com/revel/revel"
)

type Trip struct {
    *revel.Controller
}

func (c Trip) List() revel.Result {
    // return c.RenderJson()
    return c.Todo()
}

func (c Trip) Create() revel.Result {
    // return c.RenderJson()
    return c.Todo()
}

func (c Trip) View(id int) revel.Result {
    // return c.RenderJson()
    return c.Todo()
}

func (c Trip) Update(id int) revel.Result {
    // return c.RenderJson()
    return c.Todo()
}

func (c Trip) Delete(id int) revel.Result {
    // return c.RenderJson()
    return c.Todo()
}