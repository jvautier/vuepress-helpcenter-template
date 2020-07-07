# Markdown Cheat Sheet

>
> - https://daringfireball.net/projects/markdown/
> - https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax
> - https://github.github.com/gfm/

## Basic Syntax

All Markdown applications support these elements.

### Heading

# H1
```md
# H1
```

## H2
```md
# H2
```

### H3
```md
### H3
```

### Bold

**bold text**
```md
**bold text**
```

### Italic

*italicized text*
```md
*italicized text*
```

### Blockquote

> blockquote
```md
> blockquote
```

### Ordered List

1. First item
2. Second item
3. Third item

```md
1. First item
2. Second item
3. Third item
```

### Unordered List

- First item
- Second item
- Third item
```md
- First item
- Second item
- Third item
```

### Code

`code`
```md
`code`
```

### Horizontal Rule

---
```md
---
```

### Link

[title](https://www.example.com)
```md
[title](https://www.example.com)
```

### Image

![alt text](image.jpg)
```md
![alt text](image.jpg)
```

## Extended Syntax

Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| - | - |
| Header | Title |
| Paragraph | Text |
```md
| Syntax | Description |
| - | - |
| Header | Title |
| Paragraph | Text |
```

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```md
Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.
```

### Heading ID

### My Great Heading {#custom-id}
```md
### My Great Heading {#custom-id}
```

### Definition List

term
: definition
```md
term
: definition
```

### Strikethrough

~~Lorem ipsum~~
```md
~~Lorem ipsum~~
```

### Task List

- [x] Lorem ipsum
- [ ] Lorem ipsum
- [ ] Lorem ipsum
```md
- [x] Lorem ipsum
- [ ] Lorem ipsum
- [ ] Lorem ipsum
```