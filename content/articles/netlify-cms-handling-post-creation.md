---
title: Netlify CMS - handling post creation
summary: TBD
published: false
createdAt: 2022-02-10T09:18:46.822Z
---
## Published date

Netlify CMS already provides two date fields `createdAt` and `updatedAt`. This is very nice but when using a static site generator such as Nuxt every time the site is freshly generated the `createdAt` field will be reset to today's date and loose it's originally created date. This is very unfortunate since all entries will then end up with the same date. But at the same time this makes total sense since the whole site it's content files gets regenerated. 

To overcome this issue I use the [datetime](https://www.netlifycms.org/docs/widgets/#datetime) field to overwrite the already available `createdAt` field.

```yaml
- {
  label: 'Created At',
  name: 'createdAt',
  widget: 'datetime',
  date_format: 'YYYY-MM-DD',
  time_format: false,
  hint: 'This field overwrites the default createdAt value. Which is by default set to current date instead of the date when the post was first created'
}
```

... DRAFT
- this way we have a new field in the admin
- The date value is set to today and saved in frontmatter ... show example
- when the site is regenerated this value will remain
- you can always overwrite this when you need 
- or set post to be published in the future.
- mention how to use updatedAt
- why do I save the field in this format
- how do we display the format