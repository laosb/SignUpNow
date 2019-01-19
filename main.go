package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"
	"path"

	"github.com/gobuffalo/packr"
)

var (
	addr = flag.String("addr", "127.0.0.1:3000", "listen on addr:port")

	box packr.Box
)

func notFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Add("Content-Type", "text/html; charset=utf-8")
	w.WriteHeader(http.StatusOK)
	s:= box.String("index.html")
	fmt.Fprintf(w, s)
}

func fileServerWithCustom404(fs http.FileSystem) http.Handler {
	fsh := http.FileServer(fs)
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		_, err := fs.Open(path.Clean(r.URL.Path))
		if os.IsNotExist(err) {
			notFound(w, r)
			return
		}
		fsh.ServeHTTP(w, r)
	})
}

func main() {
	flag.Parse()
	box = packr.NewBox("./dist")
	http.ListenAndServe(*addr, fileServerWithCustom404(box))
}
