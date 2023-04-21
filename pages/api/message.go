package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Resp struct {
	Message string `json:"message"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "application/json")

	res := &Resp{
		Message: "Hello, World!",
	}
	data, err := json.Marshal(res)
	if err != nil {
		fmt.Fprintf(w, `{"message": "error"}`)
	}

	w.Write(data)
}
