// Builds the static site into _site/.
//
// Every file in pages/ is rendered inside layout/base.html and written to the
// same path under _site/. Files in static/ are copied as-is.
package main

import (
	"html/template"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// Page is what the templates receive.
type Page struct {
	Path string // URL path, e.g. "/" or "/produtos/boia.html"
	Year int    // build year, for the footer copyright
}

func main() {
	layout, err := template.ParseGlob("layout/*.html")
	check(err)
	check(os.RemoveAll("_site"))
	check(os.CopyFS("_site", os.DirFS("static")))

	check(filepath.WalkDir("pages", func(file string, d fs.DirEntry, err error) error {
		if err != nil || d.IsDir() || filepath.Ext(file) != ".html" { // skip editor swap/backup files
			return err
		}
		// The page file defines the blocks (title, content…) that base.html fills in.
		t, err := template.Must(layout.Clone()).ParseFiles(file)
		check(err)

		rel, _ := filepath.Rel("pages", file)
		out := filepath.Join("_site", rel)
		check(os.MkdirAll(filepath.Dir(out), 0o755))
		f, err := os.Create(out)
		check(err)
		defer f.Close()
		path := "/" + strings.TrimSuffix(filepath.ToSlash(rel), "index.html")
		return t.ExecuteTemplate(f, "base", Page{Path: path, Year: time.Now().Year()})
	}))
}

// check stops the build with the error message.
func check(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
