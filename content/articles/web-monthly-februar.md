---
title: Web Monthly - Februar
summary: Summary of what I discovered and learned this month
published: false
createdAt: 2022-02-28T18:55:50.559Z
---
## Fig
TBD

## Ghostscript
I have been updating my resume lately and I needed a command line tool for quickly compressing pdf exports from figma. These are pretty big by default and not ideal when I want to send my resume in an email or when providing an link on my website. I found [ghostscript](https://www.ghostscript.com/) that does exactly what I was looking for. This is not a new package but still an open source pdf generator that works. There is though not an easy to remember command to compress an pdf with ghostscript and therefore best to create a bash function for that.

```
compresspdf() {
  gs -sDEVICE=pdfwrite -dNOPAUSE -dQUIET -dBATCH -dPDFSETTINGS=/${3:-"screen"} -dCompatibilityLevel=1.4 -sOutputFile="$2" "$1"
}
```
Now I can use it like this `compresspdf orginal.pdf compressed.pdf`

