# taylorsavage.com

## Organization

### Sections

### Collections

Within a section, sets of posts can be grouped together into a **collection**.

Collections are meant to be read as a set, start-to-finish.

To create a collection:

* Create a sub-folder under `content/writing`
* Create an `_index.md` file in the subfolder. Frontmatter including `title` will be used for this collection page.

Collections have a few special properties:

* Date published doesn't matter as much within a collection. Instead, posts in a collection are ordered by there `order_index` parameter values.
* When reading a post within a collection, the next and previous posts at the bottom are selected in order from the collection.
* Collections can contain `.Content` that will show up above the list of posts in that collection. This content is just the contents of the `_index.md` file below the frontmatter.